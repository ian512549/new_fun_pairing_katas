const getCentury = require("../katas/get-century")

describe('getCentury()',() =>{
    test('having integer as input and returning string as output', () =>{
        const input = 1
        const actual = getCentury(input)
        const expected = '1st'

        expect(actual).toBe(expected)
    })

    test('take a year in numbers and return as a century', () =>{
        const input = 1999
        const actual = getCentury(input)
        const expected = '20th'

        expect(actual).toBe(expected)
    })

    test('make sure the ending of century correspond with the value, ie. 21st', () =>{
        const input = 2000
        const actual = getCentury(input)
        const expected = '21st'

        expect(actual).toBe(expected)

        const input2 = 2100
        const actual2 = getCentury(input2)
        const expected2 = '22nd'

        expect(actual2).toBe(expected2)

        const input3 = 2200
        const actual3 = getCentury(input3)
        const expected3 = '23rd'

        expect(actual3).toBe(expected3)
                
    })

    test('stress test input of 0 and 9999 to check for extreme cases', () =>{
        const input = 0
        const actual = getCentury(input)
        const expected = '1st'

        expect(actual).toBe(expected)

        const input2 = 9999
        const actual2 = getCentury(input2)
        const expected2 = '100th'

        expect(actual2).toBe(expected2)
    })

})