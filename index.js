const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')

const openNav = () => {
    openBtn.setAttribute('aria-expanded', true) /*Abre a nav-bar mobile*/
}

const closeNav = () => {
    openBtn.setAttribute('aria-expanded', false) /*Fecha a nav-bar mobile*/
}

openBtn.addEventListener('click', openNav)  /*Adiciona a função ao botão*/
closeBtn.addEventListener('click', closeNav)
