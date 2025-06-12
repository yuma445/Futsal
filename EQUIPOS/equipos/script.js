// Función para mostrar u ocultar jugadores
function togglePlayers(teamId) {
    const players = document.getElementById(teamId);
    players.style.display = players.style.display === 'block' ? 'none' : 'block';
}

// Función para mostrar estadísticas del jugador
function showStats(playerName) {
    alert("Estadísticas de " + playerName);
}

// Carrusel de imágenes
let currentImageIndex = 0;
const images = ['IMG-20250509-WA0040.jpg','IMG-20250327-WA0062.jpg', 'IMG-20250509-WA0041.jpg', 'IMG-20250329-WA0003.jpg', 'IMG-20250329-WA0020.jpg']; // Agrega tus imágenes aquí

setInterval(() => {
    const carouselImage = document.querySelector('.carousel-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}, 5000); // Cambia cada 5 segundos
