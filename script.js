const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeToggle.textContent =
        document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});
const words = [
  "Web Developer",
  "Graphics Designer",
  "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  if (typing) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex++);
    if (charIndex > words[wordIndex].length) {
      typing = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = words[wordIndex].substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, typing ? 120 : 70);
}

typeEffect();
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(section => {
  observer.observe(section);
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});