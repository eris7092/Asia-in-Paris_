// Fonction d'animation de fondu au défilement
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in'); // Sélectionne tous les éléments avec la classe fade-in

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible'); // Ajouter la classe visible lorsque l'élément est dans la fenêtre
        }
    });
}

// Fonction pour animer les éléments au survol (par exemple, les boutons de contact)
function hoverEffect() {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.transform = 'scale(1.05) translateY(-3px)';
            link.style.transition = 'transform 0.2s ease';
        });
        link.addEventListener('mouseout', function() {
            link.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Fonction d'animation pour les images avec zoom
function imageZoomEffect() {
    const images = document.querySelectorAll('details img');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
}

// Initialisation des animations et écoute des événements de défilement
document.addEventListener('DOMContentLoaded', function() {
    // Applique une animation de fondu au défilement
    fadeInElements();
    // Animation sur les liens de contact au survol
    hoverEffect();
    // Effet de zoom sur les images au survol
    imageZoomEffect();
    
    // Ajout de l'écouteur d'événements pour le défilement de la page
    window.addEventListener('scroll', function() {
        fadeInElements(); // Vérifie les éléments à chaque défilement
    });
});
