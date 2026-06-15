function getMax(numbers){

    if(!Array.isArray(numbers) || numbers.length === 0){
        return undefined;
    }

    let max = undefined;

    for(let i = 0; i < numbers.length; i++){   

        let value = numbers[i];
        
        if (value == null) continue;

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

    let min = undefined;

    for(let i = 0; i < numbers.length; i++){

        let value = numbers[i];
        
        if (value == null) continue;
        
        if(typeof value == "string"){
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

module.exports = { getMax, getMin }

//console.log(getMax([11, "11111", "asd", "", 356, 0, -1, NaN,]));
//console.log(getMin([5, 6, "7", 9, "", "asd", NaN, undefined]));
