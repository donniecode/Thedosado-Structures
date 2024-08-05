/* mobile sidebar toggler */
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', function(e){
  sidebar.style.display = 'flex';
  closeMenu.style.display = 'block';
  hamburger.style.display = 'none';
  sidebarClicked();
})
closeMenu.addEventListener('click', function(e){
  sidebar.style.display = 'none';
  closeMenu.style.display = 'none';
  hamburger.style.display = 'initial';
  sidebarClicked();
})

function sidebarClicked (e){
  const sidebarLi = document.querySelectorAll('.sidebar li');
  sidebarLi.forEach((li) => {
    li.addEventListener('click', function(){
        sidebar.style.display ='none';
        closeMenu.style.display ='none';
        hamburger.style.display ='initial';
    })
  })
  
}

/* back to top button */
const toTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    toTop.classList.add('active');
  } else{
    toTop.classList.remove('active');
  }
})

/* Testimonials slider */
const cardGroups = document.querySelectorAll('.card-group');
const btnPrev = document.querySelector('.btn-previous');
const btnNext = document.querySelector('.btn-next');
const n = 0;

function resetCards(){
  for(let i = 0; i < cardGroups.length; i++){
    cardGroups[i].style.display ='none';
    cardGroups[n].style.display ='flex';
  }
}
resetCards();

btnPrev.addEventListener('click', ()=>{
  if(n>0){
    n--;
  } else{
    n = cardGroups.length-1;
  }
  resetCards();
})

btnNext.addEventListener('click', ()=>{
  if(n<0){
    n++;
  } else{
    n = 0;
  }
  resetCards();
})