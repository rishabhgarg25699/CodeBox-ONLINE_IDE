var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let inputbox = $('#input');
let outputbox = $('#output');
let time = $('#time');
let memory = $('#memory');
let share = $('#save');

let wait = "Please wait, Your code is in process phase .......";

$("#first_button").click(function () {
    let code = editor.getValue();
    let input1 = inputbox.val();
    outputbox.empty();
    time.empty();
    memory.empty();
    share.empty();
    outputbox.append(wait);
    // console.log(input);
    $.post('/todo/', { task: code, input: input1 }, function (data) {
        console.log("--------------------------");
        console.log(data);
        // console.log(data.run_status.output);
        if (data.compile_status === "OK") {
            outputbox.empty();
            outputbox.append(data.run_status.output);
            time.append('<h6>' + data.run_status.time_used + '<h6>');
            memory.append('<h6>' + data.run_status.memory_used + '<h6>');
            share.append('<h6>' + data.web_link + '<h6>');
        }
        else {
            outputbox.empty();
            outputbox.append(data.compile_status);
        }
    })
})

