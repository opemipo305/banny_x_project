var only_button =document.querySelector('#botten_menu');
var navLinks = document.querySelectorAll('.list-link');

only_button.addEventListener('click',function (){

    document.body.classList.toggle('nav_new');
})

// Remove class nav-open on click of links

navLinks.forEach(link=>{
  link.addEventListener('click',function (){
    document.body.classList.remove('nav_new');
  });
})

  