//array specific loops

//-----------------for of loop----------------------------------

//["", "", ""] -> strings inside array
//[{}, {}, {}] -> objects inside array

//for of loop on array
const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

//for of loop on string
const greeting = "Aryan Verma"

for (const i of greeting) {
    // console.log(i);
}

//------------------------------MAPS-------------------------------
//Map is an object which stores unique values and inputs get stored in same order

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") //does not store duplicates

// console.log(map);

for (const key of map) {
    // console.log(key); //print all values 
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);  
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of object) {
    console.log(key, ":-", value);  //objects are not iterable through this way "for of" loop
}

