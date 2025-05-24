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














      
      <script>
  let touchStartX = 0;
  let touchEndX = 0;

  function handleGesture() {
    const swipeDistance = touchEndX - touchStartX;

    // Ajusta el umbral según sea necesario
    const threshold = 50;

    if (swipeDistance > threshold) {
      goToPreviousPage(); // Deslizó a la derecha
    } else if (swipeDistance < -threshold) {
      goToNextPage(); // Deslizó a la izquierda
    }
  }

  function goToPreviousPage() {
    const pages = ['index.html', 'curriculum.html', 'proyectos.html', 'prensa.html'];
    const current = window.location.pathname.split('/').pop();
    const index = pages.indexOf(current);
    if (index > 0) {
      window.location.href = pages[index - 1];
    }
  }

  function goToNextPage() {
    const pages = ['index.html', 'curriculum.html', 'proyectos.html', 'prensa.html'];
    const current = window.location.pathname.split('/').pop();
    const index = pages.indexOf(current);
    if (index < pages.length - 1 && index !== -1) {
      window.location.href = pages[index + 1];
    }
  }

  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });
</script>
      setLanguage(newLang);
    });
  }
});
