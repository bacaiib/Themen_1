

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


// module addition a + b | test
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b) {
	return a + b;
}

// module: subtraction a - b | test

// output(subtract(2,2));

function subtract(a,b) {
	return a - b;
}

// module: multiplikation a * b | Test

// output(mul(2,6));

function mul(a,b) {
	return a * b;
}

// module: divide a / b | Test

const ERROR_STR_DIV = "Division durch nUll geht nicht yaaa"
output(div(2,2));
output(div(2,2));
output(div(2,0));

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
  