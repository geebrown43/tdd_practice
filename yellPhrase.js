let yellPhrase = (str) => {
    if (!str){
        return "Please input a phrase"
    } else if (typeof str !== 'string') {
        return "Please input a string"
    }
    
        return str.toUpperCase()
}

module.exports = {
    yellPhrase
}