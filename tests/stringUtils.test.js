const {
    capitalize,
    reverseString,
    countVowels,
    isPalindrome,
    truncateString,
    countCharacters
} = require('../src/stringUtils');

describe('String Utils', () => {
    // ... existing code ...

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

    // ... existing code ...

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

    // ... rest of the existing code ...
});
