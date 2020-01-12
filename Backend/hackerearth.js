const route = require('express').Router()
const main = require('./main')
let code = [];

console.log("Hackerearth.js 1");


route.get('/', function (req, res) {
    res.send(code);
})

route.post('/', function (req, res) {
    console.log("Rishbah");
    console.log("Hackerearth.js 1" + req.body.task + "Garg");
    code = req.body.task;
    console.log(code);
    main.compile(code)
        .then(function (data) {

            main.run(code)
                .then(function (data1) {

                })
                .catch((err) => res.send({ error: err }));

        })
        .catch((err) => res.send({ error: err }));
})
