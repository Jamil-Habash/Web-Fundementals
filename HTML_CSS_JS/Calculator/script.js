function clr(){
    var display = document.querySelector("#display");
    display.innerHTML = "0";
    clear = 1;
}

var sum = 0;
var sub = 0;
var pro = 0;
var div = 0;
var op;
var first = 0;
var clear = 1;
var firstNum = 0;
var secondNum = 0;

function press(value){
    var display = document.querySelector("#display");
    if(clear == 1){
        display.innerHTML = "";
        clear = 0;
    }
    if(value == '+' || value == '-' || value == '*' || value == '/'){
        first = 1;
        clear = 1;
        op = value;
    }
    else{
        if(first == 0){
            display.innerHTML += value;
            firstNum = parseFloat(display.innerHTML);
        }
        if(first == 1){
            display.innerHTML += value;
            secondNum = parseFloat(display.innerHTML);

        }
    }
}

function calculate(){
    var display = document.querySelector("#display");
    if(op == '+'){
        sum = firstNum + secondNum;
        display.innerHTML = sum;
    } else if(op == '-'){
        sub = firstNum - secondNum;
        display.innerHTML = sub;
    } else if(op == '*'){
        pro = firstNum * secondNum;
        display.innerHTML = pro;
    } else if(op == '/'){
        div = firstNum / secondNum;
        display.innerHTML = div;
    }
    sum = 0;
    sub = 0;
    pro = 0;
    div = 0;
    first = 0;
    firstNum = 0;
    secondNum = 0;

}