document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
  
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