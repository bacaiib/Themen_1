function rechner(a, b, operator) {
    let ergebniss;

    switch (operator) {
        case "*":
            ergebniss = add(a, b);
            break;
        case "-":
            ergebniss = sub(a, b);
            break;
        default:
            return "ERROR";
    }

    return `Das Ergebnis lautet: ${ergebniss}`;
}


function add(a, b) {
   return a + b; // Hier sollte es '+' statt '*' sein, um eine Summation durchzuführen
}

function sub(a, b) {
   return a - b;
}

console.log(rechner(2, 6, "*"));
console.log(rechner(8, 2, "-"));