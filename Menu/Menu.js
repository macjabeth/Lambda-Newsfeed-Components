
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu')[0];
// set menu transition
menu.style.transition = '0.5s';
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button')[0];
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
// close menu if open and anywhere on the page
window.addEventListener('click', (event) => {
  if (event.target !== menu &&
      event.target !== menuButton &&
      menu.classList.contains('menu--open')
  ) {
    toggleMenu();
  }
}, true);
