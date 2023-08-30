function areOrdered(array1) {
    if (Array.isArray(array1) === false || array1.length === 0){
        return false
    }
for (let i in array1){
    if (i === 0){

    } else {
    if(array1[i] < array1[i-1]){
        return false
    }
    }
}
    
    return true
}

module.exports = areOrdered;
