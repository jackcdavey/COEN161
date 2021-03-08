const mysql = require('mysql');

const config = require('./config').config;

exports.addTodo = function (sessionId, todo, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();
};

exports.getTodos = function (sessionId, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();  
};