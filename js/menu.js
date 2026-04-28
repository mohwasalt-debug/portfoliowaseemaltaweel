const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const cookieBanner = document.querySelector(".cookie-banner");
const cookieButton = document.querySelector("[data-cookie-accept]");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.getAttribute("data-open") === "true";
    navMenu.setAttribute("data-open", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}

if (cookieBanner && localStorage.getItem("portfolio-cookie-ok") === "true") {
  cookieBanner.setAttribute("data-hidden", "true");
}

if (cookieButton && cookieBanner) {
  cookieButton.addEventListener("click", () => {
    localStorage.setItem("portfolio-cookie-ok", "true");
    cookieBanner.setAttribute("data-hidden", "true");
  });
}
