/* Gallery */
const weldingImgs = document.querySelector('#welding-li-imgs');
const aluminiumImgs = document.querySelector('#aluminium-li-imgs');
const otherImgs = document.querySelector('#other-li-imgs');
const allImgs = document.querySelectorAll('.gallery-images');

const weldingLi = document.querySelector('#welding-li');
const aluminiumLi = document.querySelector('#aluminium-li');
const otherLi = document.querySelector('#other-li');

const galleryUl = document.querySelectorAll('.gallery ul');
const galleryMenuItems = document.querySelectorAll('.gallery ul li');


/* menu items click style */
galleryMenuItems.forEach((item) =>{
  item.addEventListener('click', function(e){
    item.classList.add('active');
    galleryMenuItems.forEach((li) =>{
      if(li !== item){
        li.classList.remove('active');
      }
    })
    
    /* displaying images for each menu item */
    galleryMenuItems.forEach((imgItem) =>{
        const itemImgs = document.querySelector(`#${this.id}-imgs`);
        imgsReset();
        itemImgs.classList.add('show-imgs');
        })
      })
  })

  /* hiding other images when its li is not clicked */
function imgsReset(){
  for(let i=0; i<allImgs.length; i++){
      allImgs[i].classList.remove('show-imgs');
  }
}