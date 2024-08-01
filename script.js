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