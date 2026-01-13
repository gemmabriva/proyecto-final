`use strict`



const header = document.querySelector(`.Header`)
const headerHam = header.querySelector(`.Header-ham`)
const headerBox = header.querySelector(`.Header-nav`)

console.log (headerHam)
console.log (headerBox)

headerHam.addEventListener(`click` , ()=>{
    headerBox.classList.toggle(`isActive`)
})

const main = document.querySelector(`.Main`)
const carrousel = main.querySelector(`.Main-carrousel`)
const carrouselPrev = carrousel.querySelector(`.Main-arrow--prev`)
const carrouselNext = carrousel.querySelector(`.Main-arrow--next`)
const carrouselLi = carrousel.querySelectorAll(`.Main-li`)
const carrouselUl = carrousel.querySelector(`.Main-ul`)

let contador = 0

const moverWrapper = ()=>{
    carrouselUl.style.translate = `-${ (100 / carrouselLi.length) * contador}%`
}
const nextPhoto = ()=>{
    contador++

    if( contador === carrouselLi.length){
        contador = 0
    }
    console.log (contador)

    moverWrapper()
}
const prevPhoto = ()=>{
    contador--

    if( contador < 0){
        contador= carrouselLi.length - 1
    }
    console.log (contador)

    moverWrapper()
}
const ventanaKeyUp = ( e )=>{
        let { key } = e

        key === `ArrowRight` && nextPhoto()
        key === `ArrowLeft` && prevPhoto()
}

console.log (carrouselLi)
console.log (carrouselUl)
console.log (carrouselPrev)
console.log (carrouselNext)


carrouselUl.style.width = `${ 100 * carrouselLi.length}%`
carrouselUl.style.gridTemplateColumns = `repeat( ${carrouselLi.length} , 1fr )`

carrouselPrev.addEventListener(`click` , prevPhoto)
carrouselNext.addEventListener(`click` , nextPhoto)
window.addEventListener(`keyup` , ventanaKeyUp)

const lightbox = document.querySelectorAll(`.Main-lightbox`)
const button = document.querySelectorAll(`.Main-bttn`)
const closeBtn = document.querySelectorAll(`.Lightbox-button`)


const windowKeyUp = (e) => {
    if (e.key === 'Escape') {
        const activeLightboxes = document.querySelectorAll('.Main-lightbox.isActive')
        activeLightboxes.forEach(lb => {
            const btn = lb.querySelector('.Lightbox-button')
            if (btn) {
                btn.click()
            } else {
                lb.classList.remove('isActive') 
            }
        })
    }
}

console.log (lightbox)
console.log (button)
console.log(closeBtn)

button.forEach(( _ , index)=>{
    button[index].addEventListener(`click` , ()=>{
        lightbox[index].classList.add(`isActive`)
    })
})
closeBtn.forEach(( _ , index)=>{
    closeBtn[index].addEventListener(`click`, ()=>{
        lightbox[index].classList.remove(`isActive`)
    })
})

window.addEventListener(`keyup` , windowKeyUp)

const acordeon = document.querySelectorAll(`.Acordeon`)
const acordeonBtn = document.querySelectorAll(`.Acordeon-h4`)
const acordeonBox = document.querySelectorAll(`.Acordeon-box`)
const acordeonContent = document.querySelectorAll(`.Acordeon-content`)

console.log(acordeonBox)
console.log(acordeonBtn)
console.log(acordeonContent)

acordeonBtn.forEach(( _ , index)=>{
    acordeonBtn[index].addEventListener(`click` , ()=>{
        acordeonBox.forEach(( _ , index)=>{
            acordeonBox[index].classList.remove(`isActive`)
        })
        acordeonBox[index].classList.add(`isActive`)

        acordeonContent.forEach(( _ , index)=>{
            acordeonContent[index].classList.remove(`isActive`)
        })
        acordeonContent[index].classList.add(`isActive`)
    })
})

const tabsBtn  = document.querySelectorAll(`.Lightbox-li`)
const tabsText = document.querySelectorAll(`.Lightbox-text`)

console.log(tabsBtn)
console.log(tabsText)

tabsBtn.forEach(( _ , index)=>{
    tabsBtn[index].addEventListener(`click` , ()=>{
        tabsBtn.forEach(( _ , index)=>{
            tabsBtn[index].classList.remove(`isActive`)
        })
        tabsBtn[index].classList.add(`isActive`)

        tabsText.forEach(( _ , index)=>{
            tabsText[index].classList.remove(`isVisible`)
        })
        tabsText[index].classList.add(`isVisible`)
    })
})

const lightboxParrafo = document.querySelectorAll(`.Lightbox-p`)

console.log(lightboxParrafo)

lightboxParrafo.forEach(( _ , index)=>{
    lightboxParrafo[index].addEventListener(`click` , ()=>{
        lightboxParrafo[index].classList.toggle(`isActive`)
    })
})






document.querySelectorAll('.Lightbox-button').length

console.log(button)
