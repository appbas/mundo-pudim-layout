document.addEventListener("scroll", (event) => {

  const addBackdrop = window.scrollY > 25;
  const header = document.getElementsByTagName("header");

  
  if (addBackdrop && header && header.item(0) && 
      !header.item(0).classList.contains('backdrop-filter')) {
    header.item(0).classList.add('backdrop-filter');
  } else if (!addBackdrop && header.item(0).classList.contains('backdrop-filter')) {
    header.item(0).classList.remove('backdrop-filter');
  }

});

var open = false;
const menuIcon = document.getElementById('menu-icon');
const menuMobile  = document.getElementsByClassName('menu-mobile').item(0);

menuMobile.style = 'display: none !important';

menuIcon.addEventListener("click", (event) => {
  open = !open;
  console.log(open);
  console.log(menuMobile);
  if (open) {
    menuMobile.style = 'display: flex';
  } else {
    menuMobile.style = 'display: none !important';
  }
});