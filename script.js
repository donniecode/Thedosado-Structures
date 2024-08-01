//mobile sidebar
const menubtns = document.querySelector(".menu-btns");
const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function(){
  sidebar.style.display="flex";
  hamburger.style.display="none";
  closemenu.style.display="block";
})

closemenu.addEventListener("click", function(){
  sidebar.style.display="none";
  hamburger.style.display="block";
  closemenu.style.display="none";
})

// back to top button
const toTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    toTop.classList.add('active');
  } else{
    toTop.classList.remove('active');
  }
})