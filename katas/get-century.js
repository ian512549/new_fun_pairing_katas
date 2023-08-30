function getCentury(year) {
    
    //let century = (Math.floor(year/100) + 1).toString()

    let century = (Math.floor(year/100))
    console.log(century,'floor')

    century++
    console.log(century,'+1')

    century = century.toString()
    console.log(century,'toString')


    switch(century[century.length-1]){
    case '1':
        century += 'st'
    break

    case '2':
        century += 'nd'
    break

    case '3':
        century += 'rd'
    break
    default:
        century += 'th'
    }

    return century
}

module.exports = getCentury;
