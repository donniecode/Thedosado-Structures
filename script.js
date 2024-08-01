/* local location */
/* const newwindow = new URL(window.location.href);
newwindow.searchParams.set("name", "thedosadostructures");
console.log(newwindow); */

/* back to top button */
const toTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    toTop.classList.add('active');
  } else{
    toTop.classList.remove('active');
  }
})