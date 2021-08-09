var buttonCreate = document.getElementById("create")
var firstNameTextBox = document.getElementById("firstName")
var lastNameTextBox = document.getElementById("lastName")
var header = document.getElementById("header")


buttonCreate.addEventListener('click', () => {
    header.innerHTML = firstNameTextBox.value + " " + lastNameTextBox.value
})

