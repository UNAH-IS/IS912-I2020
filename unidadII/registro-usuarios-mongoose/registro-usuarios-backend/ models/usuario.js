var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: mongoose.SchemaTypes.Mixed,
    pais: String
});

module.exports = mongoose.model('usuarios',esquema);