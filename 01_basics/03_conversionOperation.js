let score = "21"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(score);
// console.log(typeof valueInNumber);

// Notes
// "33" -> 33
// "33abc" -> NaN [Not A Number]
// true -> 1 | false -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 -> true; 0 -> false
// "" -> false
// "aryan" -> true

let num = 33
let strNum = String(num)
//console.log(strNum) //33
//console.log(typeof(strNum)); //string

/*********************** OPERATIONS **************************/
let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3);
// console.log(2/4);
// console.log(5%2);

let str1 = "aryan"
let str2 = " verma"
let str3 = str1 + str2
// console.log(str3); //concatenation of two strings

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 3); //123

// console.log(1 + 2 + "3"); //33

console.log(true); // true
console.log(+true); // 1
console.log(""); // empty line
console.log(+""); // 0
// '+' converts into Number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
//++gameCounter // prefix -> first value get changed then operation is performed
//gameCounter++ // postfix -> first the operation is performed then the value gets changed