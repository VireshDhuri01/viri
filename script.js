const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <div style="margin-top:200px; font-family:cursive;">
            <h1 style="color:white;">YAAAYYYYY 🥰💖</h1>
            <h2 style="color:white;">You just made me the happiest person alive 😭💕</h2>
            <img src="cats/cat1.png" width="200">
        </div>
    `;
});
