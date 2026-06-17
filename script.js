const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuBackdrop = document.querySelector(".menu-backdrop");
const completeButton = document.querySelector("#completeChecklist");
const checklistItems = document.querySelectorAll(".checklist input");
const contactForm = document.querySelector(".contact-card");

if (menuToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
    if (menuBackdrop) {
      menuBackdrop.hidden = true;
    }
  };

  const openMenu = () => {
    mainNav.classList.add("is-open");
    menuToggle.classList.add("is-active");
    menuToggle.setAttribute("aria-expanded", "true");
    if (menuBackdrop) {
      menuBackdrop.hidden = false;
    }
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

if (completeButton) {
  completeButton.addEventListener("click", () => {
    checklistItems.forEach((item) => {
      item.checked = true;
    });
    completeButton.textContent = "Checklist completado";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = contactForm.querySelector("button");
    button.textContent = "Mensaje enviado";
  });
}
