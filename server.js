const express = require('express');
const server = express()
var port = process.env.PORT || 9000;

server.use(express.json);
server.use(express.urlencoded({ extended: true }));

server.get('/', express.static(__dirname + "/Frontend"));

server.get('/trial', function (req, res) {
    res.send("Hello World");
})

server.listen(port);