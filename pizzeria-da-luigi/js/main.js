const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".menu-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    document.querySelectorAll(".menu-tabs button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".menu-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(tab)?.classList.add("active");
  });
});
