const isPalindrome = require('../isPalindrome.js');

test('Tacocat returns true', () => {
    expect(isPalindrome('Tacocat')).toBe(true);
});

test('Dave returns true', () => {
    expect(isPalindrome('Dave')).toBe(false);
});
