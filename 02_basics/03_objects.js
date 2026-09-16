//singleton created only from constructors and not literal
//object.create

//object literal (below)

const mySym = Symbol("key1")

const JsUser = {
    name : "Aryan",
    "full name" : "Aryan Verma",
    [mySym] : "myKey1", // imp way to write Symbol as a key
    age : 19,
    location : "Panipat",
    email : "aryan@verma.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", " saturday"]
}

// console.log(JsUser.email); //cannot access string keys specifically
// console.log(JsUser["email"]); //better way to access
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //myKey1

JsUser.email = "aryan@google.com"
// Object.freeze(JsUser) //can no longer make changes 
// console.log(JsUser["email"]);
JsUser.email = "aryan@amazon.com"
// console.log(JsUser["email"]);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greetingTwo());