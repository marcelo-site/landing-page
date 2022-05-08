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
    if(top >= displayHeigth/2){
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