const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    idUsuario: {type: String, required: true, max: 60},
    nombres: {type: String, required: true, max:60},
    estatura: {type: Number, required: true, max:300},
    contacto: {type: String, required: true, max:15},
    edad: {type: Number, required: true, max: 60},
    etnia: {type: String, required: false, max: 25},
    complexion: {type: String, required: false, max:60},
    nacionalidad: {type: String, required: true, max:60}
});

module.exports = mongoose.model('usuarios', UsuariosSchema)