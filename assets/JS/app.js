function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
let serviceBtn = document.querySelector('#serviceBtn')
let BlogBtn = document.querySelector('#BlogBtn')
let WorkBtn = document.querySelector('#WorkBtn')
let ContactBtn = document.querySelector('#ContactBtn')
let aboutBtn = document.querySelector('#AboutBtn')
let about = document.querySelector('#about')
let service = document.querySelector('#service')
let Blog = document.querySelector('#blog')
let Work = document.querySelector('#work')
let Contact = document.querySelector('#contact')




serviceBtn.addEventListener('click', () => {
    scrollTo(service)
})
BlogBtn.addEventListener('click', () => {
    scrollTo(Blog)
})
WorkBtn.addEventListener('click', () => {
    scrollTo(Work)
})
ContactBtn.addEventListener('click', () => {
    scrollTo(Contact)
})
aboutBtn.addEventListener('click', () => {
    scrollTo(about)
})



const buttonsItems = document.querySelector(".buttons__item")
const buttonsBtn = document.querySelectorAll("#nav__linkShop")



