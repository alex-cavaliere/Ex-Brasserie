const BEERS = ["Stout", "IPA", "Blonde"];
console.log("BEERS:", BEERS);


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

(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();