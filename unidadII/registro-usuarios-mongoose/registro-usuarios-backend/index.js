var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var testModule = require('./modules/test-module');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router');
var cancioensRouter = require('./routes/canciones-router');

var app = express();

app.use(cors());//Permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios', usuariosRouter);
app.use('/canciones', cancioensRouter);


app.get('/',function(req, res){
    res.send('Servidor backend en linea');
});

app.listen(8888, function(){
    console.log("Servidor levantado");
});