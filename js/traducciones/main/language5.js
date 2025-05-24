document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
         title1: "Prensa",
         nave1: "Inicio",
         nave2: "Currículum",
         nave3: "Proyectos",
         nave4: "Trabajos",
         nave5: "Prensa",
         title3: "Prensa",
         bod1: "Madridiario: Un AT-AT de Star Wars desfila por Ciudad Universitaria",
         bod2: "Este artículo de Madridiario cubre el proyecto de ingeniería galardonado que lideré en 2019 en el Colegio Mayor Moncloa, donde dirigí el diseño y la construcción de una réplica a escala real de un AT-AT como parte de un concurso local de Fallas. El proyecto destacó por su diseño modular innovador, la coordinación del equipo y la ejecución técnica — obteniendo finalmente el primer lugar y el reconocimiento de la Fundación Ingenio de la UPM."

      },

      en: {
        title1:"Press",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Press",
        bod1:"Madridiario: Un AT-AT de Star Wars desfila por Ciudad Universitaria",
        bod2:"This article by Madridiario covers the award-winning engineering project I led in 2019 at Colegio Mayor Moncloa, where I directed the design and construction of a life-size AT-AT replica as part of a local Falla competition. The project stood out for its innovative modular design, team coordination, and technical execution — ultimately earning first place and recognition from UPM's Fundación Ingenio."

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
    toggleBtn.innerHTML = lang === "es"
      ? '<img src="https://flagcdn.com/w40/gb.png" alt="English" class="image2">'
      : '<img src="https://flagcdn.com/w40/es.png" alt="Español" class="image2">';
  }
}


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
