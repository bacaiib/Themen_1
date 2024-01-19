/***** Erinnerung: Arrays *******/



// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr = [
//     ["Ich","bin","Max"],
//     ["Ich","bin","Moritz"]
//         ];



// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// nested loop

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {

//         output("Index i: " + i + " Index j: " + j);

//         output(arr[i][j]);      

//     }

// }

/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName: "Bahrang",
                familyName: "Valadkhani",
                salary: [120000, 160000],
                premission: true,
                sayHello: function(){
                    return "Hello, ich bin " + person.firstName  +  " und verdiene " + person.salary[1]
                }


                };

// output(person);
// output(person.familyName);
// output(person.salary[1]);
// output(person.sayHello());

// const txt = person.sayHello() + " Ich bin " + person.firstName + " " + person.familyName + " und verdiene " + person.salary[1] + " p.a."

const txt = person.sayHello() 

// output(txt);


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

let baikal = {
                value: "10m",
                deep: {
                        deeper:{
                                    temperature: "4 Grad Ceslisus",
                                    deepest: "Das Licht - auf 1642m!"
                        }
                }


            };


output(baikal);
output(baikal.value);
output(baikal.deep.deeper.temperature);
output(baikal.deep.deeper.deepest);


function output(outputData) {
    console.log(outputData);
}
