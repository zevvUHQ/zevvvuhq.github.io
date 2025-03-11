// Sélectionner les éléments
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Ouvrir ou fermer le menu au clic du bouton hamburger
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle la classe active pour gérer l'animation
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active'); // Enlever la classe active si on clique ailleurs
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour vérifier si l'élément est dans la fenêtre de visualisation
    function checkVisibility() {
        const elements = document.querySelectorAll('.skill, .expertise-item, .work-item, .travaux-texte');
        elements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }

    // Détecter le défilement et vérifier la visibilité des éléments
    window.addEventListener('scroll', checkVisibility);

    // Vérifier les éléments au chargement de la page
    checkVisibility();
});

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    function handleScroll() {
        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                project.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Call once on load to handle projects already in view
});

