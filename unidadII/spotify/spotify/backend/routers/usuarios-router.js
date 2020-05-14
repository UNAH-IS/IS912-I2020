var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

//Obtener usuarios
router.get('/',function (req, res){
    usuario.find({},{_id: true, nombreUsuario:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener playlist y sus canciones
//http://localhost/usuarios/123/playlist/3
router.get('/:idUsuario/playlists/:idPlaylist',function (req, res){
    usuario.find(
        {
            _id: req.params.idUsuario,
            "playlists._id" : mongoose.Types.ObjectId(req.params.idPlaylist)
        },
        {"playlists.$":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener listado de las playlist
//http://localhost/usuarios/123/playlists
router.get('/:idUsuario/playlists',function (req, res){
    usuario.find(
        {
            _id: req.params.idUsuario
        },
        {"playlists":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Guardar cancion en playlist
router.post('/:idUsuario/playlists/:idPlaylist/canciones', function (req, res){
    usuario.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario),
            "playlists._id":mongoose.Types.ObjectId(req.params.idPlaylist)
        },
        {
            $push:{
                "playlists.$.canciones":{
                    nombreCancion:req.body.nombreCancion,
                    artista:req.body.artista,
                    album:req.body.album
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


//Crear un nuevo playlist
router.post('/:idUsuario/playlists', function (req, res){
    usuario.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUsuario) 
        },
        {
            $push:{
                playlists:{
                    _id: mongoose.Types.ObjectId(),
                    tituloPlayList: req.body.tituloPlayList,
                    canciones: []
                }
            }
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
