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