var hackerearth = require('hackerearth-node');
var hackerearth = new hackerearth('203157672c819e6d5ca8ace68ad81fbe08758ba6');

var config = {};
config.time_limit = 2;
config.memory_limit = 323244;
// config.source = "print 'Hello World'"
config.input = "";
config.language = "C++";

async function compile(code) {
    try {
        config.source = code;
        let result = JSON.parse(await hackerearth.compile(config));
        console.log(result);
        console.log("-------------------Compile ho gaya bhaya ----------------------");
        if (result.compile_status == "OK") {
            console.log("-------Compiled Successfully-----");
            // run the code right here.....
            // define your own status codes .... 2 is for compiled and run..
            return { "status": 2 };
        }
        else {
            // compiled with errors in code....
            return { "status": 1 };
        }

    }
    catch (err) {
        console.log(err);
        //error while compling the code ....
        return { "status": 0 };
    }
}

async function run(code) {
    try {
        config.source = code;
        let result = JSON.parse(await hackerearth.run(config));
        console.log(result);
        console.log("-------------------Run ho gaya bhaya ----------------------");
        if (result.run_status.status == "AC") {
            console.log("-------Run Successfully-----");
            return { "status": 2 };
        }
        else {
            return { "status": 1 };
        }

    }
    catch (err) {
        console.log(err);
        return { "status": 0 };
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