let bouton = document.getElementById("top-button");
const loader = document.querySelector('.loader');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        bouton.style.display="none";
    } else {
        bouton.style.display="block";
    }
  });
