const menubutton = document.getElementById("menu-button");
const navlinks = document.getElementById("nav-links");

menubutton.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  menubutton.classList.toggle("active");
});