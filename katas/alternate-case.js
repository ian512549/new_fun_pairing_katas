function alternateCase(string) {
    const splitString = string.split('')
    let altString = ''
    let regex = /[a-z]/i
    let filteredArray = splitString.filter((letter)=>regex.test(letter))

    
    for(const i in filteredArray) {
        if(i % 2 === 0) {
            filteredArray[i] = filteredArray[i].toUpperCase()            
        } else {
            filteredArray[i] = filteredArray[i].toLowerCase()
        }
        
    }

    console.log(filteredArray)
    console.log(splitString)

    for(const i in splitString) {
        altString +=splitString[i]
    }
    
    console.log(altString)
    return altString
}

module.exports = alternateCase;
