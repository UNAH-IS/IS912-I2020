var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombreArtista: String,
        albumes: Array
    }
);

module.exports = mongoose.model('artistas', esquema);