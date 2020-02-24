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

let custom_position = {
    row: 0,
    column: 0
};

let java_text = `/*package whatever //do not write package name here */

import java.io.*;

class GFG {
	public static void main (String[] args) {
		System.out.println("Rishabh!");
	}
}`

let cplusplus_text = `#include<bits/stdc++.h>;
using namespace std;
#define ll long long int
#define pb push_back
#define mp make_pair
#define nt _int128
#define inf (int)1e9

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    ll t;
    // cin >> t;
    t = 1;
    while(t--)
    {

    }
    return 0;
}`

let python_text = `#code
print("Rishabh")`

editor.session.insert(custom_position, cplusplus_text);

// -----------------LANGUAGES--------------------------------
$("#java").click(function () {
    editor.session.setMode("ace/mode/java");
    language1 = "JAVA";
    writelang.empty();
    writelang.append('<h6>  JAVA </h6>');
    editor.setValue("");
    editor.session.insert(custom_position, java_text);
});

$("#c").click(function () {
    editor.session.setMode("ace/mode/c_cpp");
    language1 = "C++"
    writelang.empty();
    writelang.append('<h6>  C++ </h6>');
    editor.setValue("");
    editor.session.insert(custom_position, cplusplus_text);
});

$("#python").click(function () {
    editor.session.setMode("ace/mode/python");
    language1 = "PYTHON";
    writelang.empty();
    writelang.append('<h6> Python </h6>');
    editor.setValue("");
    editor.session.insert(custom_position, python_text);
});

$("#fullscreen").click(function () {
    editor.container.webkitRequestFullscreen()
})

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

