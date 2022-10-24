const Empleado = require('../models/empleados.model');

let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    });

    if (empleado.$isEmpty()) {
        throw new Exception("Campos nulos")
    }
    

// create a new registre in the collection Schema with method save.
    empleado.save(function(err){
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al guardar el empleado";
            res.json(response)
            return;
        }

        response.exito = true;
        response.msg = "El empleado se guardo correctamente.";
        res.json(response);
    });
}
//get all employee
exports.find = (req, res) => {
    Empleado.find((err, empleados) => {
        res.json(empleados)
    });
}
//find one employee
exports.findOne = (req, res) => {
    Empleado.findOne({_id: req.params.id}, (err, empleado) => {res.json(empleado)});
}
//update employee
exports.update = () => {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }
    if (empleado.$isEmpty) 
        console.error("Campos vacios");

    empleado.findByIdUpdate(req.params.id, {$set: empleado}, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al actualizar  el empleado";
            res.json(response)
            return;
        }
        response.exito = true;
        response.msg = "El empleado se actualizo correctamente.";
        res.json(response);
    });    
}
//delete employee
exports.remove = (res, req) => {
    Empleado.findByIdAndRemove({_id: req.params.id}, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al eliminar  el empleado";
            res.json(response)
            return;
        }
        if (empleado.id == null) 
            console.error("id nulo");

        response.exito = true;
        response.msg = "El empleado se actualizo correctamente.";
        res.json(response);
    });
}

