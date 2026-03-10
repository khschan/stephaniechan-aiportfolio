// ============================================
//  MAIN.JS — Portfolio Interactions
// ============================================

(function () {
  "use strict";

  // ─── NAV: Scroll + Mobile Toggle ──────────────
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }, { passive: true });

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

  // ─── SCROLL REVEAL via Intersection Observer ──
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach(function (el, i) {
    // Stagger siblings within the same parent
    el.style.transitionDelay = (i % 4) * 0.1 + "s";
    revealObserver.observe(el);
  });

  // Override stagger for project cards to keep their own delays
  document.querySelectorAll(".project-card.reveal").forEach(function (card) {
    const index = parseInt(card.getAttribute("data-index"), 10) || 0;
    card.style.transitionDelay = index * 0.08 + "s";
  });

  // ─── SMOOTH SCROLL for anchor links ───────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height buffer
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });

})();
