const hambuggerMenu = document.querySelector('.hambugger');
const closeMenu = document.querySelector('.close-menu');
const header = document.querySelector('.header');
const hambuggerIcon = document.querySelector('.menu-icon');
const links = document.querySelectorAll('.menu-link');

hambuggerIcon.addEventListener('click', function(event){
  event.preventDefault();
  hambuggerMenu.style.display = 'flex';

});
closeMenu.addEventListener('click', function(){
  hambuggerMenu.style.display = 'none';
});
links.forEach(function(link){
  link.addEventListener('click', function(){
    hambuggerMenu.style.display = 'none';
  });
});