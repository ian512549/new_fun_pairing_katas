function checkUsernames(usernames) {
      const regex = /[^a-z0-9_]/

let valName = true
    for (let i in usernames) {
        if (usernames[i].length < 5 || usernames[i].length > 20) {
            valName = false 
        }
        if (usernames[i].match(regex)){
            valName = false
        }
    
}return valName
}
module.exports = checkUsernames;
