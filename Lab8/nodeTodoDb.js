const mysql = require('mysql');

const config = require('./config').config;

exports.addTodo = function (sessionId, todo, callback) {
	const con = mysql.createConnection(config);
	con.connect(function(err){
		if (err)
			return callback(err);
		console.log("Connection Established");
		var sql = "INSERT INTO Todos (description, sessionId) VALUES (?,?);";
		con.query(sql, [todo,sessionId], function(err, result){
			return callback(err);
		});
		con.end();
	});
};

exports.getTodos = function (sessionId, callback) {
	const con = mysql.createConnection(config);
	con.connect(function(err){
		if (err) 
			return callback(err);
		console.log("Connection Established");
		var sql = "SELECT * FROM Todos WHERE sessionId = ?;"
		con.query(sql,[sessionId], function(err, result) {
			return callback(err, results);
		});
		con.end();
	});
};