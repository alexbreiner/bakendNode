const Usuario = require('../models/usuarios.model');

let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let usuario = new Usuario({
        idUsuario: req.body.idUsuario,
        nombres: req.body.nombres,
        estatura: req.body.estatura,
        edad: req.body.edad,
        etnia: req.body.etnia,
        direccion: req.body.direccion,
        complexion: req.body.complexion,
        nacionalidad: req.body.nacionalidad
    });

    if (usuario.$isEmpty()) {
        throw new Exception("Campos nulos")
    }
    

// create a new registre in the collection Schema with method save.
    usuario.save(function(err) {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al guardar el usuario";
            res.json(response)
            return;
        }

        response.exito = true;
        response.msg = "El usuario se guardo correctamente.";
        res.json(response);
    });
}
//get all employee
exports.find = (req, res) => {
    Usuario.find((err, usuarios) => {
        res.json(usuarios)
    });
}
//find one employee
exports.findOne = (req, res) => {
    Usuario.findOne({_id: req.params.id}, (err, usuario) => {res.json(usuario)});
}
//update employee
exports.update = () => {
    let usuario = {
        idUsuario: req.body.idUsuario,
        nombres: req.body.nombres,
        estatura: req.body.estatura,
        edad: req.body.edad,
        etnia: req.body.etnia,
        direccion: req.body.direccion,
        complexion: req.body.complexion,
        nacionalidad: req.body.nacionalidad
    }

    if (usuario.$isEmpty) 
        console.error("Campos vacios");

    usuario.findByIdUpdate(req.params.id, {$set: usuario}, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al actualizar  el usuario";
            res.json(response)
            return;
        }
        response.exito = true;
        response.msg = "El usuario se actualizo correctamente.";
        res.json(response);
    });    
}
//delete employee
exports.remove = (res, req) => {
    Usuario.findByIdAndRemove({_id: req.params.id}, (err) => {
        if (err) {
            console.error("Error:", err);
            response.exito = false;
            response.msg = "Error al eliminar  el usuario";
            res.json(response)
            return;
        }
        if (usuario.id == null) 
            console.error("id nulo");

        response.exito = true;
        response.msg = "El usuario se actualizo correctamente.";
        res.json(response);
    });
}

