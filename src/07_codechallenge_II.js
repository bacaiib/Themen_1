/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

const firstName = prompt("Bitte Namen eingeben:");
const age =  parseInt(prompt("Bitte Alter eingeben:")); // "2" --> 2

// console.log(age);

// //}


if (age >= 0 && age <= 5){
    console.log(firstName + " trinkt Milch.");
} else if (age >= 6 && age <= 12){
    console.log(firstName + " trinkt Saft.");
} else if (age >= 13 && age <= 17){
    console.log(firstName + " trinkt Cola.");
} else if (age >= 18 && age <= 130){
    console.log(firstName + " trinkt Wein.");
} else {
    console.log("bitter Tee trinken.");
}
