var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let inputbox = $('#input');
let outputbox = $('#output');
let wait = "Please wait, Your code is in process phase .......";



$("#first_button").click(function () {
    let code = editor.getValue();
    let input1 = inputbox.val();
    outputbox.empty();
    outputbox.append(wait);
    // console.log(input);
    $.post('/todo/', { task: code, input: input1 }, function (data) {
        console.log(data);
        console.log(data.run_status.output);
        outputbox.empty();
        outputbox.append(data.run_status.output);
    })
})

