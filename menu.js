const burger = document.querySelector(".burger");
const nav = document.querySelector("#main-nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
  document.body.classList.toggle("menu-open", open);
}

burger.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

// Luk menuen hvis vinduet bliver bredt (fx drejet tablet)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});
