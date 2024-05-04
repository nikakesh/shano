const cont = document.querySelector('.cont')
const mainImg = document.querySelector('#mainImg')
const imgCont = document.querySelector('#img-cont')
let img;

for(let i = 0; i < 18; i++){
    cont.innerHTML += `
        <div><img id="${i + 1}" src="./shano${i + 1}.jpg"></img></div>
    `
}

img = document.querySelectorAll('img')

for(let i = 0; i < 18; i++){
    img[i].addEventListener('click', (e) => {
        mainImg.src = `./shano${e.target.id}.jpg`
        imgCont.style.display = 'block'
    })
}

mainImg.addEventListener('click', (e) => {
    imgCont.style.display = 'none'
})
imgCont.addEventListener('click', (e) => {
    imgCont.style.display = 'none'
})