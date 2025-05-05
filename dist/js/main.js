const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul div li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
