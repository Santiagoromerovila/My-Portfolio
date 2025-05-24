document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Proyectos2",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Proyectos",
        bod1: "Construcción de un Recomendador Semántico de Libros: Aprovechando el PLN y la Similitud para una Lectura Personalizada",
        bod2: "El Recomendador Semántico de Libros es un proyecto de aprendizaje automático diseñado para ofrecer recomendaciones de lectura inteligentes y personalizadas, basadas en el contenido semántico de las preferencias del usuario y las descripciones de los libros. En lugar de depender de valoraciones o filtrado colaborativo, este sistema utiliza técnicas de Procesamiento del Lenguaje Natural (PLN) para captar el significado de los libros y las consultas del usuario, permitiendo recomendaciones más matizadas y flexibles.",
        bod3: "← Anterior"

      },

      en: {
        title1:"Projects2",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Projects",
        bod1:"Build a Semantic Book Recommender: Leveraging NLP and Similarity for Personalized Reading",
        bod2:"The Semantic Book Recommender is a machine learning project designed to provide intelligent and personalized book recommendations based on the semantic content of user preferences and book descriptions. Rather than relying on user ratings or collaborative filtering, this system uses Natural Language Processing (NLP) techniques to capture the meaning of books and user queries, enabling more nuanced and flexible recommendations.",
        bod3:"← Prev"


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
