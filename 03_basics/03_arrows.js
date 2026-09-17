const user = {
    username : "aryan",
    price : 99,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`); //this -> refers to current context
        console.log(this);
    }
}

// user.welcomeMessage() //aryan, welcome to the website
// user.username = "sam" //value/context change
// user.welcomeMessage() //sam, welcome to the website

// console.log(this); //empty object because no context in global : {}

//inside the browser the global object is "window" object

// function chai() {
//     console.log(this); //inside a function this contains a lot of things
//     console.log(this.username); //undefined : because this works inside an object not a function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//same thing for this variable type of function call

//ARROW FUNCTION

const chai = () => {
    let username = "hitesh"
    console.log(this); //{}
    console.log(this.username); //undefined
}

// chai()

//basic arrow function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2 //implicit return method
// const addTwo = (num1, num2) => (num1+num2) //returning an num
const addTwo = (num1, num2) => ({username : "aryan"}) //returning an object // { username: 'aryan' }

console.log(addTwo(3,4)); //7


