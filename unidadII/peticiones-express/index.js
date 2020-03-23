var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Middleware
app.use(express.static('public'));//Use se utiliza para ejecutar funciones middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/guardar',function(req,res){
    res.send(`Guardar el usuario ${req.body.nombre}`);
});

app.listen(8888, function(){
    console.log('Se levanto el servidor');
});
