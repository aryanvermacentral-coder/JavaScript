const name = "Aryan"
const repoCount = 5
// old method -> console.log(name + repoCount + " value");

//console.log(`Hi I am ${name} and my repo count is ${repoCount}`);

const gameName = new String("dox-07")
// console.log(gameName[0]); //d
// console.log(gameName.__proto__); //object

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //DOX07
// console.log(gameName.charAt(0)); //d
// console.log(gameName.indexOf('x')); //2

const newString = gameName.substring(0, 4); //does not accept negative values
// console.log(newString) //dox-

const anotherString = gameName.slice(-8, 4) //accepts negative values
// console.log(anotherString); //dox-

const newStringOne = "           dox07.           "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // removes extra spaces 

const url = "https://aryan.com/aryan%21%verma"
// console.log(url.replace('%21%', '-')) // replaces the keyword

// console.log(url.includes('aryan')) //includes - checks whether that keywork is present or not

console.log(gameName.split('-')); //creates an array based on the split keyword : string to array

