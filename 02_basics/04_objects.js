//object singleton

const tinderUser = new Object() // creates singleton
// const tinderUser = {} //does not create singleton but both are same, both create objects

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { //fullname is itself an object
        userfullname: { // one more nested object
            firstname: "aryan",
            lastname: "verma"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //same array problem ; object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //here {} is an empty output object which will be returnted and other objects are sources
//if only ob1, obj2 obj4 were written then all the values would be copied into obj1

const obj3 = {...obj1, ...obj2} // spread

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); //returns an array of keys
// console.log(Object.values(tinderUser)); //returns an array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true : checks whether that property exists or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aryan"
}

// course.courseInstructor

//object destructuring 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//JSON Struture object with no name
//JSON API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]