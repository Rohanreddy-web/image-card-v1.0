const images = [
    {
        src: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'tiger',
    },
    {
        src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'lion',
    },
    {
        src: 'https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'deer',
    },
    {
        src: 'https://images.unsplash.com/photo-1648402279767-cf3e3721508e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'monkey',
    }
]

let currentIndex = 0;
let totalImages = images.length
let img = document.getElementsByTagName("img")[0]
let description = document.querySelector(".description")
let lod = document.querySelector(".loader")
let prv = document.querySelector(".prv")
img.src = images[currentIndex].src
description.textContent = images[currentIndex].name
function updateimages() {
    img.style.display = "none";
    lod.style.display = "flex"
    setTimeout(() => {
        img.src = images[currentIndex].src
        description.textContent = images[currentIndex].name
        img.style.display = "flex"
        lod.style.display = "none"
    }, 1000)
}
function previousImageCard() {
    if (currentIndex > 0) {
        currentIndex--
    }
    else {

        currentIndex = totalImages - 1

    }
    updateimages()

}
let next = document.getElementsByClassName("next")[0]
function nextImageCard() {
    if (currentIndex < totalImages - 1) {
        currentIndex++
    }
    else {

        currentIndex = 0
    }
    updateimages()

}
prv.addEventListener("click", previousImageCard)
next.addEventListener("click", nextImageCard)
