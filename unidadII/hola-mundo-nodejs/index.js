var http = require('http');
var fs = require('fs');

var nombre = "Juan";
http.createServer(function(req, res){//Peticion, Respuesta
    //Se ejecuta por cada peticion del usuario

    console.log('Se recibio una peticion');
    if (req.url == '/pagina1'){
        res.writeHead(200, {'Content-type':'text/html'});//200 OK
        res.write(`<html><body><h1>Pagina 1</h1></body></html>`);
        res.end();
    }else if (req.url == '/pagina2'){
        res.writeHead(200, {'Content-type':'text/html'});//200 OK
        res.write(`<html><head><link rel="stylesheet" href="/estilos"></head></head><body><h1>Pagina 2</h1></body></html>`);
        res.end();
    }else if (req.url == '/estilos'){
        res.writeHead(200, {'Content-type':'text/css'});//200 OK
        res.write(`h1{color:red;}`);
        res.end();
    }else if (req.url == '/formulario'){
        fs.readFile('./formulario.html', function(error, data){
            res.writeHead(200, {'Content-type':'text/html'});//200 OK
            if (error)
                res.write(error);
            else
                res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-type':'text/html'});//200 OK
        res.write(`<html><body><h1>404 Not Found</h1></body></html>`);
        res.end();
    }
    
}).listen(4200,function(){
    console.log('Se levanto el servidor');
});