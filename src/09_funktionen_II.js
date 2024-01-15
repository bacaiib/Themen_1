

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check! / todo!
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "Division durch nUll geht nicht yaaa"
const ERROR_STR_GEN = "iwas ist schief gelaufen"

startApp();
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
	return parseInt(prompt("Num1?: "));
}

function getNum2() {
	return parseInt(prompt("Num2?: "));
}

function getOp() {
	return prompt("OP?: ");
}
// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

function calculator(a,b,op) {

	switch (op) {
		case  "+":  // add()
			return add(a,b);
		case "-":   // sub()
			return sub(a,b);
		case "*":   // mul()
			return mul(a,b);
		case "/":   // div()
		case ":":   // div()
			return div(a,b);
		default:    // Error
			return ERROR_STR_GEN;
	}
}

// module addition a + b | test
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b) {
	return a + b;
}

// module: subtraction a - b | test

// output(sub(2,2));

function sub(a,b) {
	return a - b;
}

// module: multiplikation a * b | Test

// output(mul(2,6));

function mul(a,b) {
	return a * b;
}

// module: divide a / b | Test


// output(div(2,2));
// output(div(2,2));
// output(div(2,0));

function div(a,b) {

	if (b == 0) {
		return ERROR_STR_DIV; // Ausnahme
	}
		return a / b; // Reguläres Verhalten
	} 

// module: output | test:

// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  