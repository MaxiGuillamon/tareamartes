var express = require('express');
var router = express.Router();
var usuariosModel= require('./../../models/usuariosModel')


router.get('/', function(req, res, next) {
    res.render('admin/login',{
    layout:'admin/layout'
});
  });
/* Para destruir la session */
router.get('/logout',function(req, res, next){
 req.session.destroy();    //destruir
 res.render ('admin/login',{
  layout:'admin/layout'
});

});


  router.post('/', async  (req,res,next) => {
try {
var usuario =req.body.usuario;
var password=req.body.password; 

var data= await usuariosModel.getUserByUsernameAndPassword(usuario,password);
console.log(data); // Para depuración
if (data != undefined) {
req.session.id_usuario = data.id; //nombre de la columna
req.session.nombre = data.usuario;
console.log('Sesión establecida:', req.session); // Para depuración
res.redirect('/admin/novedades');

} else {
  res.render('admin/login',{
    layout: 'admin/layout',
    error:true

  });
} //cierre else
}  catch (error) {
console.log(error);
}
})




module.exports = router;