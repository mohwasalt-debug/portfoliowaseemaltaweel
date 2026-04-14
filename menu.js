// Sélection du bouton menu et de la navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Écouteur d'événement pour afficher/masquer le menu (LE JS J'AI ESSAYER DE FAIRE SIMPLE)
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
