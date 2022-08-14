const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    "https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__480.jpg",
    "https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826__480.jpg",
    "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__480.jpg",
    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg"
]
const chosenImg = Math.floor(Math.random() * images.length);

const img = document.createElement("img")

img.src = images[chosenImg]
document.body.style.backgroundImage=`url(${images[chosenImg]})`
//document.body.appendChild(img)