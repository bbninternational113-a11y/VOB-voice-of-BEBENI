const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll("#nav a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
