const {
    capitalize,
    reverseString,
    countVowels,
    isPalindrome,
    truncateString,
    countCharacters
} = require('../src/stringUtils');

describe('String Utils', () => {
    describe('capitalize', () => {
        test('capitalizes first letter', () => {
            expect(capitalize('hello')).toBe('Hello');
        });
        test('handles empty string', () => {
            expect(capitalize('')).toBe('');
        });
        test('handles already capitalized', () => {
            expect(capitalize('Hello')).toBe('Hello');
        });
    });

    describe('reverseString', () => {
        test('reverses string', () => {
            expect(reverseString('hello')).toBe('olleh');
        });
        test('handles empty string', () => {
            expect(reverseString('')).toBe('');
        });
        test('handles single character', () => {
            expect(reverseString('a')).toBe('a');
        });
    });

    describe('countVowels', () => {
        test('counts vowels correctly', () => {
            expect(countVowels('hello')).toBe(2);
            expect(countVowels('aeiou')).toBe(5);
        });
        test('handles no vowels', () => {
            expect(countVowels('rhythm')).toBe(0);
        });
        test('handles uppercase vowels', () => {
            expect(countVowels('HELLO')).toBe(2);
        });
        test('handles null/undefined input', () => {
            expect(countVowels(null)).toBe(0);
            expect(countVowels(undefined)).toBe(0);
        });
    });

    describe('isPalindrome', () => {
        test('identifies palindromes', () => {
            expect(isPalindrome('radar')).toBe(true);
            expect(isPalindrome('level')).toBe(true);
        });
        test('identifies non-palindromes', () => {
            expect(isPalindrome('hello')).toBe(false);
        });
        test('handles case insensitivity', () => {
            expect(isPalindrome('Radar')).toBe(true);
        });
        test('handles null/undefined input', () => {
            expect(isPalindrome(null)).toBe(true);
            expect(isPalindrome(undefined)).toBe(true);
        });
    });

    describe('truncateString', () => {
        test('truncates long strings', () => {
            expect(truncateString('hello world', 5)).toBe('hello...');
        });
        test('keeps short strings unchanged', () => {
            expect(truncateString('hi', 5)).toBe('hi');
        });
        test('handles empty string', () => {
            expect(truncateString('', 5)).toBe('');
        });
    });

    describe('countCharacters', () => {
        test('counts characters correctly', () => {
            expect(countCharacters('hello')).toEqual({
                h: 1,
                e: 1,
                l: 2,
                o: 1
            });
        });
        test('handles empty string', () => {
            expect(countCharacters('')).toEqual({});
        });
        test('handles case sensitivity', () => {
            expect(countCharacters('Hello')).toEqual({
                H: 1,
                e: 1,
                l: 2,
                o: 1
            });
        });
        test('handles special characters', () => {
            expect(countCharacters('hello!')).toEqual({
                h: 1,
                e: 1,
                l: 2,
                o: 1,
                '!': 1
            });
        });
    });
});
