var express = require('express')
var app = express()
var argv = require('optimist').argv;

app.get('/:id?', function (req, res) {

      if (!req.params.id) {
            res.send("Hello World !");
      } else {
            res.send("Hello "+req.params.id+" !");
      }
})

app.listen(3000, argv.fe_ip);
console.log("App listening on port 8080");
