// slider
const slider = document.querySelector("#slider");
const slides = document.querySelectorAll("#slider .slide");

// set position
slider.style.left = 0;

// remote control
const leftButton = document.querySelector(".remote-control-left");
const rightButton = document.querySelector(".remote-control-right");

// map buttons
const mapButton = document.querySelectorAll(".remote-control-map li button");

// position of first slide
let position = 0;

function updateSliderPosition() {
    if (position < 0) position = slides.length - 1;
    if (position >= slides.length) position = 0;

    slider.style.left = -(slider.getBoundingClientRect().width / slides.length) * position + "px";
    mapButton.forEach(button => button.classList.remove("active"));
    mapButton[position].classList.add("active");
}

// if left button is pressed we decrease the position of the slider by one slide (long story short we decrease index)
leftButton.addEventListener("mousedown", () => {
    position--;
    updateSliderPosition();
});

// if right button is pressed we increase the position of the slider by one slide (long story short we increase index)
rightButton.addEventListener("mousedown", () => {
    position++;
    updateSliderPosition();
});