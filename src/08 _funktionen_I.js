/***** Funktionen 01  *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
//test();

// Fuktionsrumpf | callee
// Funktionsdeklaration
function test ()
{
    console.log("Hallo, Benjamin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Maria";
    console.log("Hallo, " + firstName  +"!");
}

// console.log(firstName); // Fehler : scope!
