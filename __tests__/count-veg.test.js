const countVeg = require('../katas/count-veg');

/*
*/
describe('countVeg()',() => {
    test('countVeg returns the type number when given an object with a number as a value', () => {
        const actual = [{name: 'cabbage', type: 'brassica', quantity: 5}]
        const typeVeg = 'brassica'
        const result = countVeg(actual, typeVeg)
        const expected = 5
        expect(result).toBe(expected)
    })
    test('countVeg matches the correct array item from the object type value', () => {
        const actual = [{name: 'parsnip', type: 'roots', quantity: 5}, {name: 'cabbage', type: 'brassica', quantity: 4}]
        const typeVeg = 'brassica'
        const result = countVeg(actual, typeVeg)
        const expected = 4
        expect(result).toBe(expected)
    })
    test('countVeg matches the sum of the correct array items from the object type value', () => {
        const actual = [{name: 'parsnip', type: 'roots', quantity: 5}, {name: 'cabbage', type: 'brassica', quantity: 4}, {name: 'broccoli', type: 'brassica', quantity: 2} ]
        const typeVeg = 'brassica'
        const result = countVeg(actual, typeVeg)
        const expected = 6
        expect(result).toBe(expected)
    }) 
    test('countVeg deals correctly with quantity = 0', () => {
        const actual = [{name: 'parsnip', type: 'roots', quantity: 0}, {name: 'cabbage', type: 'brassica', quantity: 4}, {name: 'broccoli', type: 'brassica', quantity: 2} ]
        const typeVeg = 'roots'
        const result = countVeg(actual, typeVeg)
        const expected = 0
        expect(result).toBe(expected)
    }) 
    
    test('countVeg deals correctly with nonexistent types', () => {
        const actual = [{name: 'parsnip', type: 'roots', quantity: 5}, {name: 'cabbage', type: 'brassica', quantity: 4}, {name: 'broccoli', type: 'brassica', quantity: 2} ]
        const typeVeg = 'ham sandwich'
        const result = countVeg(actual, typeVeg)
        const expected = 'Entered a nonexistent type.'
        expect(result).toBe(expected)
    }) 

})