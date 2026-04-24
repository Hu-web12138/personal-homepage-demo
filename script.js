const progressBar = document.querySelector(".page-progress span");
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll <= 0 ? 0 : (window.scrollY / maxScroll) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateActiveNav() {
  let current = null;
  sections.forEach((section) => {
    if (section.offsetTop <= window.scrollY + 180) {
      current = section;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveNav();
}, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

document.querySelector(".copy-email")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const email = button.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = "已复制邮箱";
    window.setTimeout(() => {
      button.textContent = "复制邮箱";
    }, 1600);
  } catch {
    button.textContent = email;
  }
});

updateProgress();
updateActiveNav();
