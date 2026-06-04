const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const completeButton = document.querySelector("#completeChecklist");
const checklistItems = document.querySelectorAll(".checklist input");
const contactForm = document.querySelector(".contact-card");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
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
