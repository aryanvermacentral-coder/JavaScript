//STACK AND HEAP MEMORY

//STACK IS USED FOR PRIMITIVE TYPES.
//HEAP IS USED FOR REFERENCE TYPES OR NON PRIMITIVE TYPES. (REFER TO 04_dataTypes_Summary.js)

let myName = "Aryan Verma" // this will go into stack.

let anotherName = myName
anotherName = "Aaru"

console.log(myName); // Aryan Verma
console.log(anotherName);

let user1 = {
    email : "user@google.com",
    upi : "user@sbi"
}

let user2 = user1 //This passes the reference.
// So, if there is any change in user2 or user1, the change will be reflected for both because the change is taking place directly onto the memory. See the example below.

user2.email = "aryan@google.com"
console.log(user1.email);
console.log(user2.email);

