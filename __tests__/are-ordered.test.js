const areOrdered = require('../katas/are-ordered.js')
describe('areOrdered', () => {
    test('takes an array and returns a boolean', () => {
        const input = [5, 6]
        const actual = areOrdered(input)
        const expected = true
        expect(actual).toBe(expected)
    })
    test('Returns false if the array is an empty array', () => {
        const input = []
        const actual = areOrdered(input)
        const expected = false
        expect(actual).toBe(expected)
    })
    test('Returns false if the argument is not an array', () => {
        const input = 'howdy'
        const actual = areOrdered(input)
        const expected = false
        expect(actual).toBe(expected)
    })
    test('Check if the items are in ascending order', () => {
        const input = [1, 2, 3]
        const actual = areOrdered(input)
        const expected = true
        expect(actual).toBe(expected)
        const input2 = [2, 1, 3]
        const actual2 = areOrdered(input2)
        const expected2 = false
        expect(actual2).toBe(expected2)
        const input3 = [1, 2, 3, 6, 11, 15934, 253902532]
        const actual3 = areOrdered(input3)
        const expected3 = true
        expect(actual3).toBe(expected3)
        const input4 = [1, 2, 3, 6, 11, 15934, 253902532, -100]
        const actual4 = areOrdered(input4)
        const expected4 = false
        expect(actual4).toBe(expected4)
    })
    
})
