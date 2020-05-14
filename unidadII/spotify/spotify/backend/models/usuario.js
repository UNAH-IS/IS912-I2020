var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombreUsuario: String,
        playlists: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);