const express = require('express');
const server = express()
const todo = require('./Backend/hackerearth');

var port = process.env.PORT || 2000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/public', express.static(__dirname + "/Frontend"));

server.get('/trial', function (req, res) {
    res.send("Hello World");
})

server.use('/todo/', todo);

console.log("Server started at http://localhost:2000/public");

server.listen(port);