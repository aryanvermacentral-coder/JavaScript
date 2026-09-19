//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (item) => { //arrow function
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

//[{}, {}, {}] -> objects inside array //used a lot with "for each"

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }, 
    {
        languageName: "java",
        languageFileName: "java"
    }, 
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})