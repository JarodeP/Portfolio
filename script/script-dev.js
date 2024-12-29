// Initial rotation angle for each image
let currentAngle = 0;

const carouselItems = document.querySelectorAll(".carousel-item");

// Fonction pour faire tourner les images
function rotateCarousel(direction) {
  // Calculer l'angle de rotation selon la direction (gauche ou droite)
  currentAngle += direction * 72; // 72° pour chaque image (360° / 5 éléments)

  // Appliquer la transformation à chaque élément du carousel
  carouselItems.forEach((item, index) => {
    item.style.transition = "transform 1s ease"; // Animation fluide pour chaque élément
    item.style.transform = `rotateY(${index * 72 + currentAngle}deg) translateZ(150px)`;
  });
}

// Rotation vers la gauche
document.querySelector(".prev").addEventListener("click", () => {
  rotateCarousel(1); // Rotation à gauche
});

// Rotation vers la droite
document.querySelector(".next").addEventListener("click", () => {
  rotateCarousel(-1); // Rotation à droite
});
