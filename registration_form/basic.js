// Types of language

// 1) Procedural Language (C language)
// 2) Static language(Java, C++): The variable's data type is not checked during compilation
// 3) Dynamic language(Python, js)
// 4) Interpreted language(Js, Python, Ruby):
// 4) High level language(Python)
// 5) Low level language (Assembly)
// 6) Middle level language(C++)

// Events in javascript

// 1) onclick    2) onmouseover 3) onmouseout











// let is block scoped while var is function scoped

// var percent = prompt("Enter the percentage");

// if(percent > 90){
//     console.log("Grade A");
//     document.getElementById('result').innerHTML = "Grade A";
// }
// else if(percent > 80){
//     console.log("Grade B"); 
//     document.getElementById('result').innerHTML = "Grade B";
// }
// else if(percent > 70){
//     console.log("Grade C");
//     document.getElementById('result').innerHTML = "Grade C";
// }
// else{
//     console.log("Grade D");
//     document.getElementById('result').innerHTML = "Grade D";

// }

function check(number){
    if(number % 2 == 0){
        console.log(number + " is an even number");
    }
    else{
        console.log(number + " is an odd number");
    }
}

check(90)