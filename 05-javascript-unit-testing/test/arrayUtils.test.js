const { expect } = require ('chai');
const { getMax, getMin, sumArray } = require ('../src/arrayUtils');

describe('getMax Tests', () => {

    it('Should return the highest number from given array', () => {
        const numbers = [1, 2, 5, 9, 15, 25, 352, 178];
        let result = getMax(numbers);
        
        expect(result).to.equal(352);
    });

    it('Should return the highest number from given array with negative numbers', () => {
        const numbers = [-1, -2, -5, -9, -15, -25, -352, -178];
        let result = getMax(numbers);
        
        expect(result).to.equal(-1);
    });

    it('Should return the highest number from given array with same numbers', () => {
        const numbers = [352, 352, 352, 352, 352];
        let result = getMax(numbers);
        
        expect(result).to.equal(352);
    });

    it('Should return the same number for single-element array', () => {
        const numbers = [64];
        let result = getMax(numbers);
        
        expect(result).to.equal(64);
    });

    it('Should return the highest number from given array including zero', () => {
        const numbers = [5, 0, 352, 0, 178];
        let result = getMax(numbers);
        
        expect(result).to.equal(352);
    });

    it('Should return undefined when given an empty array', () => {
        const numbers = [];
        let result = getMax(numbers);
        
        expect(result).to.be.undefined;
    });

    it('Should return max value when given NaN, string, number as a string', () => {
        const numbers = [3, 18, "352", 151, "string", NaN];
        let result = getMax(numbers);
        
        expect(result).to.equal(352);
    });

    it('Should return max value 0 when given empty string and negative numbers', () => {
        const numbers = [-3, -18, "", -1];
        let result = getMax(numbers);
        
        expect(result).to.equal(0);
    });

    it('Should ignore null and undefined values', () => {
        const numbers = [5, null, undefined, 15];
        let result = getMax(numbers);

        expect(result).to.equal(15);
    });

    it('Should return undefined when all values are invalid', () => {
        const numbers = [null, undefined, NaN, "abc"];
        let result = getMax(numbers);

        expect(result).to.be.undefined;
    });

    it('Should return 1 when true, false and 1 values are given', () => {
        const numbers = [true, false, 1];
        let result = getMax(numbers);

        expect(result).to.equal(1);
    });

});

describe('getMin Tests', () => {

    it('Should return lowest number from given array', () => {

        const numbers = [1, 5, 3, 78, 153, 397, 15];
        let result = getMin(numbers);

        expect(result).to.equal(1);
    });

    it('Should return lowest number from given array with negative numbers', () => {

        const numbers = [1, 5, -3, -78, 153, 397, -15];
        let result = getMin(numbers);

        expect(result).to.equal(-78);
    });

    it('Should return lowest number from given array with same numbers', () => {

        const numbers = [174, 21, -78, -78, 174, 15, 33];
        let result = getMin(numbers);

        expect(result).to.equal(-78);
    });

    it('Should return the same number for single-negative-element array', () => {
        const numbers = [-128];
        let result = getMin(numbers);
        
        expect(result).to.equal(-128);
    });

    it('Should return lowest number from given array including zero', () => {

        const numbers = [78, -78, -78, -178, 0, 0, 0];
        let result = getMin(numbers);

        expect(result).to.equal(-178);
    });

    it('Should return undefined when given empty array', () => {

        const numbers = [];
        let result = getMin(numbers);

        expect(result).to.be.undefined;
    });

    it('Should return min value when given NaN, string, number as a string', () => {
        const numbers = [3, 18, "352", 151, "string", NaN];
        let result = getMin(numbers);
        
        expect(result).to.equal(3);
    });

    it('Should return min value 0 when given empty string', () => {
        const numbers = [3, 18, "", 55];
        let result = getMin(numbers);
        
        expect(result).to.equal(0);
    });

    it('Should ignore null and undefined values', () => {
    const numbers = [5, null, undefined, 15];
    let result = getMin(numbers);

    expect(result).to.equal(5);
    });

    it('Should return undefined when all values are invalid', () => {
    const numbers = [null, undefined, NaN, "abc"];
    let result = getMax(numbers);

    expect(result).to.be.undefined;
    });

    it('Should return 1 when true, false and 1 values are given', () => {
        const numbers = [true, false, 1];
        let result = getMax(numbers);

        expect(result).to.equal(1);
    });

});

describe('sumArray Tests', () => {

    it('Should return correct sum of array', () => {

        const numbers = [1, 9, 20, 70];
        let result = sumArray([1, 9, 20, 70]);
        expect(result).to.equal(100);
    });

    it('Should return correct sum of array', () => {

        const numbers = [1, 9, -20, 70, 0];
        let result = sumArray(numbers);
        expect(result).to.equal(60);
    });

    it('Should return correct sum of array ', () => {

        const numbers = [-1, -9, -20, -70];
        let result = sumArray(numbers);
        expect(result).to.equal(-100);
    });

    it('Should return correct sum of array ', () => {

        const numbers = [64, 64];
        let result = sumArray(numbers);
        expect(result).to.equal(128);
    });

    it('Should return correct sum of array with negative numbers', () => {

        const numbers = [-1, -9, -20, -70];
        let result = sumArray(numbers);
        expect(result).to.equal(-100);
    });

    it('Should return correct sum of array with string, NaN and undefined', () => {

        const numbers = [-1, "abc", NaN, undefined, 30, 0];
        let result = sumArray(numbers);
        expect(result).to.equal(29);
    });

    it('Should return 0 with empty array', () => {

        const numbers = [];
        let result = sumArray(numbers);
        expect(result).to.equal(0);
    });

    it('Should return 0 with empty string', () => {

        const numbers = [""];
        let result = sumArray(numbers);
        expect(result).to.equal(0);
    });

    it('Should return 0 with several whitespaces string', () => {

        const numbers = ["    "];
        let result = sumArray(numbers);
        expect(result).to.equal(0);
    });

    it('Should return 0 when all values are wrong in the array', () => {

        const numbers = [undefined, NaN, null, "abc"];
        let result = sumArray(numbers);
        expect(result).to.equal(0);
    });

    it('Should return 1 when true, false and 1 values are given', () => {
    const numbers = [true, false, 1];

    let result = sumArray(numbers);

    expect(result).to.equal(1);
    });
});