const { expect } = require ('chai');
const { reverseString, isPalindrome, countWords } = require ('/Users/skyli/Desktop/qa-engineering-portfolio/05-javascript-unit-testing/src/stringUtils.js')

describe('Reverse String Operations', () => {

    it("Should reverse the string abc to cba", () => {

        var result = "abc"
        var result = reverseString(result)
        expect(result).to.equal("cba");
    });
    
    it("Should reverse the string reverse to esrever", () => {

        var result = "reverse"
        var result = reverseString(result)
        expect(result).to.equal("esrever");           
    });

    it("Should reverse the string a to a", () => {

        var result = "a"
        var result = reverseString(result)
        expect(result).to.equal("a");        
    });

    it("Should return empty string for empty string input", () => {

        var result = ""
        var result = reverseString(result)
        expect(result).to.equal("");        
    });
});

describe('Palindrome String Operations', () => {

    it('Should be true for string "level"', () => {

        var result = isPalindrome("level")
        expect(result).to.be.true
    });

    it('Should be false for string "hello"', () => {
        var result = isPalindrome("hello");
        expect(result).to.be.false;
    })

    it('Should be true for one character', () => {
        var result = isPalindrome("d");
        expect(result).to.be.true;
    })

    it('Should be true for empty string', () => {
        var result = isPalindrome("");
        expect(result).to.be.true;
    })
});

describe('Count number of words operations', () => {

    it('String "I ate your breakfast" should give result 4', () => {

        const result = countWords("I ate your breakfast.");
        expect(result).to.equal(4);
    })

    it('String "Raining" should give result 1', () => {

        const result = countWords("Raining.");
        expect(result).to.equal(1);
    })

    it('Empty string "" should give result 0', () => {

        const result = countWords("");
        expect(result).to.equal(0);
    })

    it('Spaces only string "   " should give result 0', () => {

        const result = countWords("   ");
        expect(result).to.equal(0);
    })

    it('String with multiple spaces should return correct word count', () => {

        const result = countWords("I   Love   Java   Script.");
        expect(result).to.equal(4);
    })
});