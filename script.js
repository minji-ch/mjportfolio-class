const themeToggle = document.querySelector(".theme-toggle");
const currentYear = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(".reveal");

currentYear.textContent = new Date().getFullYear();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.setAttribute("aria-label", isDark ? "라이트 모드 전환" : "다크 모드 전환");
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "◐";
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
