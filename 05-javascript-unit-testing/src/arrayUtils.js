function getMax(numbers){

    if(!Array.isArray(numbers) || numbers.length === 0){
        return undefined;
    }

    let max = undefined;

    for(let i = 0; i < numbers.length; i++){   

        let value = numbers[i];
        
        if (value == null) continue;

        if (typeof value === "boolean") {
            continue;
        }

        if(typeof value === "string"){
            value = Number(value)
        }

        if(Number.isNaN(value)){
            continue;
        }

        if (max === undefined || value > max) {
            max = value;
        }
    };

    return max;
};

function getMin(numbers){

    if(!Array.isArray(numbers) || numbers.length === 0){
        return undefined;
    }

    let min = undefined;

    for(let i = 0; i < numbers.length; i++){

        let value = numbers[i];
        
        if (value == null) continue;

        if (typeof value === "boolean") {
            continue;
        }
        
        if(typeof value === "string"){
            value = Number(value)
        }

        if(Number.isNaN(value))
            continue;

        if(min === undefined || value < min){
            min = value;
        }
    };

    return min;
};

function sumArray(numbers){

    if (!Array.isArray(numbers)) {
        return undefined;
    }

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){

        let value = numbers[i];

        if(value == null) continue;

        if (typeof value === "boolean") {
             continue;
        }

        if(typeof value === "string"){
            value = Number(value);
        }

        if(Number.isNaN(value)){
            continue;
        }
        
        sum += value;
    }

    return sum;
};

module.exports = { getMax, getMin, sumArray }

console.log(sumArray([true, false, 1]));
//console.log(getMax([11, "11111", "asd", "", 356, 0, -1, NaN,]));
//console.log(getMin(["asd", NaN, undefined, null]));
