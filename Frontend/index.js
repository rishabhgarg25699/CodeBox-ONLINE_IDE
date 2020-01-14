var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let inputbox = $('#input');


$("#first_button").click(function () {
    let code = editor.getValue();
    let input1 = inputbox.val();
    console.log(input);
    $.post('/todo/', { task: code, input: input1 }, function (data) {
        console.log("----------------index.js---aa gaya laut ke-------------------" + data);
        console.log(data);
    })
})

