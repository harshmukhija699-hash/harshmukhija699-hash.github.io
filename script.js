(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopBreakpoint = window.matchMedia("(min-width: 841px)");

  const setMenuState = (open) => {
    if (!navToggle || !navLinks) return;

    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open && !desktopBreakpoint.matches);
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navToggle?.getAttribute("aria-expanded") === "true" &&
      !navLinks?.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  desktopBreakpoint.addEventListener("change", (event) => {
    if (event.matches) setMenuState(false);
  });

  let scrollFrame = null;

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
    scrollFrame = null;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (scrollFrame === null) scrollFrame = window.requestAnimationFrame(updateHeader);
    },
    { passive: true }
  );

  updateHeader();

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navAnchors.forEach((anchor) => {
          const isCurrent = anchor.getAttribute("href") === `#${visible.target.id}`;
          anchor.classList.toggle("is-active", isCurrent);

          if (isCurrent) {
            anchor.setAttribute("aria-current", "location");
          } else {
            anchor.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 0.15, 0.4] }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.documentElement.classList.add("js");
})();
