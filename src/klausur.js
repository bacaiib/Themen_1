function rechner(a,b,operator){
    let ergebniss;
    switch (operator){
         case "+":
             return add(a,b);
         case "-":
              return ergebniss = sub(a,b);
        
           default:
               return "ERROR";         
    }

}

function add(a,b){
   return a+b;
  }

function sub(a,b){
   return a-b;
}

console.log(rechner(2,6,"*"));
console.log(rechner(8,2,"-"));


