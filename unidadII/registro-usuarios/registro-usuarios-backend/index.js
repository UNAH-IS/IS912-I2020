var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());//Permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var usuarios = [];

app.get('/',function(req, res){
    res.send("Peticion recibida");
});

//Crear un usuario
app.post('/usuarios', function(req, res){
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
app.get('/usuarios/:id', function(req,res){
    if (req.params.id > (usuarios.length-1))
        res.send({codigoResultado:0,mensaje:"Usuario no existe"});
    else
        res.send(usuarios[req.params.id]);
});

//Obtener todos los usuarios
app.get('/usuarios',function(req,res){
    res.send(usuarios);
});

//Actualizar un usuario
app.put('/usuarios/:id',function(req, res){
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
app.delete('/usuarios/:id', function(req,res){
    usuarios.splice(req.params.id, 1);
    res.send({codigoResultado:1,mensaje:"Usuario eliminado"});
});

app.listen(8888, function(){
    console.log("Servidor levantado");
});