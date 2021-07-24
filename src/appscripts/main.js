let iosocket = io.connect();

let chatBox = document.getElementById("chatBox");
let typingBox = document.getElementById("typingBox");
let addNoteBox = document.getElementById("addNoteBox");
let sendButton = document.getElementById("sendButton");

// Open prompt box to prompt for the user name
let uname = prompt("Please enter your name (or leave blank to remain anonymous):");
uname = uname || "anon"; //in case the user does not input anything

iosocket.on("connect", function () {
	// MESSAGE PROCESSING HERE --------------
	// this is where we will process any message that comes from the server,
	//including those that are sent to us from other clients through the server -----------------
	// to receive messages, we will use the socket connection to listen for message event
	// when the message event is generated, the callback function is called with an argument, m: the message that was sent
	iosocket.on("message", function (m) {
		//console.log("You received a message " + m.data);
		//instead of just printing the object we get, we can print out the attribute we created to hold the message
		if (m.mtype === "chatText") {
			chatBox.value += m.username + "> " + m.data + "\n";
		}
		// print the message out to the chatbox of other clients connected

		if (m.mtype === "htmlCode") {
			const latestPostsElem = document.getElementById("latestPosts");
			let newCard = document.createElement("div");
			newCard.innerHTML = m.data;
			latestPostsElem.prepend(newCard);
		}
	});

	//---------------------------------------
	// if the connection was unsuccessful, we will define another event listener 'disconnect',
	// so that if the server wants to disconnect it, it will respond to that and give ourselves another console message
	iosocket.on("disconnect", function () {
		console.log("Disconnected");
	});
});

// For post function
submitButton.addEventListener("click", function (e) {
	var message;

	message = addNoteBox.value;

	if (message == "") {
		alert("Notes cannot be empty!");
	} else {
		var cardHtml;

        // create html element
		cardHtml = `
        <div class="col">
          <div class="card text-dark bg-warning mb-3  h-100">
            <div class="card-header"><strong>${uname}:</strong></div>
              <div class="card-body">
                <p class="card-text">${message.replace(/\n/g, "<br/>")}</p>
            </div>
          </div>
        </div>
        `;
		const latestPostsElem = document.getElementById("latestPosts");
		let newCard = document.createElement("div");
		newCard.innerHTML = cardHtml;
		latestPostsElem.prepend(newCard);
	}

	// clear the addNoteBox
	addNoteBox.value = "";

	// send the html code to the server
	iosocket.send({ username: uname, data: cardHtml, mtype: "htmlCode" });
});

// For post function
addNoteBox.addEventListener("keypress", function (event) {

	// if user press 'return' key, add a new line
	if (event.which == 13) {
		event.preventDefault();

        addNoteBox.value = addNoteBox.value + "\n";
	}
});

// For chat function
typingBox.addEventListener("keypress", function (event) {
	var message;

	// 'return' key
	if (event.which == 13) {
		event.preventDefault();

		message = typingBox.value;

		if (message != "") {
			// write text in the typingBox to the chatbox
			chatBox.value += uname + "> " + message + "\n";

			// clear the typingBox
			typingBox.value = "";

			// send message to server
			iosocket.send({
				username: uname,
				data: message,
				mtype: "chatText",
			});
		}
	}
});

// For chat function
sendButton.addEventListener("click", function (e) {
	var message;

	message = typingBox.value;

	if (message != "") {
		// write text in the typingBox to the chatbox
		chatBox.value += uname + "> " + message + "\n";

		// clear the typingBox
		typingBox.value = "";

		// send message to server
		iosocket.send({ username: uname, data: message, mtype: "chatText" });
	}
});
