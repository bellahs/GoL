var express = require ('express')
var app = express()
var server = require ('http').Server(app)

app.use(express.static("."))
console.log(11111);

app.get('/', function (req, res){
    res.redirect('index.html')
})
server.listen(3000)