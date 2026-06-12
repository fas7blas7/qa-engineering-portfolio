function reverseString(str){

    const result = str.split('');
    result.reverse();    
    return result.join('');
}

function isPalindrome(str){

    const reversed = str.split('').reverse().join('');    
    return str === reversed;
}

function countWords(str){
    
    if (str.trim() === '') {
        return 0;
    }

        return str
                .trim()
                .split(' ')
                .filter(word => word !== "")
                .length;
}



module.exports = { reverseString, isPalindrome, countWords }



const result = countWords("I   ate   your   breakfast.");
console.log(result)
//const result = reverseString("Martin");
//console.log(result);
//const palindrome = isPalindrome("level");
//console.log(palindrome)


