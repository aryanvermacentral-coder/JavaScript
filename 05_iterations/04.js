//iterating objects 

const myObject = {
    js : "java script",
    cpp : "c++",
    rb : "ruby",
    go : "go Lang"
}

for (const key in myObject) {
    // console.log(key); //prints all the keys 
}

for (const key in myObject) {
    // console.log(`${key} stands for ${myObject[key]}`); 
}

//for in loop on array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //prints the index not the values
}

for (const key in programming) {
    // console.log(programming[key]); //prints the values
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//maps are not iterable through for in
for (const key in map) {
    console.log(key); //returns nothing
}