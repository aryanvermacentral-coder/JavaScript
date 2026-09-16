//arrays

// const Array = [1,2,3,4,5,6,7,8,9,true,"Aryan"] //can be any data type 

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]); //0

const myHeroes = ["steve", "bob", "bucky", "nat"]

const myArr2 = new Array(1, 2, 3, 4, 5)

//array methods

// myArr.push(8);
myArr.push(9);
myArr.pop();
// console.log(myArr);

myArr.unshift(9); //becomes the first element of the array and other elements get shifted
// console.log(myArr);
myArr.shift(); //removes the first element from the array

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1 : does not exist

const newArr = myArr.join() //converts array into string
// console.log(myArr); //array
// console.log(newArr); //string

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice is copying method, returns a shallow copy
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //is a mutating method, changes are reflected in the original array
console.log(myn2);
console.log("C ", myArr);


