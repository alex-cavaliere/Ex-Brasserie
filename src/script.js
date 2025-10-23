const BEERS = ["Stout", "IPA", "Blonde"];
console.log("BEERS:", BEERS);

// Dark/Light theme
(() => {
  const btn = document.querySelector("#toggle-theme");
  if (!btn) return;

  const KEY = "lm_theme";
  const apply = t => document.documentElement.setAttribute("data-theme", t);

  apply(localStorage.getItem(KEY) || "light");

  btn.addEventListener("click", () => {
    const next = (document.documentElement.getAttribute("data-theme") === "light") ? "dark" : "light";
    apply(next);
    localStorage.setItem(KEY, next);
  });
})();

// défilement vers sections
(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();

// animation d'apparition 
(() => {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  });
  items.forEach(el => observer.observe(el));
})();
