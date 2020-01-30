var express = require('express');
var app = express();

app.use(express.static('www'));

app.listen('4200',function(){
    console.log('Servidor levantado')
});