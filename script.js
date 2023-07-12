const container = document.querySelector('.container')

const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 7

// we gonna have 3 images per row
for(let i=0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

//console.log(getRandomNr())

//console.log(getRandomSize())//refresh page to get random image

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}
