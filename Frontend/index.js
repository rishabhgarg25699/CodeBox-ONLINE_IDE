var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
$("#first_button").click(function () {
    let code = editor.getValue();
    console.log(code);
    $.post('/todo', { task: code }, function (data) {
        console.log("This is " + data);
    })
})

