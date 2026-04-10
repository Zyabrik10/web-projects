const cards = document.querySelectorAll("#hero-slider .nft-card");

let index = 1;

window.onload = () => {
    setInterval(() => {
        if (index > 1) index = 0;
        cards.forEach(card => { card.classList.remove("active"); });
        cards[index++].classList.add("active");
    }, 5000);
}