//slide text
const textWriter = function (e) {
    const textArray = e.innerHTML.split('')
    e.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(function () {
            e.innerHTML += letra
        }, 120 * i)
    })
}
const slideTextTimeout = (e) => {
    setTimeout(() => {
        textWriter(e)
    }, 200)
}
const slideText = (e) => {
    setInterval(() => {
        textWriter(e)
        e.classList.toggle('inline-block')
    }, 4000)
}
const slideText1 = document.getElementById("slideText1");
const slideText2 = document.getElementById("slideText2")
slideTextTimeout(slideText1)
slideText(slideText1)
slideText(slideText2)
//Menu responsivo
const menuClose = document.querySelector('#icon-close');
const menuOpen = document.querySelector('#icon-open');
const closeOpen = document.getElementById('close-menu')
const body = document.querySelector('body')
const closeMenuLabel = document.querySelector('.toggle-menu-label')
const closeMenu = document.querySelector('.menu-mobile')
const fundoMenuToggle = document.querySelector('#fundo-menu-toggle')
const menuResponsivo = () => {
    closeOpen.classList.toggle('visible-media');
    menuOpen.classList.toggle('visible-media');
    menuClose.classList.toggle('visible-media');
    body.classList.toggle('body-overflow')
    fundoMenuToggle.classList.toggle('invisible')
}
closeMenuLabel.addEventListener('click', menuResponsivo)
closeMenu.addEventListener('click', menuResponsivo)
closeOpen.addEventListener('click', () => body.classList.remove('body-overflow'))
fundoMenuToggle.addEventListener('click', menuResponsivo)
const displayHeigth = window.innerHeight
//button top
const topButton = document.querySelector('.back-to-top')
const scrollTop = () => {
    let top = window.pageYOffset || document.documentElement.scrollTop
    if (top >= displayHeigth / 3) {
        topButton.classList.add('flex')
    } else {
        topButton.classList.remove('flex')
    }
}
document.addEventListener("scroll", scrollTop)
//Modal img
const largura = window.screen.width
const modal = document.getElementById('modal')
const imgModal = document.querySelectorAll('#gallery .grid img')
const exitModal = document.querySelector('body')
const setaD = document.getElementById('setaD')
const setaE = document.getElementById('setaE')
const modalImg = document.querySelector('#modal img')
const modalVer = document.querySelectorAll('.gallery-img')
const modalPver = document.querySelector('.modal-ver')
const zoom = document.querySelector('.zoom')
let srcValue = ''
const imgPlus = document.querySelector('#imgPlus')
const imgModalSize = imgModal.length

let indexImg = undefined
const modalFim = (index) => {
  if (index === 0) {
        setaE.setAttribute('style', 'color: #24292f73;cursor: no-drop;background-color: #f3ebebd1;')
    } else if (index === imgModal.length - 1) {
        setaD.setAttribute('style', 'color: #24292f73;cursor: no-drop;background-color: #f3ebebd1;')
    } else {
        setaD.setAttribute('style', '')
        setaE.setAttribute('style', '')
    }
}
imgModal.forEach((el, i) => el.addEventListener('click', (e) => {
    e.stopPropagation()
    modalFim(i)
    indexImg = i
    srcValue = el.getAttribute('src')
    modalImg.setAttribute('src', srcValue)
    modal.classList.add('modal-active')
}))
imgPlus.addEventListener('click', () => imgModal[5].click())
const imgChange = (e, ind) => {
    e.stopPropagation();
    modalFim(ind)
    srcValue = imgModal[indexImg].getAttribute('src')
    modalImg.src = srcValue
}
setaE.addEventListener('click', (e) => {
        indexImg--
        if(indexImg < 0) indexImg = 0
        if (indexImg < 0) {
            indexImg = 0
            e.stopPropagation()
            return indexImg
        }
        if (indexImg <= imgModal.length - 1) imgChange(e, indexImg)
})
setaD.addEventListener('click', (e) => {
    indexImg++
    if(indexImg < 0) indexImg = 0
    if(indexImg >= imgModal.length) {
        indexImg = imgModal.length - 1
        e.stopPropagation()
        return
    }
    if (indexImg <= imgModal.length - 1) imgChange(e, indexImg)
})
exitModal.addEventListener('click', (e) => {
    setaD.setAttribute('style', '')
    setaE.setAttribute('style', '')
    e.stopPropagation()
})
modal.addEventListener('click', (e) => {
    setaD.setAttribute('style', '')
    setaE.setAttribute('style', '')
    modal.classList.remove('modal-active')
    body.classList.remove('body-overflow')
    e.stopPropagation();
})
modalImg.addEventListener('click', (e) => {
    e.stopPropagation()
})
const zoomMais = document.querySelector('.ampliar')
const zoomMenos = document.querySelector('.diminuir')
zoom.addEventListener('click', (e) => {
    zoomMais.classList.toggle('invisible')
    zoomMenos.classList.toggle('invisible')
    if (largura > 800) {
        modalImg.classList.add('scale2')
        modalImg.addEventListener('mousemove', (e) => {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            modalImg.style.transformOrigin = `${x}px ${y}px`
        })
        modalImg.addEventListener('mouseleave', () => {
            zoomMais.classList.remove('invisible')
            zoomMenos.classList.add('invisible')
            modalImg.style.transformOrigin = 'center center'
            modalImg.classList.remove('scale2')
        })
    }
    else modalImg.classList.toggle('modal-img')
    e.stopPropagation()
})