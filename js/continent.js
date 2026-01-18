`use strict`


// Menú hamburguesa
const header = document.querySelector(`.Header`)
const headerHam = header.querySelector(`.Header-ham`)
const headerBox = header.querySelector(`.Header-nav`)

console.log (headerHam)
console.log (headerBox)

headerHam.addEventListener(`click` , ()=>{
    headerBox.classList.toggle(`isActive`)
})


// Animación para el carrousel del MAIN
const main = document.querySelector(`.Main`)
const carrousel = main.querySelector(`.Main-carrousel`)
const carrouselPrev = carrousel.querySelector(`.Main-arrow--prev`)
const carrouselNext = carrousel.querySelector(`.Main-arrow--next`)
const carrouselLi = carrousel.querySelectorAll(`.Main-li`)
const carrouselUl = carrousel.querySelector(`.Main-ul`)

let contador = 0

// if (window.location.href.includes(`#eeuu`)){
//     contador = 0
// }
// if(window.location.href.includes(`#canada`)){
//     contador = 1
// }
// if(window.location.href.includes(`#nymx`)){
//     contador = 2
// }
// if (window.location.href.includes(`#peru`)){
//     contador = 0
// }
// if(window.location.href.includes(`#patagonia`)){
//     contador = 1
// }
// if(window.location.href.includes(`#brasil`)){
//     contador = 2
// }
// if (window.location.href.includes(`#noruega`)){
//     contador = 0
// }
// if(window.location.href.includes(`#grecia`)){
//     contador = 1
// }
// if(window.location.href.includes(`#austria`)){
//     contador = 2
// }
// if (window.location.href.includes(`#marruecos`)){
//     contador = 0
// }
// if(window.location.href.includes(`#kenia`)){
//     contador = 1
// }
// if(window.location.href.includes(`#zanzibar`)){
//     contador = 2
// }
// if (window.location.href.includes(`#japon`)){
//     contador = 0
// }
// if(window.location.href.includes(`#tailandia`)){
//     contador = 1
// }
// if(window.location.href.includes(`#bali`)){
//     contador = 2
// }
// if (window.location.href.includes(`#australia`)){
//     contador = 0
// }
// if(window.location.href.includes(`#nuevazelanda`)){
//     contador = 1
// }

// EL COMENTARIO ANTERIOR ESTA OPTIMIZADO CON CHAT GPT, TAL COMO HABLAMOS EN LA ÚLTIMA SESION DE TUTORÍAS.


const hashIndexMap = {
  // América del Norte
  eeuu: 0,
  canada: 1,
  nymx: 2,

  // América del Sur
  peru: 0,
  patagonia: 1,
  brasil: 2,

  // Europa
  noruega: 0,
  grecia: 1,
  austria: 2,

  // África
  marruecos: 0,
  kenia: 1,
  zanzibar: 2,

  // Asia
  japon: 0,
  tailandia: 1,
  bali: 2,

  // Oceanía
  australia: 0,
  nuevazelanda: 1
}

const hash = window.location.hash.replace('#', '')

if (hashIndexMap.hasOwnProperty(hash)) {
  contador = hashIndexMap[hash]
}


console.log (contador)

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

moverWrapper()

carrouselUl.style.width = `${ 100 * carrouselLi.length}%`
carrouselUl.style.gridTemplateColumns = `repeat( ${carrouselLi.length} , 1fr )`

carrouselPrev.addEventListener(`click` , prevPhoto)
carrouselNext.addEventListener(`click` , nextPhoto)
window.addEventListener(`keyup` , ventanaKeyUp)


// Movimiento para cerrar el lightbox con un click en escape
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

// Acordeón dentro del lightbox
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

// ESTE ES EL CODIGO QUE HICE YO PERO AL QUERER AÑADIR LOS BOTONES DE LAS FLECHAS SE ME DESCONFIGURABA TODO Y AL FINAL LO HE HECHO CON AYUDA DE CHAT GPT.
// const tabsBtn  = document.querySelectorAll(`.Lightbox-li`)
// const tabsText = document.querySelectorAll(`.Lightbox-text`)

// console.log(tabsBtn)
// console.log(tabsText)

// tabsBtn.forEach(( _ , index)=>{
//     tabsBtn[index].addEventListener(`click` , ()=>{
//         tabsBtn.forEach(( _ , index)=>{
//             tabsBtn[index].classList.remove(`isActive`)
//         })
//         tabsBtn[index].classList.add(`isActive`)

//         tabsText.forEach(( _ , index)=>{
//             tabsText[index].classList.remove(`isVisible`)
//         })
//         tabsText[index].classList.add(`isVisible`)
//     })
// })


// obtiene el lightbox activo
const getActiveLightbox = () => {
  return document.querySelector('.Main-lightbox.isActive')
}

// activa un día concreto
const activarDia = (lightbox, index) => {
  const tabsBtn  = lightbox.querySelectorAll('.Lightbox-li')
  const tabsText = lightbox.querySelectorAll('.Lightbox-text')
  const total = tabsText.length

  // navegación circular
  index = (index + total) % total

  tabsBtn.forEach(btn => btn.classList.remove('isActive'))
  tabsText.forEach(text => text.classList.remove('isVisible'))

  tabsBtn[index].classList.add('isActive')
  tabsText[index].classList.add('isVisible')

  lightbox.dataset.dayIndex = index

    // Mover el menú para que el día activo se vea
  const activeBtn = lightbox.querySelector('.Lightbox-li.isActive')
  if (activeBtn) {
    activeBtn.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    })
  }

}

/* ===== CLICK EN LOS DÍAS ===== */
document.addEventListener('click', (e) => {
  const lightbox = getActiveLightbox()
  if (!lightbox) return

  const btn = e.target.closest('.Lightbox-li')
  if (!btn || !lightbox.contains(btn)) return

  const tabsBtn = Array.from(lightbox.querySelectorAll('.Lightbox-li'))
  const index = tabsBtn.indexOf(btn)

  activarDia(lightbox, index)
})

/* ===== FLECHAS TECLADO (tabsKeyUp) ===== */
const tabsKeyUp = (e) => {
  const lightbox = getActiveLightbox()
  if (!lightbox) return

  const current = Number(lightbox.dataset.dayIndex ?? 0)

  if (e.key === 'ArrowRight') activarDia(lightbox, current + 1)
  if (e.key === 'ArrowLeft')  activarDia(lightbox, current - 1)
}

window.addEventListener('keyup', tabsKeyUp)


// Acordeón párrafos lightbox
const lightboxParrafo = document.querySelectorAll(`.Lightbox-p`)

console.log(lightboxParrafo)

lightboxParrafo.forEach(( _ , index)=>{
    lightboxParrafo[index].addEventListener(`click` , ()=>{
        lightboxParrafo[index].classList.toggle(`isActive`)
    })
})


