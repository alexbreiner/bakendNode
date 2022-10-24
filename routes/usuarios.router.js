const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');

router.post('/save', empleadosController.create);
router.get('/getAllUsers', empleadosController.find);
router.get('/getUser/:id', empleadosController.findOne);
router.put('/update', empleadosController.update);

module.exports = router