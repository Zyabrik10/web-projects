const hero_container = document.querySelector(".hero-container");
const hero_preview_img_list = document.querySelector(".hero-preview-img-list");
const hero_buttons_list = document.querySelector(".hero-buttons-list");
const header_fade = document.querySelector(".header-fade");
const header_text_fade = document.querySelectorAll(".header-text-fade");
const header_bottle_fade = document.querySelector(".header-bottle-fade");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  hero_container.style.backgroundPositionY = -window.scrollY + "px";

  hero_preview_img_list.style.marginTop = -window.scrollY * 1.5 + "px";

  hero_buttons_list.style.opacity = 1 - window.scrollY / 50;

  header_fade.style.opacity = 1 - window.scrollY / 70;

  header_bottle_fade.style.opacity = 1 - window.scrollY / 200;

  if (window.scrollY > 10) {
    header_text_fade.forEach((obj) => {
      obj.style.opacity = 0;
    });
  } else {
    header_text_fade.forEach((obj) => {
      obj.style.opacity = 1;
    });
  }
});
