document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Web Personal",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Proyecto",
        bod1: "Diseño y Desarrollo de un Portafolio Web Personal Dinámico",
        bod2: "Este proyecto abarca el diseño, codificación y evolución de un sitio web personal desarrollado como plataforma profesional. Construido desde cero con HTML, CSS y JavaScript tras completar un curso de desarrollo web de IBM, este portafolio funciona como escaparate profesional y entorno de aprendizaje continuo. Incorpora buenas prácticas en accesibilidad, diseño responsive, experiencia de usuario y recientemente, traducción multilingüe dinámica con JavaScript.",
        bod3: "Introducción",
        bod4: "La presencia digital personal se ha convertido en una herramienta estratégica tanto para estudiantes como para profesionales. Más allá de plataformas como LinkedIn o GitHub, un sitio propio permite controlar totalmente el contenido, estilo visual y narrativa profesional.",
        bod5: "Este portafolio cumple un doble propósito:",
        bod6: "Escaparate profesional:",
        bod7: " Currículum, proyectos técnicos, experiencia laboral y logros.",
        bod8: "Entorno experimental:",
        bod9: " Para aplicar, adaptar, y practicar continuamente nuevas tecnologías de desarrollo y metodologías.",
        bod10: "Enfoque Tecnológico y de Aprendizaje",
        bod11: "El desarrollo comenzó tras completar un curso de IBM en HTML, CSS y JavaScript, donde se abordaron fundamentos como:",
        bod12: "Diseño responsivo.",
        bod13: "Mejores prácticas de accesibilidad.",
        bod14: "Separación entre estructura, estilo y funcionalidad.",
        bod15: "A partir de esa base, el sitio evolucionó con:",
        bod16: "Animaciones.",
        bod17: "Modo oscuro.",
        bod18: "Navegación intuitiva.",
        bod19: "Traducción multilingüe dinámica.",
        bod20: "Características Técnicas",
        bod21: "HTML Semántico",
        bod22: "Uso riguroso de etiquetas semánticas como <header>, <nav>, <section>, <main>, <footer> para mejorar la accesibilidad y el SEO. También se usan metaetiquetas relevantes para buscadores y redes sociales.",
        bod23: "Diseño Visual con CSS",
        bod24: "El diseño visual se gestiona con variables CSS (:root), permitiendo cambiar paletas completas de color fácilmente (modo claro/oscuro, fondo, texto, enlaces).",
        bod25: "Ejemplo de definición de tema:",
        bod26: "Modo Oscuro Dinámico",
        bod27: "Modo oscuro persistente usando JavaScript, que guarda preferencias del usuario en localStorage y cambia clases CSS en tiempo real.",
        bod28: "El botón 🌙 / ☀️ permite cambiar de modo sin recargar.",
        bod29: "Traducción Multilingüe Dinámica",
        bod30: "Sistema en JavaScript que traduce entre español e inglés usando claves data-key y objetos de traducción.",
        bod31: "Diseño Responsive",
        bod32: "Uso de media queries para adaptar el sitio a móviles, tabletas y pantallas grandes.",
        bod33: "Contenido Multimedia",
        bod34: "Cada proyecto incluye imágenes escalables, vídeos incrustados y código resaltado con highlight.js. También se integran iconos sociales interactivos.",
        bod35: "Buenas Prácticas y Recursos",
        bod36: "Se implementan prácticas modernas como:",
        bod37: "Enlaces accesibles y seguros (rel='noopener noreferrer').",
        bod38: "Compatibilidad multi-navegador.",
        bod39: "Estilos CSS reutilizables por sección.",
        bod40: "Estrategia de mantenimiento escalable: nuevas páginas se integran fácilmente con plantillas comunes.",
        bod41: "También se enlazan repositorios de GitHub, fomentando la transparencia técnica.",
        bod42: "Aprendizaje y Evolución",
        bod43: "Este proyecto ha reforzado mis conocimientos en desarrollo web. Aunque no sea mi campo profesional principal, sirve como base para proyectos centrados en IA y Big Data.",
        bod44: "Mentalidad estructurada en diseño UI/UX.",
        bod45: "Comprensión de arquitectura de sitios estáticos.",
        bod46: "Buenas prácticas en accesibilidad y usabilidad.",
        bod47: "Autonomía y gestión personal del aprendizaje.",
        bod48: "Cada funcionalidad nueva fue una oportunidad para aplicar y afianzar conceptos.",
        bod49: "Conclusión y Futuro",
        bod50: "Crear este portafolio fue una experiencia de consolidación y proyección: consolidación de lo aprendido, y proyección hacia mejoras futuras como:",
        bod51: "Integración con bases de datos (formulario de contacto, blog).",
        bod52: "Uso de frameworks como React o Bootstrap.",
        bod53: "Mejora de SEO y analítica web.",
        bod54: "Migración a CMS o backend ligero con Node.js.",
        bod55: "La pagina se encuentra en constante evolución, como mi carrera profesional.",
        bod56: "El código puede encontrarse en mi "

      },

      en: {
        title1: "Personal Web",
        nave1: "Home",
        nave2: "Resume",
        nave3: "Projects",
        nave4: "Jobs",
        nave5: "Press",
        title3: "Project",
        bod1: "Design and Development of a Dynamic Personal Web Portfolio",
        bod2: "This project involves the design, coding, and evolution of a personal website developed as a professional platform. Built from scratch using HTML, CSS, and JavaScript after completing an IBM web development course, this portfolio serves as both a professional showcase and a continuous learning space. It incorporates best practices in accessibility, responsive design, user experience, and more recently, dynamic multilingual translation with JavaScript.",
        bod3: "Introduction",
        bod4: "Personal digital presence has become a strategic tool for both students and professionals. Beyond platforms like LinkedIn or GitHub, a personal website allows full control over content, visual style, and professional narrative.",
        bod5: "This portfolio serves a dual purpose:",
        bod6: "Professional showcase:",
        bod7: " Resume, technical projects, work experience, and achievements.",
        bod8: "Experimental environment:",
        bod9: " To apply, adapt, and continually practice new development technologies and methodologies.",
        bod10: "Technological and Learning Approach",
        bod11: "Development began after completing an IBM course on HTML, CSS, and JavaScript, covering fundamentals such as:",
        bod12: "Responsive design.",
        bod13: "Best practices in accessibility.",
        bod14: "Separation of structure, style, and functionality.",
        bod15: "From that foundation, the site evolved with:",
        bod16: "Animations.",
        bod17: "Dark mode.",
        bod18: "Intuitive navigation.",
        bod19: "Dynamic multilingual translation.",
        bod20: "Technical Features",
        bod21: "Semantic HTML",
        bod22: "A rigorous use of semantic tags like <header>, <nav>, <section>, <main>, <footer> was implemented to improve accessibility and optimize SEO. Relevant meta tags are also used for search engines and social media.",
        bod23: "Visual Design with CSS",
        bod24: "The visual design is centralized using CSS variables (:root), allowing easy switching of full color palettes (light/dark mode, backgrounds, text and link colors).",
        bod25: "Example of theme definition:",
        bod26: "Dynamic Dark Mode",
        bod27: "One JavaScript-powered feature is persistent dark mode, which stores user preferences in localStorage and updates CSS classes in real time.",
        bod28: "The 🌙 / ☀️ toggle button allows users to switch modes without reloading the page.",
        bod29: "Dynamic Multilingual Translation",
        bod30: "JavaScript system translating between Spanish and English using data-key attributes and translation objects.",
        bod31: "Responsive Design",
        bod32: "Through media queries, the site adapts properly to mobile, tablet, and large-screen devices.",
        bod33: "Multimedia and Visual Content",
        bod34: "Each project includes scalable images, embedded videos, and highlighted code using highlight.js. Interactive social media icons are also integrated.",
        bod35: "Resource Integration and Best Practices",
        bod36: "Modern practices implemented include:",
        bod37: "Accessible and secure links (rel='noopener noreferrer').",
        bod38: "Multi-browser compatibility.",
        bod39: "Reusable CSS styles organized by section.",
        bod40: "Scalable maintenance strategy: new pages can be easily integrated using shared templates.",
        bod41: "Relevant GitHub repositories are also linked, encouraging technical transparency.",
        bod42: "Learning and Evolution",
        bod43: "This project has been key in strengthening my web development skills. While not my primary career path, it provides a strong foundation for future AI and Big Data projects.",
        bod44: "Structured mindset in UI/UX design.",
        bod45: "Understanding of static website architecture.",
        bod46: "Best practices in accessibility and usability.",
        bod47: "Self-management and autonomous learning.",
        bod48: "Each new feature was a chance to apply and reinforce concepts.",
        bod49: "Conclusion and Future Work",
        bod50: "Creating this portfolio was an experience of consolidation and projection: applying what I learned and envisioning improvements such as:",
        bod51: "Database integration (e.g., contact forms, blog).",
        bod52: "Use of frameworks like React or Bootstrap.",
        bod53: "Improved SEO and web analytics.",
        bod54: "Migration to CMS or lightweight backend with Node.js.",
        bod55: "The site remains alive, constantly evolving, just like my career.",
        bod56: "The code can be found in my "


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
