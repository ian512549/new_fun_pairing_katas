function alternateCase(string) {
    const splitString = string.split('')
    let altString = ''
    let regex = /[a-z]/i
    //let filteredArray = splitString.filter((letter)=>regex.test(letter))
    let letterUpper = true
    
    for(const i in splitString) {
                
        if(regex.test(splitString[i])){
            if(letterUpper === true) {
                letterUpper = false
                splitString[i] = splitString[i].toUpperCase()            
            } else {
                letterUpper = true
                splitString[i] = splitString[i].toLowerCase()
            }

        }

        
    }

   
    console.log(splitString)

    for(const i in splitString) {
        altString +=splitString[i]
    }
    
    console.log(altString)
    return altString
}

module.exports = alternateCase;
