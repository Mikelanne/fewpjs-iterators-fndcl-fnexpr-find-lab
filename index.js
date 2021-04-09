function superbowlWin(array) {
    // each object has a year and a result
    // use find() to test each object to see if the result is a W
    // return the year the win occured
    // if none are found, return undefined
    let winner =  array.find(function(data) {
        if (data.result === "W") {
            return true
        }
    })
    if (winner) {
        return winner.year
    } else {
        return undefined
    }
}

