let friends = ["Younus", "Manal", "Mikael", "Shuja", "Younus", "Manal", "Younus", "Muhammad", "Ayoub", "Ayub", "Ayoub", "Johnny"]



function removeDups(array) {
    let newArray = [];
    let item;
    for (item in array) {
        if (newArray.indexOf(array[item]) === -1) {
            newArray.push(array[item])
        }
    }
    console.log(newArray)
}

removeDups(friends);