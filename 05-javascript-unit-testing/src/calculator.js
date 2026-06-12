function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b
}
module.exports = { add, subtract, multiply, divide };

//const addresult = add (2, 3)
// //const subtractresult = subtract (3, 2)
// const multiplyresult = multiply (3, 3)
// const divideresult = divide (3, 3)
//console.log(addresult)
//console.log(subtractresult)
//console.log(multiplyresult)
//console.log(divideresult)
