/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 2006;

// Berechnung Alter
let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!!
ageJohn = 2024 - birthYearJohn;
ageMark = 2024 - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// console.log("Datum: " + date);

// Deklaration 
let isJohnOlder // Is John older? --> y/n --> treu / false
isJohnOlder = (ageJohn > ageMark); // Test 
isJonEgual = (ageJohn == ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEquel: " + isJonEgual);