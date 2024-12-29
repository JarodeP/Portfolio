// Tableau de textes à afficher avec l'effet machine à écrire
const textArray = [
    "HTML, CSS, JS", 
    "Création de design", 
    "Photoshop, Première Pro",
    "MySQL, jQuery", 
    "Utilisation de l'IA "
];
// Index du texte actuel
let index = 0;
// Index du caractère actuel dans le texte
let charIndex = 0;
// Indicateur pour savoir si on est en train d'effacer
let deleting = false;

// Vitesse de frappe en millisecondes
const typeSpeed = 100;
// Vitesse d'effacement en millisecondes
const deleteSpeed = 50;
// Pause entre les textes en millisecondes
const pauseBetweenTexts = 1000;

// Fonction pour l'effet machine à écrire
const typeWriterEffect = () => {
    // Récupérer l'élément où afficher le texte
    const textDisplay = document.getElementById('code-text');
    // Texte actuel à afficher
    const currentText = textArray[index];

    // Mettre à jour le contenu du texte
    if (deleting) {
        // Si on efface, réduire l'index du caractère
        textDisplay.textContent = currentText.substring(0, charIndex--);
    } else {
        // Si on écrit, augmenter l'index du caractère
        textDisplay.textContent = currentText.substring(0, charIndex++);
    }

    // Si le texte est entièrement affiché
    if (!deleting && charIndex === currentText.length) {
        // Attendre avant de commencer à effacer
        setTimeout(() => {
            // Commencer à effacer
            deleting = true;
        }, pauseBetweenTexts);
    } 
    // Si le texte est entièrement effacé
    else if (deleting && charIndex === 0) {
        // Passer au texte suivant
        index = (index + 1) % textArray.length;
        // Recommencer à écrire
        deleting = false;
    }

    // Déterminer la vitesse en fonction de l'action
    const timeout = deleting ? deleteSpeed : typeSpeed;
    // Relancer la fonction après un délai
    setTimeout(typeWriterEffect, timeout);
}

// Démarrer l'effet après le chargement de la page
document.addEventListener('DOMContentLoaded', typeWriterEffect);
// ---------------------------!----------------------------------
    
    // Slide descendant lors du clic sur le bouton call to action (le cercle orange)
    const scrollButton = document.querySelector('.scroll-down'); // Sélectionne le bouton cercle orange
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector('#skills'); // Section "Compétences"
        
        // Smooth scroll vers la section compétences
        window.scrollTo({
            top: target.offsetTop, // Position de la section
            behavior: 'smooth' // Effet fluide
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre message !');
        contactForm.reset();
    });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    document.getElementById('scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

//---------------------------Menu burger----------------------------------//
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});