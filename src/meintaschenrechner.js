

const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "teilen durch null fucking nicht möglich";
const ERROR_STR_GEN = "mit dem kack kan man nichst anfangen";
const ERROR_STR_INVALID_NUMBER = "nicht gültig dein eingabe yaaa";

startApp();

function startApp() {
    let num1 = getNum("Num1?: ");
    let num2 = getNum("Num2?: ");
    if (num1 === null || num2 === null) {
        return ERROR_STR_INVALID_NUMBER;
    } else {
        output(calculator(num1,num2,getOp()))
    }
}

function getNum() {
    let num = parseInt(prompt("Gib nummer ein junge! "));
    if(isNaN(num)){
        return null;
    }
    return num;
}

function getOp() {
    return prompt("gib op ein junge")
}

function calculator(a,b,op) {

    switch (op) {
        case "+":
           return add(a,b);
        case "-":
            return sub(a.b);
        case "*":  
            return mul(a,b);
        case "/":
        case ":":
            return div(a,b);
        default:   
            return ERROR_STR_GEN;
    }
    
}

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {

    if (b == 0) {
        return ERROR_STR_DIV;
    }
    return a / b;    
}

function output(outputData) {
    console.log(outputData)
}