const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');

router.post('/save', empleadosController.create);
router.get('/getEmpleados', empleadosController.find);
router.get('/getEmpleado/:id', empleadosController.findOne);
router.put('/update', empleadosController.update);
router.delete('/deleteEmpleado/:id', empleadosController.remove);

module.exports = router