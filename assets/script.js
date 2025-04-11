const navbar = document.getElementById("header");
const title = document.getElementById("giallo");
const button = document.getElementById("signin");

window.addEventListener("scroll", () => {
  if (window.scrollY > title.offsetHeight) {
    title.classList.add("scrolled");
    navbar.classList.add("scrolled");
    button.classList.add("scrolled1");
  } else {
    title.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
    button.classList.remove("scrolled1");
  }
});
