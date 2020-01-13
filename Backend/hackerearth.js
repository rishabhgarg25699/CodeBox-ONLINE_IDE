const route = require('express').Router()
const main = require('./main')
let code = [];

route.get('/', function (req, res) {
    res.send(code);
})

route.post('/', function (req, res) {
    code = req.body.task;
    main.compile(code, function (err, response) {
        if (err) {
            console.log("----------------Error came in compilation ----------------");
            response.send({ error: err });
        }
        else {
            console.log("------------Compiles succesfully -------------------");
            console.log(response);
            console.log("-----------Run Chalu hua ----------------------------");
            main.run(code, function (err, response) {
                if (err) {
                    response.send({ error: err });
                }
                else {
                    res.send(response);
                }
            })
        }
    })
})

// route.post('/', function (req, res) {
//     code = req.body.task;
//     main.compile(code)
//         .then(function (data) {
//             console.log("-----------data---------" + data);
//             main.run(code)
//                 .then(function (data1) {
//                     res.se
//                 })
//                 .catch((err) => res.send({ error: err }));

//         })
//         .catch((err) => res.send({ error: err }));
// })

module.exports = route;