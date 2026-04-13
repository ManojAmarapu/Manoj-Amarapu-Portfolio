// ===== Portfolio JavaScript =====
// All code runs after DOM is fully ready (module scripts are deferred by browser)

// ===== Create animated particles =====
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particle.style.width = Math.random() * 3 + 1 + "px";
    particle.style.height = particle.style.width;
    particlesContainer.appendChild(particle);
  }
}

// ===== Smooth scrolling for navigation =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close hamburger menu if open
        const navLinks = document.getElementById("nav-links");
        const hamburgerBtn = document.getElementById("hamburger-btn");
        navLinks.classList.remove("open");
        hamburgerBtn.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// ===== Header background on scroll =====
function initScrollHeader() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(12, 12, 12, 0.97)";
    } else {
      header.style.background = "rgba(12, 12, 12, 0.9)";
    }
  });
}

// ===== Hamburger menu toggle =====
function initHamburger() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// ===== Active nav highlight =====
function initActiveNav() {
  const sectionNavMap = {
    home: "nav-home",
    about: "nav-about",
    skills: "nav-skills",
    projects: "nav-projects",
    experience: "nav-experience",
    achievements: "nav-achievements",
    contact: "nav-contact",
  };

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".nav-links a")
            .forEach((a) => a.classList.remove("active"));
          const navId = sectionNavMap[entry.target.id];
          if (navId) {
            const activeLink = document.getElementById(navId);
            if (activeLink) activeLink.classList.add("active");
          }
        }
      });
    },
    { threshold: 0.35 },
  );

  document.querySelectorAll("section").forEach((section) => {
    activeObserver.observe(section);
  });
}

// ===== Scroll-triggered entry animations =====
function initScrollAnimations() {
  const animatedItems = document.querySelectorAll(
    ".fade-up, .slide-left, .slide-right, .scale-in",
  );

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || "0s";
          entry.target.style.animationDelay = delay;
          entry.target.classList.add("animate");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  animatedItems.forEach((item) => animationObserver.observe(item));
}

// ===== Initialize everything =====
// ES module scripts are deferred — DOM is guaranteed ready when this runs
createParticles();
initSmoothScroll();
initScrollHeader();
initHamburger();
initActiveNav();
initScrollAnimations();
