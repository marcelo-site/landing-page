//slide text
function slideText(e) {
    const textArray = e.innerHTML.split('')
    setInterval(() =>{
        e.innerHTML= ''
        e.classList.toggle('inline-block')
        textArray.forEach((letra, i) => {
            setTimeout(function(){
                e.innerHTML += letra
            },120 * i)
        });
    }, 4000) 
}
const slideText1 = document.getElementById("slideText1");
const slideText2 = document.getElementById("slideText2")
slideText(slideText1)
slideText(slideText2)
const menuClose = document.querySelector('#icon-close');
const menuOpen = document.querySelector('#icon-open');
const closeOpen = document.getElementById('close-menu')
const body = document.querySelector('body')
const closeMenuLabel = document.querySelector('.toggle-menu-label')
const closeMenu = document.querySelector('.menu-mobile')
const fundoMenuToggle= document.querySelector('#fundo-menu-toggle')
function menuResponsivo(){
    closeOpen.classList.toggle('visible-media');
    menuOpen.classList.toggle('visible-media');
    menuClose.classList.toggle('visible-media');
    body.classList.toggle('body-overflow')
    fundoMenuToggle.classList.toggle('invisible')
}
closeMenuLabel.addEventListener('click', menuResponsivo)
closeMenu.addEventListener('click', menuResponsivo)
closeOpen.addEventListener('click', ()=> body.classList.remove('body-overflow'))
const displayHeigth = window.innerHeight
//button top
const topButton = document.querySelector('.back-to-top')
const top1 = () => {
    let top =  window.pageYOffset || document.documentElement.scrollTop
    if(top >= displayHeigth/3){
        topButton.classList.add('flex')
    } else {
        topButton.classList.remove('flex')
    }
}
document.addEventListener( "scroll", top1)

//Modal img
const largura = window.screen.width
const modal = document.getElementById('modal')
const imgModal = document.querySelectorAll('#gallery .grid img')
const exitModal = document.querySelector('body')
const setaD = document.getElementById('setaD')
const setaE = document.getElementById('setaE')
const modalImg = document.querySelector('#modal img')
const modalVer= document.querySelectorAll('.gallery-img')
const modalPver = document.querySelector('.modal-ver')
const zoom = document.querySelector('.zoom')
let srcValue = ''
let src = ''
let src1 = ''
let src2 = ''
const height = window.screen.width
const imgModalSize = imgModal.length
function modalActive() {
    for ( let i = 0;i < imgModalSize; i++) {
        imgModal[i].addEventListener ('click' ,()=> {
            srcValue = imgModal[i].getAttribute('src')
        modalImg.setAttribute('src', srcValue)
            modal.classList.add('modal-active')
            body.classList.add('body-overflow')
        })  
    }
}
function splitImg(){
    src = srcValue.split('-')
    src1 = src[1].split ('.')
    src2 = parseInt(src1[0])
}
setaE.addEventListener ('click', (e)=> {
    srcValue = modalImg.getAttribute('src')
    splitImg()
    if (src2 > 1){
                modalImg.setAttribute('src', `${src[0]}-${src2 - 1}.${src1[1]}`)
                if(src2 == 2){
                    setaE.classList.add('modal-fim')   
                } else  {
                    setaD.classList.remove('modal-fim')
                }
            }   e.stopPropagation();
})
setaD.addEventListener('click', (e)=> {
    srcValue = modalImg.getAttribute('src')
    splitImg()
    if (src2 < imgModalSize){
            modalImg.setAttribute('src', `${src[0]}-${src2 + 1}.${src1[1]}`) 
            if(src2 ==  (imgModalSize - 1)) {
                setaD.classList.add('modal-fim')   
            } else {
                setaE.classList.remove('modal-fim')
            }
        }  e.stopPropagation();
})
exitModal.addEventListener ('click', (e)=> {
    setaD.classList.remove('modal-fim')
    setaE.classList.remove('modal-fim')
    e.stopPropagation()
})
modal.addEventListener('click', (e)=> {
    setaD.classList.remove('modal-fim')
    setaE.classList.remove('modal-fim')
    modal.classList.remove('modal-active')
    body.classList.remove('body-overflow')
    e.stopPropagation();
} )
modalImg.addEventListener('click', (e) => {
    e.stopPropagation()
})
const zoomMais = document.querySelector('.ampliar')
const zoomMenos = document.querySelector('.diminuir')
zoom.addEventListener('click', (e)=> {
    zoomMais.classList.toggle('invisible')
    zoomMenos.classList.toggle('invisible')
    if(largura > 800){
    modalImg.classList.add('scale2');
    modalImg.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    modalImg.style.transformOrigin = `${x}px ${y}px`
    })
    modalImg.addEventListener('mouseleave', ()=> {
           zoomMais.classList.remove('invisible')
           zoomMenos.classList.add('invisible')
            modalImg.style.transformOrigin = 'center center'
            modalImg.classList.remove('scale2')
     })
    }
    else {
        modalImg.classList.toggle('modal-img')
    }
    e.stopPropagation()
})
window.addEventListener ('load', modalActive)