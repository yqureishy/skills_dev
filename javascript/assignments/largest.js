myNums = [0, 3, 5, 34, 54, 6, 5, 55, 67, 43, 55, 22, -5, 43]

function largest(array) {
    let highest = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i]
        }

    }
    return highest
}

function lowest(array) {
    let lowest = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i]
        }

    }
    return lowest
}

console.log(largest(myNums))
console.log(lowest(myNums))