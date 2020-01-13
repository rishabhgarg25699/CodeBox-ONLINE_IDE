const route = require('express').Router()
const main = require('./main')
let code = [];

route.get('/', function (req, res) {
    res.send(code);
})

route.post('/', function (req, res) {
    code = req.body.task;
    main.compile(code)
        .then(function (data) {
            console.log("-----------data---------" + data);
            main.run(code)
                .then(function (data1) {

                })
                .catch((err) => res.send({ error: err }));

        })
        .catch((err) => res.send({ error: err }));
})

module.exports = route;