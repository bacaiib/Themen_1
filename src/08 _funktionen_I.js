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

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
// ausgabeNamen2("Maria"); // Argument --> Daten 
// ausgabeNamen2("Nadim");
// ausgabeNamen2("Melanie");

function ausgabeNamen2(firstName) { // Parameter für Parameter
    console.log("Hallo, " + firstName  +"!");
}

/***** Funktionen 02c  *****/
// 2c. Mehrere Parameter / Argumente 


const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname? : "),prompt("Name? :"));

function ausgabeNamenParams(firstName, familyName) { // Parameter für Parameter
    console.log("Hallo, " + firstName + " " + familyName  +"!");
}


