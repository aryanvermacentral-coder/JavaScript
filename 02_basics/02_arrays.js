const mcu = ["thor", "ironman", "spiderman"]
const dcu = ["superman", "flash", "batman"]

// mcu.push(dcu) //takes dcu array as an input and adds into the array. It does not merge them together.

// console.log(mcu); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const cu = mcu.concat(dcu); //merges two arrays and makes a new array of them
// console.log(cu);

const allNewHeroes = [...mcu, ...dcu] // spread operator, can join more than 2 arrays also
// console.log(allNewHeroes);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newArr2 = newArr.flat(Infinity) //instead of infinity can also the depth uptil you want the array to be flat
// console.log(newArr2); //makes the array flat

console.log(Array.isArray("Aryan")); //false
console.log(Array.from("Aryan")); //converts into array, each character one element inside the array
console.log(Array.from({name : "Aryan"})); // gives empty array because it dosen't know whether to make and array of the key or the value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

