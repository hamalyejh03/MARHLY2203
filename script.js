/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function start() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
}

// 💔 Bouton NON impossible à cliquer
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// ❤️ Bouton OUI
function yes() {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("yesPage").classList.remove("hidden");

    setInterval(createEmoji, 250);
}

function createEmoji() {
    const emojis = ["❤️", "💖", "💕", "💘", "🔥"]; // Liste des emojis possibles
    const emoji = document.createElement("div");
    emoji.classList.add("heart"); // On garde la classe heart pour l'animation
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]; // Choix aléatoire

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "-20px";
    emoji.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 4000);
}

function restart() {
    document.getElementById("yesPage").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");

    // Nettoyage des cœurs
    document.querySelectorAll(".heart").forEach(h => h.remove());
}

