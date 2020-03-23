var express = require('express');
var app = express();

//Middleware
app.use(express.static('public'));//Use se utiliza para ejecutar funciones middleware

app.get('/', function(req, res){
    res.send('<html><body><h1>Hola Mundo</h1></body></html>');
});

app.get('/pagina1', function(req, res){
    res.send('<html><body><h1>Página 1</h1></body></html>');
});

app.get('/pagina2', function(req, res){
    res.send('<html><body><h1>Página 2</h1></body></html>');
});

app.get('/ab*cd', function(req, res){ //abCUALQUIERCOSAcd
    res.send('<html><body><h1>Cumple con el patron ab*cd</h1></body></html>');
});

app.get('/cd+ef', function(req, res){ //cdddddef
    res.send('<html><body><h1>Cumple con el patron cd+ef</h1></body></html>');
});

app.get('/capitulos/:numeroCapitulo',function(req,res){
    res.send(`<html><body><h1>Ver capitulo ${req.params.numeroCapitulo}</h1></body></html>`);
});

app.listen(8888, function(){
    console.log('Se levanto el servidor');
});