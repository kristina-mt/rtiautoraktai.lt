console.log("Script loaded!");

// Pašto paslaugos vertimas
function updatePostalService(lang) {
  const section = document.getElementById("postalService");
  if (section && translations[lang]?.postalService) {
    section.innerHTML = translations[lang].postalService;
  }
}

// Kalbos perjungimas
function switchLang(lang) {
  document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-switcher button[onclick="switchLang('${lang}')"]`)?.classList.add('active');
  localStorage.setItem("siteLang", lang);
  translatePage(lang);
}

// Vertimas visiems tekstams
function translatePage(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  // Formos placeholderiai
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const sendBtn = document.querySelector('[data-i18n="send-button"]');

  if (nameInput) nameInput.placeholder = t.name;
  if (emailInput) emailInput.placeholder = t.email;
  if (messageInput) messageInput.placeholder = t.message;
  if (sendBtn) sendBtn.textContent = t["send-button"];

  updatePostalService(lang);
}

// Pagrindinis skriptas po DOM užkrovimo
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || navigator.language.slice(0, 2);
  const lang = ["en", "lt", "ru", "pl"].includes(savedLang) ? savedLang : "en";

  translatePage(lang);
  document.querySelector(`.lang-switcher button[onclick="switchLang('${lang}')"]`)?.classList.add("active");

  const t = translations[lang];
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", e => {
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');

      const nameError = form.querySelector('[data-error-for="name"]');
      const emailError = form.querySelector('[data-error-for="email"]');
      const messageError = form.querySelector('[data-error-for="message"]');

      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (messageError) messageError.textContent = "";

      let hasError = false;

      if (!name.value.trim()) {
        if (nameError) nameError.textContent = t.required;
        hasError = true;
      }

      if (!email.value.trim()) {
        if (emailError) emailError.textContent = t.required;
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        if (emailError) emailError.textContent = t.invalidEmail;
        hasError = true;
      }

      if (!message.value.trim()) {
        if (messageError) messageError.textContent = t.required;
        hasError = true;
      }

      if (hasError) {
        e.preventDefault();
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Tikslus active section nustatymas
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSection = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});


  // Pridėti datą į paslėptą lauką
  const now = new Date().toLocaleString("en-GB");
  const hiddenDate = document.getElementById("submitted-at");
  if (hiddenDate) hiddenDate.value = now;

  // Back to Top mygtukas
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  }
  const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
document.querySelectorAll("[data-i18n-aria]").forEach(el => {
  const ariaKey = el.getAttribute("data-i18n-aria");
  if (t[ariaKey]) el.setAttribute("aria-label", t[ariaKey]);
});


  
  // Sekcijų animacija su IntersectionObserver
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});

