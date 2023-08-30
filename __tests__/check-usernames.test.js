const checkUsernames = require('../katas/check-usernames')
describe('checkUsernames', () => {
    test('Check that output is a boolean', () => {
        const input = ['aaaaa']
        const actual = checkUsernames(input)
        const expected = true
        expect(actual).toBe(expected)
    })
    test('Check that input is at least 5 characters', () => {
        const input = ['aaaa']
        const actual = checkUsernames(input)
        const expected = false
        expect(actual).toBe(expected)
    })
    test('Check that input is rejected for invalid characters', () => {
        const input = ['aaaaaA']
        const actual = checkUsernames(input)
        const expected = false
        expect(actual).toBe(expected)
        const input2 = ['aaaaa2_']
        const actual2 = checkUsernames(input2)
        const expected2 = true
        expect(actual2).toBe(expected2)
    })
    test('Check that input is rejected when greater than 20 characters', () => {
        const input = ['aaaaaaaaaaaaaaaaaaaaaaaa']
        const actual = checkUsernames(input)
        const expected = false
        expect(actual).toBe(expected)
    })
    test('Check that function works for array with multiple items', () => {
        const input = ['aaaaa', 'aaaaAaa', 'aaaaaa', 'aaaaaa']
        const actual = checkUsernames(input)
        const expected = false
        expect(actual).toBe(expected)
        const input1 = ['aaaaa', 'aaaaaaa', 'aaaaaa', 'aaaaaa']
        const actual1 = checkUsernames(input1)
        const expected1 = true
        expect(actual1).toBe(expected1)
        const input2 = ['aaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaa', 'aaaaaa']
        const actual2 = checkUsernames(input)
        const expected2 = false
        expect(actual2).toBe(expected2)
})
})