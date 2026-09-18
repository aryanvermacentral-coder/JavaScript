const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values :
// "0", 'false', " ", [], {}, function(){}, 1, true

//----------------------------------------------------------------------------------------------------------

//array check for empty: 
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//---------------------------------------------------------------------------------------------------------------

//object check for empty:
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //converts the object into array then its length property is used to check
    console.log("Object is empty");
}

//----------------------------------IMP-------------------------------------------------------
// false == 0 //true
// false == '' //true
// 0 = '' // true

//----------------------------------  Nullish Coalescing Operator (??): null , undefined  --------------------------

let val1;
// val1 = 5 ?? 10 //output: 5
// val1 = null ?? 10  //output: 10 : null safety check
// val1 = undefined ?? 15 //output: 15 : undefined safety check
val1 = null ?? 10 ?? 20 //output: 10 : assigns first value

console.log(val1);

//---------------------------------------  Terniary Operator  ---------------------------------------------------

// condition ? true : false

const iceTeaPrice = 100
(iceTeaPrice <= 80) ? console.log("less than 80") : console.log("more than 80") 