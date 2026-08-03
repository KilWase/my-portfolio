// Toggle mobile menu
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu) {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});
// Back to Top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
// Welcome message
window.addEventListener("load", () => {
  console.log("Welcome to StopEasy Restaurant!");
});