var express = require('express');
var router = express.Router();

router.post('/',function(req,res){
    res.send('Se va a guardar una cancion');
});

///....


module.exports = router;