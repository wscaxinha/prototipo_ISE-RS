
function abrirPlayer(buttonElement) {
let audioContainer = document.getElementById("audioContainer");
let player = document.getElementById("player");
let podcastAssunto = document.getElementById("podcastAssunto");

audioContainer.style.display = "block"; // Exibe o container de áudio
podcastAssunto.style.display = "block"; // Exibe o assunto do podcast
player.play(); // Reproduz automaticamente

// Para a animação do botão ao clicar
buttonElement.style.animation = 'none';
}
function fecharPlayer() {
let audioContainer = document.getElementById("audioContainer");
let player = document.getElementById("player");
let botton = document.getElementById("botton"); // Seleciona o botão original

player.pause(); // Pausa a reprodução
player.currentTime = 0; // Reinicia o áudio para o início
audioContainer.style.display = "none"; // Oculta o container de áudio

// Restaura a animação do botão ao fechar o player
botton.style.animation = 'pulse 2s infinite';
}