const hambuggerMenu = document.querySelector('.hambugger');
const closeMenu = document.querySelector('.close-menu');
const hambuggerIcon = document.querySelector('.menu-icon');
const links = document.querySelectorAll('.menu-link');

hambuggerIcon.addEventListener('click', (openDisplay) => {
  openDisplay.preventDefault();
  hambuggerMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  hambuggerMenu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hambuggerMenu.style.display = 'none';
  });
});
