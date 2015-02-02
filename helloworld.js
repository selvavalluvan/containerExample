var express = require('express')
var app = express()


app.get('/:id?', function (req, res) {

      if (!req.params.id) {
            res.send("Hello World !");
      } else {
            res.send("Hello "+req.params.id+" !");
      }
})


var server = app.listen(3000, function () {

      var host = server.address().address
      var port = server.address().port

      console.log('The app is listening at http://%s:%s', host, port)

})
