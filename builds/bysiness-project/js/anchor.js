const acnhor = document.querySelector("#anchor");
const obj = document.querySelector("[data-anchor]");

window.addEventListener("scroll", () => {
  const obj_top = obj.getBoundingClientRect().top;

  if (window.scrollY - innerHeight >= obj_top) {
    acnhor.classList.add("active");
  } else {
    acnhor.classList.remove("active");
  }
});
