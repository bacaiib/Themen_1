
const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "Durch null kann man nicht teilen"
const ERROR_STR_GEN = "Bitte einen Operator eingeben"
const ERROR_STR_INVALID_NUMBER = "Bitte gültige Zahl eingeben"

startApp();

function startApp() {
    let num1 = getNum("Num1?: ");
    let num2 = getNum("Num2?: ");
    if (num1 === null || num2 === null){
        return ERROR_STR_INVALID_NUMBER;
    }
        output(calculator(num1,num2,getOp()));
    
}

function getNum() {
    let num = parseInt(prompt("Gebe eine Zahl ein: "))
    if (isNaN(num)) {
    return null;
    }
    return num; 
}

function getOp() {
    return prompt("OP: ")
    
}

// output(calculator(23,12,"+"));
function calculator(a,b,op) {
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return sub(a,b);
        case ":":
        case "/":
            return div(a,b);
        case "*":
            return mul(a,b);
        default:
            return ERROR_STR_GEN;
    }
    
}
// output (div(3,6));
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
        return ERROR_STR_DIV
    }
    return a / b;
}

function output(outputData) {
    console.log(outputData) 
}