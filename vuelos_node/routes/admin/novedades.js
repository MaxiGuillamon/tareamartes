var express = require('express');
var router =express.Router();
var novedadesModel = require('./../../models/novedadesModel');


router.get('/',async function(req, res, next) {
 var novedades = await novedadesModel.getNovedades();
 res.render('admin/novedades' ,{
layout:'admin/layout', 
usuario: req.session.nombre, novedades
}); 
}); 

/* Para eliminar novedades */

 router.get('/eliminar/:id', async(req,res,next)=>{
const id = req.params.id;

await novedadesModel.deleteNovedadesById(id);
res.redirect('/admin/novedades')  
}); //cierra eliminar novedades

 //muestra la vista
router.get('/agregar', (req, res , next)=>{
 res.render('admin/agregar',{ //agregar hbs
 layout: 'admin/layout'
});
});//cierra el get


// inserta en  la BD en la tabla de novedades
router.post('/agregar', async (req, res, next) => {
 try {
    if(req.body.titulo  !="" && req.body.subtitulo !="" && req.body.cuerpo  !=""){
        await novedadesModel.insertNovedad(req.body);
        res.redirect('/admin/novedades')
    } else {  
        res.render('admin/agregar', {
            layout:'admin/layout',
            error: true, message:'Todos los campos son requeridos'
    })
}
 }  catch (error){
    console.log(error)
    res.render('admin/agregar',{
        layout:'admin/layout',
        error: true,
         message:'No se cargo la novedad'
    });
}   
});


router.get('/modificar/:id', async (req, res, next) => {
    var id =req.params.id;

    var novedad = await novedadesModel.getNovedadById(id);
    
    res.render('admin/modificar' ,{ //modificar.hbs
        layout:'admin/layout', 
        novedad
   }); 
   }); //cierre get modificar


router.post('/modificar', async (req, res, next) => {
    try {
       var obj =  {
        titulo:req.body.titulo,
        subtitulo: req.body.subtitulo, 
        cuerpo: req.body.cuerpo
       }


       await novedadesModel.modificarNovedadesById(obj, req.body.id);
       res.redirect('/admin/novedades');
       
   }
    catch (error){
       console.log(error)
       res.render('admin/modificar',{
           layout:'admin/layout',
           error: true, message:'No se modifico la novedad'
       })
   }   
   })
   
module.exports= router;