var express = require('express')
var app = express()
var argv = require('optimist').argv;

app.get('/:id', function (req, res) {

        res.send("Hello "+req.params.id+" !");
});

app.get('/', function(req, res) {
                res.send("hello World"); 
        });
        // listen (start app with node server.js) ======================================
app.listen(8080, argv.fe_ip);
console.log("App listening on port 8080");
