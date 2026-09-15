//Dates 

let myDate = new Date() //myDate is an Object
// console.log(myDate); // 2026-09-15T18:34:23.550Z
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

let myCreatedDate1 = new Date(2023, 0, 21) // 0 Month -> January
// console.log(myCreatedDate1.toDateString()) // Sat Jan 21 2023

let myCreatedDate2 = new Date(2023, 0, 21, 10, 0) 
// console.log(myCreatedDate2.toLocaleString()); // 1/21/2023, 10:00:00 AM

let myCreatedDate3 = new Date("01-21-2007")
// console.log(myCreatedDate3.toLocaleString()); // 1/21/2007, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //in ms time
// console.log(myCreatedDate3.getTime());

// console.log(Math.floor(Date.now()/1000)); //in seconds(s)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})