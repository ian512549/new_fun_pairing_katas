function countVeg(array1, string1) {
    
    
    const filteredVeg = array1.filter((element) => element["type"] === string1)
    console.log(filteredVeg)
    if (filteredVeg.length === 0) {
        return 'Entered a nonexistent type.'
    }
    const reducedVeg = filteredVeg.reduce((accumulator, currentValue) => accumulator + currentValue["quantity"], 0)
    
    
    return reducedVeg
}

module.exports = countVeg;