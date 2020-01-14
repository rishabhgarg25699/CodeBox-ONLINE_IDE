var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let inputbox = $('#input');
let outputbox = $('#output');

$("#first_button").click(function () {
    let code = editor.getValue();
    let input1 = inputbox.val();

    console.log(input);
    $.post('/todo/', { task: code, input: input1 }, function (data) {
        // console.log("----------------index.js---aa gaya laut ke-------------------" + data);
        console.log(data);
        console.log(data.run_status.output);
        outputbox.empty();
        outputbox.append(data.run_status.output);
    })
})

