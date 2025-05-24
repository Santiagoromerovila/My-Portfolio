document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Semantic Book Recommender Project",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Experiencia",
        nave5: "Prensa",
        title3: "Proyecto",
        bod1: "Desarrollo de un Recomendador Semántico de Libros: Aplicando PLN ",
        bod2: "El Recomendador Semántico de Libros es un proyecto de aprendizaje automático diseñado para ofrecer recomendaciones inteligentes y personalizadas de libros, basadas en el contenido semántico de las preferencias del usuario y las descripciones de los libros. En lugar de basarse en valoraciones de usuarios o filtrado colaborativo, este sistema utiliza técnicas de Procesamiento de Lenguaje Natural (PLN) para captar el significado de los libros y de las consultas del usuario, permitiendo recomendaciones más matizadas y flexibles.",
        bod3: "Construido usando Python y bibliotecas populares de PLN, este proyecto muestra la aplicación práctica de TF-IDF, embeddings de palabras y similitud del coseno en un escenario del mundo real, ofreciendo un sistema que va más allá de la coincidencia de palabras clave tradicional.",
        bod4: "Motivación",
        bod5: "Los sistemas de recomendación tradicionales (como los usados en comercio electrónico o streaming) suelen basarse en filtrado colaborativo —sugerir ítems según el comportamiento de otros usuarios. Sin embargo, estos sistemas presentan dificultades cuando:",
        bod6: "No existe historial de interacción del usuario ",
        bod7: "(problema de arranque en frío).",
        bod8: "El conjunto de datos es escaso o desequilibrado.",
        bod9: "El objetivo es la alineación semántica ",
        bod10: "más que la popularidad.",
        bod11: "Enfoque Tecnológico y Formación",
        bod12: "El desarrollo del sitio comenzó tras completar un curso de fundamentos de HTML, CSS y JavaScript ofrecido por IBM. Este curso proporcionó las bases para entender la estructura semántica de una página web, la separación entre contenido (HTML) y presentación (CSS), así como principios clave como:",
        bod13: "Diseño responsive.",
        bod14: "Buenas prácticas de accesibilidad.",
        bod15: "Separación lógica entre estructura, estilo y funcionalidad.",
        bod16: "Este proyecto busca resolver estos problemas usando filtrado basado en contenido, centrado especialmente en las descripciones textuales de los libros.",
        bod17: "Conjunto de Datos",
        bod18: "El dataset utilizado incluye: ",
        bod19: "Título: ",
        bod20: "El nombre del libro.",
        bod21: "Autor",
        bod22: "Género",
        bod23: " o etiquetas",
        bod24: "Descripción: ",
        bod25: "Un breve resumen del contenido del libro.",
        bod26: "Prensa:",
        bod27: "Apariciones en medios o eventos destacados.",
        bod28: "Ejemplo de fuente: [API de Goodreads], [Datasets de libros en Kaggle], o archivos JSON/CSV curados manualmente.",
        bod29: "Proceso del Proyecto",
        bod30: "Preprocesamiento de Descripciones de Libros",
        bod31: "Limpieza y preparación de las descripciones usando técnicas estándar de PLN:",
        bod32: "PÁGINA EN DESARROLLO",
        bod33:"y Similitud para una Lectura Personalizada"

      },

      en: {
        title1:"Semantic Book Recommender Project",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Project",
        bod1:"Build a Semantic Book Recommender: Leveraging NLP and Similarity",
        bod2:"The Semantic Book Recommender is a machine learning project designed to provide intelligent and personalized book recommendations based on the semantic content of user preferences and book descriptions. Rather than relying on user ratings or collaborative filtering, this system uses Natural Language Processing (NLP) techniques to capture the meaning of books and user queries, enabling more nuanced and flexible recommendations.",
        bod3:"Built using Python and popular NLP libraries, this project showcases the practical application of TF-IDF, word embeddings, and cosine similarity in a real-world scenario, delivering a system that goes beyond traditional keyword matching.",
        bod4:"Motivation",
        bod5:"Traditional recommendation systems (like those used in e-commerce or streaming) often rely on collaborative filtering—suggesting items based on the behavior of other users. However, such systems struggle when:",
        bod6:"There’s no user interaction history ",
        bod7:"(cold start problem).",
        bod8:"The dataset is sparse or unbalanced.",
        bod9:"The goal is semantic alignment",
        bod10:" rather than popularity.",
        bod11:"Training and Technological Approach",
        bod12:"The website development began after completing a foundational HTML, CSS, and JavaScript course offered by IBM. This course provided the fundamentals for understanding the semantic structure of a web page, the separation of content (HTML) and presentation (CSS), as well as key principles such as:",
        bod13:"Responsive design.",
        bod14:"Best practices in accessibility.",
        bod15:"Logical separation between structure, style, and functionality.",
        bod16:"This project aims to solve these issues by using content-based filtering, particularly focusing on the textual descriptions of books.",
        bod17:"Dataset",
        bod18:"The dataset used includes: ",
        bod19:"Title: ",
        bod20:"The name of the book.",
        bod21:"Author",
        bod22:"Genre",
        bod23:" or tags",
        bod24:"Description: ",
        bod25:"A short summary of the book's content.",
        bod26:"Press:",
        bod27:"Media appearances or featured events.",
        bod28:"Example source: [Goodreads API], [Kaggle book datasets], or manually curated JSON/CSV files.",
        bod29:"Project Pipeline",
        bod30:"Preprocessing Book Descriptions",
        bod31:"Clean and prepare book descriptions using standard NLP techniques:",
        bod32:" PAGE IN DEVELOPMENT",
        bod33:"for Personalized Reading"

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
