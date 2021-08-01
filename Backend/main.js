var hackerearth = require('hackerearth-node');
var hackerearth = new hackerearth('b54d164310f3e54bf8cc10e53c8619b395bfab1f');

var config = {};
config.time_limit = 2;
config.memory_limit = 323244;
config.language = "C++";

async function compile(code, input, language) {
    try {
        config.source = code;
        config.input = input;
        config.language = language;
        let result = await JSON.parse(await hackerearth.compile(config));
        if (result.compile_status == "OK") {
            return { "status": 2, "final": result };
        }
        else {
            return { "status": 1, "final": result };
        }
    }
    catch (err) {
        return { "status": 0, "final": result };
    }
}

async function run(code, input, language) {
    try {
        config.source = code;
        config.input = input;
        config.language = language;
        let result = await JSON.parse(await hackerearth.run(config));
        if (result.run_status.status == "AC") {
            return { "status": 2, "final": result };
        }
        else {
            return { "status": 1, "final": result };
        }

    }
    catch (err) {
        return { "status": 0, "final": result };
    }
}
exports = module.exports = {
    compile,
    run
}

// function compile(code, req, res, callback) {
//     config.source = code;
//     hackerearth.compile(config, function (err, result) {
//         if (err) {
//             console.log("-----------------Error in Compiling---------------------")
//             console.log(err);
//             res.send(err);
//             callback({ "status": 0 });
//         } else {
//             console.log("Compiled Succesfully " + JSON.parse(result));
//             res.send(JSON.parse(result));
//             callback({ "status": 1 });
//         }
//     });
// }
//
// function run(code, req, res, callback) {
//     config.source = code;
//     hackerearth.run(config, function (err, result) {
//         if (err) {
//             console.log("-----------------Error in running----------------------")
//             console.log(err);
//             res.send(err);
//             callback({ "status": 0 });
//         } else {
//             console.log("--------------------Run ho gaya hai bhaya--------------");
//             console.log(result);
//             res.send(result);
//             callback({ "status": 1 });
//         }
//     });
// }
