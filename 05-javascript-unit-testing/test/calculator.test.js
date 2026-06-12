const { expect } = require('chai');
const { add } = require('/Users/skyli/Desktop/qa-engineering-portfolio/05-javascript-unit-testing/src/calculator.js');
const { subtract } = require('/Users/skyli/Desktop/qa-engineering-portfolio/05-javascript-unit-testing/src/calculator.js');
const { multiply } = require('/Users/skyli/Desktop/qa-engineering-portfolio/05-javascript-unit-testing/src/calculator.js');
const { divide } = require('/Users/skyli/Desktop/qa-engineering-portfolio/05-javascript-unit-testing/src/calculator.js');

describe ('Calculator Operations - add, subtract, multiply, divide', () => {

    it('should return 5 when adding 2 + 3', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should return 1 when subtracting 3 - 2', () => {
        const result = subtract(3, 2);
        expect(result).to.equal(1);
    });

    it('should return 25 when multiplying 5 * 5', () => {
        const result = multiply(5, 5);
        expect(result).to.equal(25);
    });

    it('should return 9 when dividing 81 - 9', () => {
        const result = divide(81, 9);
        expect(result).to.equal(9);
    });

    it('should throw ERROR - Cannot divide by zero, when division by 0 is given', () => {        
        expect(() => divide(5, 0)).throw("Cannot divide by zero");         
    });
});