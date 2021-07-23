var express = require('express') // we have to use express library (which we will have to install)
, app = express()
, server = require('http').createServer(app) //we have to use http library which is preinstalled in node already
, socketio = require('socket.io'); // to manage sockets, we have to use socket.io library

// to install libraries, we need to use npm command; "node package manager" 
//the package.json in this folder has all the info that the system needs in order to install everything that we need 
// it looks for these libraries under 'dependencies' in the package.json; 
//thats how it knows what to install for us when we typed "npm install" in command prompt and hit enter

var portnum = process.argv[2] || 3000; // Get portnum from the command line if it is there, otherwise use 3000 as default
 
// Use www as the "root" directory for all requests.
// if no path is given, it will look for index.html in that directoy.
app.use(express.static('www')); 
// we tell the app (application) through the use of the express library, to look in the "www" folder for static files, 
//thats where we will keep our index.html so that our webpage can be found

// Start the server listening on a port 
// then we set up a server to listen on port defined by portnum
server.listen(portnum, function(){
	console.log ("server listening on port " + portnum);
});

//------Additional code to get a chat server-------
//Basically whats happening is: ----------
// the client is going to send a socket request to our server. 
//When the server receives this client request it gets a connection event
//socketio is listening for a connection event and when it gets it, it runs the function which prints that its got a connection
// and sets up a new listener; this listener is listening for the message event and whenever the server gets a message, 
// it calls the function that will pass the function the message it received and turnaround and broadcast the message to other sockets  
// When we get a connection, 
socketio.listen(server).on('connection', function (socket) {
	//create a listener for this particular socket
	console.log("Got a connection on socket : " + socket);
	
    socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
    });
});