const alternateCase = require("../katas/alternate-case")

describe('alternateCase()', () => {
    test("takes a string and return a string",() => {
        const input = "yes"
        const actual = typeof alternateCase(input)
        const expected = "string"

        expect(actual).toBe(expected)

    })

    test('returns alternate capital or lowercase, starting with a capital letter',() => {
        const input = "josephine"
        const actual = alternateCase(input)
        const expected = "JoSePhInE"

        expect(actual).toBe(expected)

    })

    test('check if input is a mixture of upper & lowercases & it will return the alternateCase',() => {
        const input = "jOsePhiNe"
        const actual = alternateCase(input)
        const expected = "JoSePhInE"

        expect(actual).toBe(expected)

    })

    test('check if input is mixture of letters, numbers & punctuation marks and still return alternate case ',() => {
        const input = "1. josephine"
        const actual = alternateCase(input)
        const expected = "1. JoSePhInE"

        expect(actual).toBe(expected)

    })


})