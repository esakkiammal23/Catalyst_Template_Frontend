document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // FAQ ACCORDION
  // =========================
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  // =========================
  // PRICING TOGGLE (monthly/yearly)
  // =========================
  window.togglePricing = function () {
    const prices = document.querySelectorAll(".price");

    prices.forEach((el) => {
      const monthly = el.dataset.monthly;
      const yearly = el.dataset.yearly;

      if (!el.dataset.state || el.dataset.state === "monthly") {
        el.innerText = yearly;
        el.dataset.state = "yearly";
      } else {
        el.innerText = monthly;
        el.dataset.state = "monthly";
      }
    });
  };

  // =========================
  // SCROLL REVEAL ANIMATION
  // =========================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  // =========================
  // MOBILE MENU TOGGLE (future navbar support)
  // =========================
  window.toggleMenu = function () {
    const menu = document.querySelector(".mobile-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  };
});