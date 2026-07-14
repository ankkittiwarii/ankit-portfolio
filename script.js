// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

// Close menu on click

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});

// =========================================
// STICKY NAVBAR
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(15,23,42,.90)";

    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.30)";
  } else {
    header.style.background = "rgba(15,23,42,.75)";

    header.style.boxShadow = "none";
  }
});

// =========================================
// SCROLL PROGRESS BAR
// =========================================

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progressHeight = (window.scrollY / totalHeight) * 100;

  progress.style.width = progressHeight + "%";
});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const topBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// =========================================
// SCROLL REVEAL
// =========================================

const reveals = document.querySelectorAll(
  ".card,.skill-card,.project-card,.certificate-card,.contact-card",
);

function revealElements() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;

    const top = item.getBoundingClientRect().top;

    if (top < windowHeight - 120) {
      item.classList.add("show");

      item.classList.add("fade-up");
    }
  });
}

window.addEventListener("scroll", revealElements);

revealElements();

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =========================================
// SMOOTH APPEAR HERO
// =========================================

window.addEventListener("load", () => {
  document.querySelector(".hero-content").style.opacity = "1";

  document.querySelector(".hero-content").style.transform = "translateY(0)";

  document.querySelector(".hero-image").style.opacity = "1";

  document.querySelector(".hero-image").style.transform = "translateY(0)";
});

// =========================================
// TYPING ANIMATION
// =========================================

const typingElement = document.querySelector(".hero h2");

const words = [
  "Aspiring Data Analyst",
  "Power BI Developer",
  "SQL Enthusiast",
  "Excel Specialist",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      isDeleting = true;

      setTimeout(typingEffect, 1200);

      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typingEffect, isDeleting ? 40 : 90);
}

typingEffect();

// =========================================
// PARALLAX EFFECT
// =========================================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 45;

  let y = (window.innerHeight / 2 - e.pageY) / 45;

  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// =========================================
// COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });
});

// =========================================
// IMAGE TILT EFFECT
// =========================================

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;

    const rotateX = (0.5 - y / rect.height) * 12;

    card.style.transform = `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-12px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});

// =========================================
// PRELOADER REMOVE
// =========================================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 600);
  }
});

// =========================================
// CONSOLE MESSAGE
// =========================================

console.log(
  "%cPortfolio Developed by Ankit Tiwari",
  "color:#3b82f6;font-size:18px;font-weight:bold;",
);
