var redBtn = document.getElementById('red')
var blueBtn = document.getElementById('blue')


redBtn.addEventListener('click', () => {
    document.body.className = "red"
})

blueBtn.addEventListener('click', () => {
    document.body.className = "blue"
})