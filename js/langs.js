const translations = {
  es: {
    title: "Mi sitio",
    greeting: "Bienvenido a mi sitio web",
    description: "Este es un ejemplo de cambio de idioma.",
    goToPage2: "Ir a la página 2",
    page2Title: "Página 2",
    page2Content: "Estás en la segunda página.",
    goToHome: "Volver al inicio"
  },
  en: {
    title: "My Website",
    greeting: "Welcome to my website",
    description: "This is a language switching example.",
    goToPage2: "Go to Page 2",
    page2Title: "Page 2",
    page2Content: "You are on the second page.",
    goToHome: "Back to Home"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const toggleBtn = document.getElementById("languageToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "es" ? "🌐 English" : "🌐 Español";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("lang") || "es";
  setLanguage(currentLang);

  const toggleBtn = document.getElementById("languageToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newLang = localStorage.getItem("lang") === "es" ? "en" : "es";
      setLanguage(newLang);
    });
  }
});
