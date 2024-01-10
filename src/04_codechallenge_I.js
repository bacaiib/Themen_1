const prompt = require('prompt-sync')({sigint: true});

let zahl1 = Number(prompt("erste Zahl?: "));
let zahl2 = Number(prompt("zweite Zahl?: "));
let summe = zahl1 + zahl2;
console.log("Die Summe der Zahlen ist: " + summe);