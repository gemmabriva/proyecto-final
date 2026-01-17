' use strict '

const headerForm = document.querySelector(`.Header-form`)
const headerInput = document.querySelector(`#search`)

const routes = {
    europa: `europa.html`,
    austria: `europa.html#austria`,
    grecia: `europa.html#grecia`,
    noruega: `europa.html#noruega`,

    asia: `asia.html`,
    japon: `asia.html#japon`,
    tailandia: `asia.html#tailandia`,
    bali: `asia.html#bali`,

    africa: `africa.html`,
    marruecos: `africa.html#marruecos`,
    kenia: `africa.html#kenia`,
    zanzibar: `africa.html#zanzibar`,

    oceania: `oceania.html`,
    australia: `oceania.html#australia`,
    'nueva zelanda': `oceania.html#nuevazelanda`,

    america: `america-norte.html`,
    canada: `america-norte.html#canada`,
    'estados unidos': `america-norte.html#eeuu`,
    'nueva york': `america-norte.html#nymx`,
    mexico: `america-norte.html#nymx`,

    'america del sur': `america-sur.html`,
    peru: `america-sur.html#peru`,
    patagonia: `america-sur.html#patagonia`,
    brasil: `america-sur.html#brasil`,
}

headerForm.addEventListener(`submit` , (e)=>{
    e.preventDefault()

    const value = headerInput.value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

    if (!value) return

    if (routes[value]){
        window.location.href = routes[value]
    }else{
        alert(' Destino no encontrado')
    }
})