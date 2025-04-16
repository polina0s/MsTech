document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
  
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.remove("initial");
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        header.classList.add("initial");
      }
    }
  
    header.classList.add("initial");
  
    window.addEventListener("scroll", handleScroll);
});

const open = document.querySelector('#open');
const mobileMenu = document.querySelector('#mobile-menu');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  open.classList.add('hidden');
  close.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  close.classList.add('hidden');
  open.classList.remove('hidden');
  document.body.style.overflow = '';
});