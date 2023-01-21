// we declare the function with the exact name "fromEuroToDollar"


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(num){
    return num * 106.6
}

function fromEuroToDollar(num){
    return num * 1.2
}

function fromYanToPound(num){
    return num * 159.9
}

module.exports = { fromEuroToDollar, sum, fromDollarToYen, fromYanToPound }