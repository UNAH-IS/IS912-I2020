var express = require('express');
var app = express();

app.use(express.static('www'));//use se utiliza para ejecutar middlewares

app.listen('4200',function(){
    console.log('Servidor levantado')
});