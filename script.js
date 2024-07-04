let heart = document.getElementById("heart");

heart.onclick = () => {
    heart.style.color = "#fff";
    heart.innerHTML = "happy birthday<br>𝒥𝒶𝓈𝓂𝒾𝓃ℯ🤍";
    
    // إطلاق قصاصات الورق الملونة
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};
