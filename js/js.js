const menuClose = document.querySelector('#icon-close');
const menuOpen = document.querySelector('#icon-open');
const closeOpen = document.getElementById('close-menu')
function menu1(){
    if( menuOpen.classList.length == 3){
        closeOpen.classList.remove('visible-media');
        menuOpen.classList.add('visible-media');
        menuClose.classList.remove('visible-media')
    } else if( menuOpen.classList.length == 4) {
        closeOpen.classList.add('visible-media');
        menuOpen.classList.remove('visible-media');
        menuClose.classList.add('visible-media')
    }
}
const displayHeigth = window.innerHeight
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
const slideText1 = document.getElementById("slideText1")
    const slideText1Class = slideText1.classList
    const slideText2 = document.getElementById("slideText2")
    const slidetext2Class = slideText2.classList
    setInterval(() =>{
       const e = slideText1Class.value.split(' ')
        if(e[1] == 'invisible')  {
            slideText1Class.add('inline-block')
            slideText1Class.remove('invisible')
         slidetext2Class.remove('inline-block')
         slidetext2Class.add('invisible')
        } 
        else if(e[1] == 'inline-block') {
            slideText1Class.remove('inline-block')
            slideText1Class.add('invisible')
         slidetext2Class.add('inline-block')
         slidetext2Class.remove('invisible')
        }
    }, 4000);

//Modal img
const modal = document.getElementById('modal')
const imgModal = document.querySelectorAll('.grid img')
const divModal = document.querySelector('#modal img')
const exitModal = document.querySelector('.exit')
const setaD = document.getElementById('setaD')
const setaE = document.getElementById('setaE') 
let srcValue = ''
let src = ''
let src1 = ''
let src2 = ''
const src5 = imgModal.length
const body = document.querySelector('body')
// const bodyModal=document.querySelector('#modal')
function modal1() {
    for ( let index = 0;index < imgModal.length; index++) {
        imgModal[index].addEventListener ( 'click' , function() {
            srcValue = imgModal[index].getAttribute('src')
            divModal.setAttribute('src', srcValue)
            modal.classList.toggle('modal-active')
            body.classList.add('body-overflow')
        })
    }
}
setaD.addEventListener ( 'click', (e) =>{
    srcValue = divModal.getAttribute('src')
    src = srcValue.split('-')
    src1 = src[1].split ('.')
    src2 = parseInt(src1[0])
    if (src2 < src5){
        divModal.setAttribute('src', src[0] +'-'+ (src2 + 1) + '.' + src1[1])
        if(src2 == (src5 - 1)) {
            setaD.classList.add('modal-fim')   
        } else {
            setaE.classList.remove('modal-fim')
        }
    }
    e.stopPropagation();
})
setaE.addEventListener ( 'click', (e) =>{
    srcValue = divModal.getAttribute('src')
    src = srcValue.split('-')
    src1 = src[1].split ('.')
    src2 = parseInt(src1[0])
    if (src2 > 1){
        divModal.setAttribute('src', src[0] +'-'+ (src2 - 1) + '.' + src1[1])
        if( src2 == 2){
            setaE.classList.add('modal-fim')   
        } else  {
            setaD.classList.remove('modal-fim')
        }
    }
    e.stopPropagation();
})
exitModal.addEventListener ( 'click' , function() {
    modal.classList.toggle('modal-active')
    setaD.classList.remove('modal-fim')
    setaE.classList.remove('modal-fim')
    body.classList.remove('body-overflow')
})
modal.addEventListener('click', (e) => {
    modal.classList.remove('modal-active')
    body.classList.remove('body-overflow')
    // e.stopPropagation();
} )
addEventListener ( 'load', modal1)