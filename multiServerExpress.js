var express = require('express') 
, app = express()
, server = require('http').createServer(app) 
, socketio = require('socket.io'); 

var portnum = process.argv[2] || 3000; // use 3000 as default
 
// if no path is given, look for index.html
app.use(express.static('src')); 

// start the server listening on a port 
server.listen(portnum, function(){
	console.log ("server listening on port " + portnum);
});

socketio.listen(server).on('connection', function (socket) {
	//create a listener for this particular socket
	console.log("Got a connection on socket : " + socket);
	
    socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
    });
});