var server = require('./server');
var io = require('socket.io')(server);

// Optinal!
// you may attach socket io to redis, so redis will manage socket io through multiple nodes
// I will comment those lines, if you need help contact me

// var redis       = require('socket.io-redis');
// io.adapter(redis({ host: 'localhost', port: 6379 }));
// io.set('origins', '*:*');

module.exports = io;
