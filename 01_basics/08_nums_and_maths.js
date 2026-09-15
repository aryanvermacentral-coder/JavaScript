const score = 400 //automatically knows that it is a number
// console.log(score);//400

const balance = new Number(100) //explicitly number object defined 
// console.log(balance); //[Number: 100]

// console.log(balance.toString()); //100
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00 -> 2 decimal places value

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))//23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//commas acc to Indian Currency Notations

//------------------------------------------------ MATHS -------------------------------------------------------

// console.log(Math); // Math is an object with many properties - {}
// console.log(Math.abs(-69)); //69
// console.log(Math.round(69.69)); //70
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 1
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10

console.log(Math.random()); //random value between 0 and 1 (both incl)
console.log((Math.random()*10) + 1); //random value between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); //only int values between 1 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
