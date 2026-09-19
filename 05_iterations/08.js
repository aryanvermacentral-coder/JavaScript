//array.reduce()

const nums = [1, 2, 3, 4]

const myTotal = nums.reduce(function (acc, currVal) {
    // console.log(`acc: ${acc}, currVal: ${currVal}`);
    return acc + currVal
}, 0)

//output: 
// acc: 0, currVal: 1
// acc: 1, currVal: 2
// acc: 3, currVal: 3
// acc: 6, currVal: 4

// console.log(myTotal); //10

const myTotal2 = nums.reduce((acc, currVal) => acc + currVal, 0)

// console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); //22996