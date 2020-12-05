// lib/db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3380167',
  database: 'sql3380167',
  password: 'TXjmpfFCk8'
});
connection.connect();
module.exports = connection;

/*
Database Host: sql3.freemysqlhosting.net
Database Name: sql3378407
Database Username: sql3378407
Password: YpGMNPqfAj
http://www.phpmyadmin.co*/