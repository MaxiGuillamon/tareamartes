var express = require('express');
var router = express.Router();

router.get('/',function(req ,res ,next){
    res.send('hola soy la pagina Viajes');
})
module.exports = router;