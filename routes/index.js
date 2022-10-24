const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Hola mundo' });
 res.send("Prueba sin mostrar vista developer ")
});

module.exports = router;
