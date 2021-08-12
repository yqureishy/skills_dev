var uoList = document.getElementById('uoList')
var btnEnter = document.getElementById("submit")
var textboxImageURL = document.getElementById("textboxImageURL")

btnEnter.addEventListener('click', () => {


    // URL stored in imageURL //
    let imageURL = textboxImageURL.value
    // created <img>
    let posterImage = document.createElement('img')
    // added URL to source attribute //
    posterImage.setAttribute("src", imageURL)
    posterImage.className = "newImage"
    // appended image to UOLIST //
    uoList.appendChild(posterImage)
})