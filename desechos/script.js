const images = [
    'IMG-20250329-WA0003.jpg',
    'IMG-20250329-WA0020.jpg',
	'IMG-20250329-WA0020.jpg',
    'IMG-20250509-WA0041.jpg' // Asegúrate de que estas imágenes existan en la misma carpeta o proporciona la ruta correcta
];

let currentImageIndex = 0;

function changeImage() {
    const slideshow = document.getElementById('slideshow');
    
    // Cambia al siguiente índice
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Actualiza la imagen mostrada con una transición suave
    slideshow.style.opacity = 0; // Desvanece la imagen actual
    setTimeout(() => {
        slideshow.src = images[currentImageIndex];
        slideshow.style.opacity = 1; // Vuelve a mostrar la nueva imagen
    }, 300); // Tiempo de desvanecimiento
}

// Cambia la imagen cada 5 segundos
setInterval(changeImage, 5000);

// Inicializa la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    
    // Asegúrate de que la primera imagen esté visible al cargar la página
    slideshow.src = images[currentImageIndex];
});
