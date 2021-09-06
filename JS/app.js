let bouton = document.getElementById("top-button");
const loader = document.querySelector('.loader');


window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        bouton.style.display="none";
    } else {
        bouton.style.display="block";
    }
  });

document.getElementById("connexion").addEventListener("submit", function(sent){
    sent.preventDefault();
    var mdp = document.getElementById("mdp");
    if (mdp == motdepasse) { 
    location.replace("http://127.0.0.1:5500/formation.html");
    } else {
        alert('Le mot de passe n\'+est pas correct')
    }
});



