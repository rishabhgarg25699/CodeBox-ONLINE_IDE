const route = require('express').Router()
const main = require('./main')
let code;

route.post('/', function (req, res) {
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
