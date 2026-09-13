// PRIMITIVE Type (call by value, changes in copy)
// 7 Types : Number. String, Boolean, BigInt, NULL, undefined, Symbol

const score = 100 //Number
const scoreValue = 100.50 //Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; //NULL
let userEmail; //undefined

//Symbol
const id = Symbol("123")
const anotherID = Symbol("123")
console.log(id === anotherID); //false

const bigNumber = 23187473865782456437n //BigInt

//-------------------------------------------------------------------------------------------------------------------

// REFERENCE Type [Non Primitive] (memory reference)
// Arrays, Objects, Functions

const heros = ["cap", "bucky", "warmachine"]; //array

let myObj = { // Object
    name : "Aryan Verma",
    age : 19
}

//function(){}
const myFunction = function() {
    console.log("Hello World");
}

//-------------------------------------------------------------------------------------------------------------------

// JavaScript is dynamically typed.
// That means you don't have to declare the type of a variable, and the type can change during the program.

// let x = 10;        // number
// x = "hello";       // string
// x = true;          // boolean

// JavaScript allows this because the type belongs to the value, not permanently to the variable.

//--------------------------------------------------------------------------------------------------------------------
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object