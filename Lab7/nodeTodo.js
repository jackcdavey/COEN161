const fs = require('fs');

exports.handleTodoList = function(req, res, session) {
	switch(req.method) {
		case "GET":
		fs.readFile("./sessions/" + session.id, function(data) {
			//load list data from previous session
			session.todoList = JSON.parse(data).todoList;
		//send empty array if undefined
		if(!session.todoList)
			res.end(JSON.stringify(new Array()));
		else {
			var tempList = new Array();
			for(var i = 0; i < session.todoList.length; i++)
				tempList.push({id: i, description: session.todoList[i]});
			res.end(JSON.stringify(tempList));
		}
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end();
	});
		break;

		case "POST":
		//init list
		if(!session.todoList)
			session.todoList = new Array();

		//process request
		convertRequest(req, function(data){
			session.todoList.push(data.todo);
			//save session data
			fs.writeFile("./sessions/" + session.id, JSON.stringify(session), function(err) {
				if (err) {
					res.writeHead(500, {'Content-Type': 'text/html'});
					return res.end("500 Internal Server Error");
				}
				//end request
				res.writeHead(200, 'OK');
				res.end();
			});
		});
		break;

		default:
		res.writeHead(405, {'Allow': 'GET, POST'});
		res.end("Not Allowed");
	}
};
  //converts the HTTP POST request body into a JSON object
  function convertRequest(req, callback) {
  	let data = "";
  	req.on('data', chunk => {
  		data += chunk.toString();
  	});
  	req.on('end', () => {
  		callback(JSON.parse(data));
  	});
  }