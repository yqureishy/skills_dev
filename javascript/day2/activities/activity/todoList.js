var buttonSubmit = document.getElementById('buttonSubmit')
var inputTaskBar = document.getElementById('inputTaskBar')
var uoListPending = document.getElementById('uoListPending')
var headerPending = document.getElementById('headerPending')
var headerCompleted = document.getElementById('headerCompleted')
var uoListCompleted = document.getElementById('uoListCompleted')


buttonSubmit.addEventListener('click', () => {
    let task = inputTaskBar.value
    let createdLiElement = document.createElement('li')
    let buttonRemove = document.createElement("button")
    let checkbox = document.createElement("input")
    let paragraphTag = document.createElement("p")

    headerPending.innerHTML = "Pending Tasks"

    checkbox.setAttribute("type", "checkbox")
    // createdLiElement.innerHTML = task
    paragraphTag.innerHTML = task
    buttonRemove.innerHTML = "Remove"


    buttonRemove.addEventListener('click', function () {
        this.parentElement.remove(createdLiElement)
    })


    createdLiElement.appendChild(checkbox)
    createdLiElement.appendChild(paragraphTag)
    createdLiElement.appendChild(buttonRemove)



    uoListPending.appendChild(createdLiElement)


    inputTaskBar.value = ""

    checkbox.addEventListener('change', function () {


        if (checkbox.value == "on") {
            this.parentElement.remove(createdLiElement)
            headerCompleted.innerHTML = "Completed Tasks"
            paragraphTag.innerHTML = task
            createdLiElement.appendChild(checkbox)
            createdLiElement.appendChild(paragraphTag)
            createdLiElement.appendChild(buttonRemove)
            uoListCompleted.appendChild(createdLiElement)
            checkbox.value = "off"
        }
        else if (checkbox.value == 'off') {

            this.parentElement.remove(createdLiElement)
            createdLiElement.appendChild(checkbox)
            createdLiElement.appendChild(paragraphTag)
            createdLiElement.appendChild(buttonRemove)
            uoListPending.appendChild(createdLiElement)
            checkbox.value = "on"
        }


    })

})

