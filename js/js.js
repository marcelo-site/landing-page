const menuClose = document.querySelector('#icon-close');
const menuOpen = document.querySelector('#icon-open');
const closeOpen = document.getElementById('close-menu')
const body = document.querySelector('body')
const closeMenuLabel = document.querySelector('.close-menu-label')
const closeMenu = document.querySelector('.menu-mobile')
const fundoMenuToggle= document.querySelector('.fundo-menu-toggle')
function menuResponsivo(){
    closeOpen.classList.toggle('visible-media');
    menuOpen.classList.toggle('visible-media');
    menuClose.classList.toggle('visible-media');
    body.classList.toggle('body-overflow')
    fundoMenuToggle.classList.toggle('invisible')
}
closeMenuLabel.addEventListener('click', menuResponsivo)
closeMenu.addEventListener('click', menuResponsivo)
const displayHeigth = window.innerHeight
//button top
const topButton = document.querySelector('.back-to-top')
let top1 = () => {
    let top =  window.pageYOffset || document.documentElement.scrollTop
    if(top >= displayHeigth/3){
        topButton.classList.add('flex')
    } else {
        topButton.classList.remove('flex')
    }
}
document.addEventListener( "scroll", top1)
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
        }, 5000) 
 }
const slideText1 = document.getElementById("slideText1");
const slideText2 = document.getElementById("slideText2")
slideText(slideText1)
slideText(slideText2)
//Modal img
const modal = document.getElementById('modal')
const imgModal = document.querySelectorAll('.grid img')
const divModal = document.querySelector('#modal img')
const divModal1 = document.querySelector('#modal')
const exitModal = document.querySelector('.exit')
const setaD = document.getElementById('setaD')
const setaE = document.getElementById('setaE')
const modalImg = document.querySelector('#modal img')
const modalVer= document.querySelectorAll('.gallery-img')
const modalPver = document.querySelector('.modal-ver')
let srcValue = ''
let src = ''
let src1 = ''
let src2 = ''
const imgModalSize = imgModal.length
function modalActive() {
    for ( let index = 0;index < imgModal.length; index++) {
        imgModal[index].addEventListener ( 'click' , function() {
            srcValue = imgModal[index].getAttribute('src')
            divModal.setAttribute('src', srcValue)
            modal.classList.toggle('modal-active')
            body.classList.add('body-overflow')
        })
    }
}
function splitImg(){
    src = srcValue.split('-')
    src1 = src[1].split ('.')
    src2 = parseInt(src1[0])
}
setaE.addEventListener ( 'click', function(e){
    srcValue = divModal.getAttribute('src')
    splitImg()
    if (src2 > 1){
                divModal.setAttribute('src', `${src[0]}-${src2 - 1}.${src1[1]}`)
                if( src2 == 2){
                    setaE.classList.add('modal-fim')   
                } else  {
                    setaD.classList.remove('modal-fim')
                }
            }
    e.stopPropagation();
} )
setaD.addEventListener('click', function(e){
    srcValue = divModal.getAttribute('src')
    splitImg()
    if (src2 < imgModalSize){
                divModal.setAttribute('src', `${src[0]}-${src2 + 1}.${src1[1]}`) 
                if(src2 ==  (imgModalSize - 1)) {
                    setaD.classList.add('modal-fim')   
                } else {
                    setaE.classList.remove('modal-fim')
                }
            }
    e.stopPropagation();
})
exitModal.addEventListener ( 'click' , function() {
    setaD.classList.remove('modal-fim')
    setaE.classList.remove('modal-fim')
    body.classList.remove('body-overflow')
})
modal.addEventListener('click', (e) => {
    modal.classList.remove('modal-active')
    body.classList.remove('body-overflow')
    e.stopPropagation();
} )
modalImg.addEventListener('click', (e) => {
    e.stopPropagation()
})
addEventListener ( 'load', modalActive)