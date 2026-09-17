// var c = 300

let a = 100

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER:", a);
    
}

// console.log(a); //100
// console.log(b);
// console.log(c); //this prints 30 because it is outside scope still it prints var c = 30

// {} -> SCOPE

//nested scope

function one() {
    const username = "aryan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //cannot access this

    two()
}

// one()

if (true) {
    const username = "aryan"
    if (username === "aryan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//interesting (below)

console.log(addone(5))

function addone(num){ //function
    return num + 1
}

console.log(addone(5)) //can be called before and after the function

const addTwo = function(num){ //function by variable holding
    return num + 2
}

addTwo(5) //can only be called after the function not before
