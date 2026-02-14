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
            <h1 style="color:white;">Wuhuuuu 🥳🥰❤️</h1>
            <h2 style="color:white;">Huhh!! Mala mahitiye hota tu No var click karat hotiss !!😏
        I promise unlimited love, hugs & annoying you forever😌. I love youu !!❤️</h2>
            <img src="cats/cat1.png" width="200">
        </div>
    `;
});
