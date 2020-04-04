
var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

server.listen(3003, function() { 
    console.log('The development server is running at port 3003');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/css/index.css', function(req, res) {
    res.sendFile(__dirname + '/css/index.css');
});

io.on('connection', function (socket) {
    console.log('User has connected!');

    socket.on('disconnect', function() {
        console.log('User has disconnected')
    });
});