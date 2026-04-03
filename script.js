let noCount = 0;
let hasTouchedNo = false;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bunny = document.getElementById("displayBunny");
const music = document.getElementById("bgMusic");
const toast = document.getElementById("toast");
const mainTitle = document.getElementById("mainTitle");

const gifs = {
    shy: "shy.webp",
    sad: "sad.webp",
    crying: "crying.webp",
    begging: "begging.webp",
    playful: "playful.webp"
};

function showToast(msg) {
    toast.innerText = msg;
    toast.style.opacity = 1;
    setTimeout(() => toast.style.opacity = 0, 2000);
}

noBtn.addEventListener("click", () => {
    noCount++;
    hasTouchedNo = true;
    music.play().catch(() => {});

    if (noCount === 1) {
        noBtn.innerText = "Are you sure? 🥺";
        bunny.src = gifs.sad;
        showToast("Please don't say no... 🥺");
    } else if (noCount === 2) {
        noBtn.innerText = "Really sure? 😭";
        bunny.src = gifs.crying;
        showToast("You're making me so sad... 💔");
    } else if (noCount === 3) {
        noBtn.innerText = "Think again! 💔";
        bunny.src = gifs.begging;
        showToast("Ek bar 'No' click karke to dekhiye.. 😏");
    } else {
        noBtn.innerText = "Catch me! 😜";
        bunny.src = gifs.playful;
        noBtn.style.position = "fixed";
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
        showToast("Catch me if you can! 🏃‍♂️💨");
    }

    yesBtn.style.transform = `scale(${1 + noCount * 0.4})`;
    noBtn.style.transform = `scale(${Math.max(0.4, 1 - noCount * 0.1)})`;
});

yesBtn.addEventListener("click", () => {
    music.play().catch(() => {});
    if (!hasTouchedNo) {
        showToast("Ek bar 'No' click karke dekho! 😜");
        mainTitle.innerText = "Pehle 'No' click karo! 😂";
    } else if (noCount < 3) {
        showToast("Fir se 'No' click karke to dekhiye.. 😏");
        mainTitle.innerText = "Try clicking 'No' again! 🥺";
    } else {
        document.getElementById("proposalScreen").style.display = "none";
        document.getElementById("celebrationScreen").style.display = "block";
        document.body.style.background = "#e6fffa";
    }
});

setInterval(() => {
    const symbols = ["💖", "💕", "✉️", "💌"];
    const el = document.createElement('div');
    el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    el.className = 'falling-item';
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = "25px";
    el.style.animation = "fall 4s linear forwards";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}, 350);
