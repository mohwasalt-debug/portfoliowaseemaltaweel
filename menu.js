const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
  });
}

const cookieKey = "waseem-portfolio-cookie-choice";

function closeCookieBanner(choice) {
  localStorage.setItem(cookieKey, choice);
  document.querySelector(".cookie-popup")?.remove();
}

if (!localStorage.getItem(cookieKey)) {
  const banner = document.createElement("aside");
  banner.className = "cookie-popup";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Préférences cookies");
  banner.innerHTML = `
    <button class="cookie-close" type="button" aria-label="Fermer">×</button>
    <p><strong>Cookies</strong></p>
    <p>Ce portfolio n'utilise pas de cookies publicitaires. Le choix est seulement mémorisé dans ce navigateur.</p>
    <div class="cookie-actions">
      <button class="btn" type="button" data-cookie-choice="accepted">Accepter</button>
      <button class="btn secondary" type="button" data-cookie-choice="refused">Refuser</button>
    </div>
  `;
  document.body.appendChild(banner);

  banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => closeCookieBanner(button.dataset.cookieChoice));
  });

  banner.querySelector(".cookie-close").addEventListener("click", () => closeCookieBanner("closed"));
}
