const route = require('express').Router()
const main = require('./main')
let code = [];

route.get('/', function (req, res) {
    res.send(code);
})

route.post('/', async function (req, res) {
    code = req.body.task;
    input = req.body.input;
    language = req.body.language;

    let result = await main.compile(code, input, language);
    if (result.status === 0) {
        console.log("error while compiling the code");
        res.send(result.final);
    }
    else if (result.status === 1) {
        console.log("compiled with errors in code");
        // console.log(result);
        res.send(result.final);
    }
    else {
        console.log("--------------successfully compile---------------");
        // console.log(result);
        let result2 = await main.run(code, input, language);
        if (result2.status === 0) {
            console.log("error while running the code");
            res.send(result2.final);
        }
        else if (result2.status === 1) {
            console.log("run with errors in code");
            res.send(result2.final);
        }
        else {
            console.log("-------------------successfully run---------------------");
            // console.log("Result is " + result2.final.run_status.output);
            res.send(result2.final);
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