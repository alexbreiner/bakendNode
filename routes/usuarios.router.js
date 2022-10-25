const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controllers');

router.post('/save', usuarioController.create);
router.get('/getAllUsers', usuarioController.find);
router.get('/getUser/:id', usuarioController.findOne);
router.put('/update', usuarioController.update);
router.put('/deleteEmpleado/:id', usuarioController.remove);

module.exports = router