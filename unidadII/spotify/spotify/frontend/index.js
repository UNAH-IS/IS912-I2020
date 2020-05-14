var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen(4444, function(){
    console.log("Servidor del frontend levantado en 4444");
});
