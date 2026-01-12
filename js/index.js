'use strict'

const mouse = document.querySelector(`.Mouse`)

console.log(mouse)

window.addEventListener(`mousemove`, ( e ) => {
    console.log(e.clientX)
    console.log(e.clientY)

    let { clientX } = e
    let { clientY } = e

    mouse.style.translate = `${clientX}px ${clientY}px`
})

