
let para2 = document.getElementById('para2');

let a = 0;
function handleAddClick(){

    a++;
    para2.innerHTML = 'The value is: ' +a;

}
function handleMinusClick(){

    a--;
    para2.innerHTML = 'The value is: ' +a;

}
function handleResetClick(){

    a = 0;
    para2.innerHTML = 'The value is: ' +a;

}

let div1 = document.getElementById('div1');

function handleColor(){
    div1.style.color = 'white'
}
function handleDisplay(){
    div1.innerHTML = ''
}


let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let para1 = document.getElementById('para1');

const down = () => {
    para1.innerHTML = "typing...";
}
const up = () => {
    para1.innerHTML = "";
}       

let hover = document.getElementById('hover_over');
let para3 = document.getElementById('para3');

hover.addEventListener('mouseover', () => {
    hover.style.backgroundColor = 'lightblue';
    para3.innerHTML = '';
});
hover.addEventListener('mouseout', () => {
    hover.style.backgroundColor = '';
    para3.innerHTML = 'Hover';
});