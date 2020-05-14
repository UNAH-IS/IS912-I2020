var express = require('express');
var router = express.Router();
var usuario = require('../ models/usuario');

//Crear un usuario
router.post('/', function(req, res){
    let u = new usuario(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fechaNacimiento: {
                dia: req.body.dia,
                mes: req.body.mes,
                anio: req.body.anio
            },
            pais: req.body.pais
        }
    );
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener un usuario
router.get('/:id', function(req,res){
    usuario.find({_id:req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener todos los usuarios
router.get('/',function(req,res){
    usuario.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
    
});

//Actualizar un usuario
router.put('/:id',function(req, res){
    usuario.update(
        {
            _id:req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fechaNacimiento: {
                dia: req.body.dia,
                mes: req.body.mes,
                anio: req.body.anio
            },
            pais: req.body.pais
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Eliminar un usuario
router.delete('/:id', function(req,res){
    usuario.remove(
        {
            _id: req.params.id
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;