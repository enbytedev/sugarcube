const replaceRegex = require('../cubes/replaceRegex');

beforeAll(() => {
    console.warn = jest.fn();
});

describe('Invalid Input', () => {
    test ('Invalid Input Returns null', () => {
        expect(replaceRegex({}, "b")).toBe(null);
        expect(replaceRegex()).toBe(null);
    });
});

describe('Valid Input Returns Correct Output', () => {
    test ('Replace String to be Web Safe', () => {
        expect(replaceRegex('this is/probably:not a"safe string for /a website endpoint//:', '-', '/', '"', ':', ' ')).toBe('this-is-probably-not-a-safe-string-for--a-website-endpoint---');
    });
    test ('Replace all instances of - with !', () => {
        expect(replaceRegex('t-e-s-t', '!', '-')).toBe('t!e!s!t');
    });
});