
let currentImage = 1;

setInterval(() => {
    document.getElementById(IMG-20250329-WA0020.jpg).style.opacity = '0';
    
    currentImage = currentImage === 1 ? 2 : 1;

    setTimeout(() => {
        document.getElementById(`IMG-20250329-WA0020.jpg`).style.opacity = '1';
    }, 1000);
}, 3000);

let teamName = document.querySelector('.team-logo');
let teamNickname = document.querySelector('.team-nickname');

setInterval(() => {
    teamName.style.display = teamName.style.display === 'none' ? 'block' : 'none';
    teamNickname.style.display = teamNickname.style.display === 'block' ? 'none' : 'block';
}, 3000);

function showPlayerInfo(player) {
    document.getElementById('player-stats').innerHTML = `
        <h3>${player}</h3>
        <p>Partidos Jugados: 10</p>
        <p>Goles Anotados: 10</p>
        <p>Asistencias: 2</p>
        <p>Tarjetas Amarillas: 3</p>
        <p>Tarjetas Rojas: 0</p>
    `;
    
    document.getElementById('player-image').src = `PLAYER IMG.jpg`; // Cambia la ruta según tus imágenes
    document.getElementById('player-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('player-modal').style.display = 'none';
}
