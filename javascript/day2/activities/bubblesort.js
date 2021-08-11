let myNums = [232, 343, 2, 77, 43, 44, 4, 43, 5, 68, 5, 39, 62]

function bubblesort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

let ascendingArray = bubblesort(myNums)
console.log(ascendingArray)

