var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
var novedadesModel =require('../models/novedadesModel');

/* GET home page. */

router.get('/', async function(req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  res.render('index',{
 novedades
});
});
  
  /*novedades = novedades.splice(0,5); */
 
router.post('/', async (req, res, next) => { //recibo  info a traves del metodo post
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;
  var obj = {
    to: 'guillamonmaxii@gmail.com',
    subjet: 'CONTACTO WEB',
    html: nombre + " se conecto a traves de la web y quiere mas informacion a este correo :" + email +".<br> Ademas, hizo este comentario: " + mensaje + ".<br> Su tel es: " + telefono
  }
  var transport =nodemailer.createTransport({ //creo el transporte con var. Este es el encargado de que lleguen los datos
    host: process.env.SMTP_HOST, //Es el contenido de env
    port: process.env.SMTP_PORT,
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    } 
    //cierra transporte
  });
  var info= await transport.sendMail(obj);
  res.render('index',{
    message:'Mensaje enviado correctamente'});
});
module.exports = router;
