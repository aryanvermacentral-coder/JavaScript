// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() //global scope pollution by declaration

//IIFE executes immediately 

(function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
}) (); // ';' is necessary

//1st () : function definition
//2nd () : execution call

( (name) => { //through arrow function // simple iife
    console.log(`DB CONNECTED 2 ${name}`);
}) ("aryan");