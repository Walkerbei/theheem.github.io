const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const cards = document.querySelectorAll(".work-card, .service-list article");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
