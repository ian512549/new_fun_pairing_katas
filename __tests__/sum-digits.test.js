const sumDigits = require('../katas/sum-digits');

// Tests for sumDigits

/*
  TEST 1 - sumDigits returns the input number when passed a single digit number
  This test has two ASSERTIONS being made
  The same behaviour is being tested but with different inputs - 1 and 9

  E.g. sumDigits(1) should output 1
  E.g. sumDigits(9) should output 9
    
*/
describe("sumDigits()",() => {
  test("returns the input number when passed a single digit number", () => {
    const actual = sumDigits(1)
    const expected = 1
    expect(actual).toBe(expected)
    expect(sumDigits(9)).toBe(9)
  })
  test("returns the input number when passed a single digit number", () => {
    const actual = sumDigits(9)
    const expected = 9
    expect(actual).toBe(expected)
  })
  })

/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for 
  multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  npm 
  A multi-digit input means you now have to implement to 'addition' part of this 
  function, but you don't have to think about the logic for dealing with/ignoring 
  non-digit characters yet (that's for our next test!)
*/
describe("sumDigits()", () => {
  test("Adds multiple digits and returns the sum", () => {
    const actual = sumDigits(99)
    const expected = 18
    expect(actual).toBe(expected)
    const actual2 = sumDigits(123)
    const expected2 = 6
    expect(actual2).toBe(expected2)
  })
})

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
*/

describe("sumDigits()", () => {
  test("Adds multiple digits and returns the sum", () => {
    const actual = sumDigits(10.5)
    const expected = 6
    expect(actual).toBe(expected)
  })
  test("Adds multiple digits and returns the sum", () => {
    const actual = sumDigits("alphabet")
    const expected = 'no digits'
    expect(actual).toBe(expected)
  })
})

