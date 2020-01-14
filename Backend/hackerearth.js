const route = require('express').Router()
const main = require('./main')
let code = [];

route.get('/', function (req, res) {
    res.send(code);
})

route.post('/', async function (req, res) {
    code = req.body.task;
    let result = await main.compile(code);
    if (result.status === 0) {
        console.log("error while compiling the code");

    }
    else if (result.status === 1) {
        console.log("compiled with errors in code");
    }
    else {
        console.log("successfully compile");
        let result2 = await main.run(code);
        if (result2.status === 0) {
            console.log("error while running the code");
        }
        else if (result2.status == 1) {
            console.log("run with errors in code");
        }
        else {
            console.log("successfully run");
        }
    }
    res.end();
})

module.exports = route;



// route.post('/', function (req, res) {
//     code = req.body.task;
//     main.compile(code, req, res, function (response) {
//         if (response.status == 0) {
//             console.log("----------------Error came in compilation ----------------");
//             response.send({ error: err });
//         }
//         else {
//             console.log("------------ Compiles succesfully -------------------");
//             console.log("-----------Run Chalu hua ----------------------------");
//             main.run(code, req, res, function (response) {
//                 if (response.status == 0) {
//                     console.log("--------------Error came in running --------------");
//                     res.send({ error: err });
//                 }
//                 else {
//                     console.log("---------Vapis aa gaya --------------------");
//                     res.send(response);
//                 }
//             })
//         }
//     })
// })