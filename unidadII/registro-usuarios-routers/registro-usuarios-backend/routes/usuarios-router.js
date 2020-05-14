var express = require('express');
var router = express.Router();

var usuarios = [];
//Crear un usuario
router.post('/', function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }

    usuarios.push(usuario);
    res.send({codigoResultado:1,mensaje:'Registro guardado', usuarioGuardado: usuario});
});
//Obtener un usuario
router.get('/:id', function(req,res){
    if (req.params.id > (usuarios.length-1))
        res.send({codigoResultado:0,mensaje:"Usuario no existe"});
    else
        res.send(usuarios[req.params.id]);
});

//Obtener todos los usuarios
router.get('/',function(req,res){
    res.send(usuarios);
});

//Actualizar un usuario
router.put('/:id',function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }

    usuarios[req.params.id] = usuario;
    res.send({codigoResultado:1,mensaje:"Usuario actualizado"});
});

//Eliminar un usuario
router.delete('/:id', function(req,res){
    usuarios.splice(req.params.id, 1);
    res.send({codigoResultado:1,mensaje:"Usuario eliminado"});
});

module.exports = router;