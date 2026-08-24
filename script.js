const SUPABASE_URL = "https://kknqtmgbuyvsgopuzlwc.supabase.co";
const SUPABASE_KEY = "sb_publishable_a5w32DQj8rHV_Yi2vdZy_w_vk";

const btn = document.getElementById("menu");
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
}
