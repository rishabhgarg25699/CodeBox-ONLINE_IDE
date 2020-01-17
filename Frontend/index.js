var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/c_cpp");
let inputbox = $('#input');
let outputbox = $('#output');
let time = $('#time');
let memory = $('#memory');
let share = $('#save');
let writelang = $('#write_lang');
let my_editor = $('#editor');

let wait = "Please wait, Your code is in process phase .......";

let language1 = "C++";
// -----------------LANGUAGES--------------------------------
$("#java").click(function () {
    editor.session.setMode("ace/mode/java");
    language1 = "JAVA";
    writelang.empty();
    writelang.append('<h6>  JAVA </h6>');
    // my_editor.empty();
    // my_editor.append(``)
});

$("#c").click(function () {
    editor.session.setMode("ace/mode/c_cpp");
    language1 = "C++"
    writelang.empty();
    writelang.append('<h6>  C++ </h6>');
    // my_editor.empty();
    // my_editor.append(``)
});

$("#python").click(function () {
    editor.session.setMode("ace/mode/python");
    language1 = "PYTHON";
    writelang.empty();
    writelang.append('<h6> Python </h6>');
    // my_editor.empty();
    // my_editor.append(``)
});

//-------------------THEMES----------------------------------------
$("#twi").click(function () {
    editor.setTheme("ace/theme/twilight");
});

$("#amb").click(function () {
    editor.setTheme("ace/theme/ambiance");
});

$("#cha").click(function () {
    editor.setTheme("ace/theme/chaos");
});

$("#rome").click(function () {
    editor.setTheme("ace/theme/chrome");
});

$("#mid").click(function () {
    editor.setTheme("ace/theme/clouds_midnight");
});

$("#clo").click(function () {
    editor.setTheme("ace/theme/clouds");
});

//-----------------------MAIN AJAX---------------------------------------
$("#first_button").click(function () {
    let code = editor.getValue();
    let input1 = inputbox.val();
    outputbox.empty();
    time.empty();
    memory.empty();
    share.empty();
    outputbox.append(wait);
    // console.log(input);
    $.post('/todo/', { task: code, input: input1, language: language1 }, function (data) {
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

