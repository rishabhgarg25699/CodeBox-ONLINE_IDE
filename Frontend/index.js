var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let code = editor.getValue();
console.log(code);
console.log("Rishabh");



first_button.click(function () {
    console.log("Garg")
    let code = editor.getValue();
    console.log(code);
})

