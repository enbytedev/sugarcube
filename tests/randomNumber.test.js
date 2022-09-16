const randomNumber = require('../cubes/randomNumber');
var fs = require('fs');

beforeAll(() => {
    console.warn = jest.fn();
});

describe('Inavlid Input', () => {
    test ('Invalid Input Returns null', () => {
        expect(randomNumber("a")).toBe(null);
        expect(randomNumber({})).toBe(null);
        expect(randomNumber()).toBe(null);
        expect(randomNumber(21)).toBe(null);
    });
});

describe('Valid Input Returns Random Number of Correct Length', () => {
    test ('6 Digit Random Number', () => {
        const regex = new RegExp('^[0-9]{6}$');
        expect(randomNumber(6)).toMatch(regex);
    });
    test ('5 Digit Random Number', () => {
        const regex = new RegExp('^[0-9]{5}$');
        expect(randomNumber(5)).toMatch(regex);
    });
    test ('20 Digit Random Number', () => {
        const regex = new RegExp('^[0-9]{20}$');
        expect(randomNumber(20)).toMatch(regex);
    });
});