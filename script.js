const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveMessage = document.getElementById("loveMessage");

noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 50);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    loveMessage.classList.remove("hidden");
});
