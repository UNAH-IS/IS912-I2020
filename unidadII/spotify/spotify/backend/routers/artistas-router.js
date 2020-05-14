var express = require('express');
var router = express.Router();
var artista = require('../models/artista');
var mongoose = require('mongoose');

//Obtener Artistas
router.get('/',function (req, res){
    artista.find({},{_id:true, nombreArtista:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//http://localhost:8888/artistas/1/albumes
//Obtener albumes y canciones
router.get('/:idArtista/albumes', function (req, res){
    artista.find({_id: mongoose.Types.ObjectId(req.params.idArtista)},{albumes:true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;
