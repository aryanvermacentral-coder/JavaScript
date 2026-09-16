//functions

function sayMyName(){ //function definition
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

sayMyName //reference
// sayMyName() //function call execute

// function add2Nums (num1, num2) { //num1 and num2 are parameters of the function
//     console.log(num1 + num2); 
// }

// add2Nums(3, 7) //10 // here 3 and 7 are the arguments of the function
// add2Nums(3, "7") //37 string
// add2Nums(3, "a") //3a string
// add2Nums(3, null) //3

function add2Nums (num1, num2) { //num1 and num2 are parameters of the function
    // let reuslt = num1 + num2
    // return result
    return num1 + num2
}

const result = add2Nums(3, 5) //8
// console.log("Result : ", result); //here result gives undefined

function userLoginMessage(username = "sam") { //given a default value "sam"
    if(username == undefined) { //can also write (!username)
        console.log("Please enter an username");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("aryan"))
// console.log(userLoginMessage()) //if we do not pass any argument then it shows undefined
 
function calculateCartPrice(val1, val2, ...num1) { //rest operator(...) //converts extra inputs into array
    return num1
}

// console.log(calculateCartPrice(2)) //2
// console.log(calculateCartPrice(200, 400, 500, 2000)) //val1 = 200, val2 = 400, [500, 2000]

const user = {
    username: "aryan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({ //object passed as input
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));