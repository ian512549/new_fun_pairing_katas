function sumDigits(num) {
    const string = num.toString()
    //Convert the number into a string.
    //Turn the string into an array of digits
    const regex = /\d/
    if (regex.test(string) === false) {
        return 'no digits'
    }
    const array = string.split('')
    const digitsArray = array.filter((element) => element.match(/\d/))
    newArray = digitsArray.map((element) => Number(element))
    const answer = newArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    return answer
}
module.exports = sumDigits;
