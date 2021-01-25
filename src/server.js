const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const redis = require('socket.io-redis');
  app.get ( '/' , ( req, res ) => { 
    res.sendFile (__dirname + '/index.html' ); 
  });
  io.adapter(redis({ host: 'localhost', port: 6081 }));

//   io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

io.on('connection', (socket) => {
    // socket.broadcast.emit('hello', 'to all clients except sender');
    // socket.to('room42').emit('hello', "to all clients in 'room42' room except sender");
  });

http.listen(3050, () => {
    console.log('listening on *:3050');
  });
  