var express = require('express');
var router =express.Router();


router.get('/',function(req,res,next){
 res.render('admin/novedades', {
  layout:'admin/layout',
  persona:req.session.nombre //esto es para que una vez entre a la pagina de novedades salude al ususario que inicio sesion
});
});



module.exports= router;