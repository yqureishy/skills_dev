let myNums = [3, 0, 5, 34, 54, 6, 5, 55, 67, 43, 55, 22, -5, 43]



function ascending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j] // temp = 3
                array[j] = array[j + 1]// 3=0
                array[j + 1] = temp // 0=3
            }
        }
    }
    console.log(array)
}

function descending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    console.log(array)
}

ascending(myNums)
descending(myNums)

