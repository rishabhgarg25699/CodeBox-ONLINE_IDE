var hackerearth = require('hackerearth-node');
var hackerearth = new hackerearth('203157672c819e6d5ca8ace68ad81fbe08758ba6');

var config = {};
config.time_limit = 2;
config.memory_limit = 323244;
// config.source = "print 'Hello World'"
config.input = "";
config.language = "c++";

function compile(code) {
    config.source = code;
    hackerearth.compile(config, function (err, response) {
        if (err) {
            //deal with error
            console.log(err);
            response.send(err);

        } else {
            //deal with response
            console.log("Compiled Succesfully" + response);
            response.send("1");
        }
    });
}

function run(code) {
    config.source = code;
    hackerearth.run(config, function (err, response) {
        if (err) {
            //deal with error
            console.log(err);
            response.send(err);
        } else {
            //deal with response
            console.log(response);
            response.send(response);
        }
    });
}

exports = module.exports = {
    compile,
    run
}