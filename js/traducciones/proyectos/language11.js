document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Proyecto Falla AT-AT",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Proyecto",
        bod1: "Proyecto Falla AT-AT",
        bod2: "En febrero de 2019 lideré un proyecto multidisciplinar que combinaba creatividad, ingeniería y gestión de equipos: el diseño y construcción de una estructura temporal inspirada en un AT-AT de Star Wars para el concurso anual de Fallas del Colegio Mayor Moncloa. Este concurso interno requería que los estudiantes presentaran propuestas completas, incluyendo planos técnicos, esquemas logísticos y estudios de viabilidad. Mi proyecto fue seleccionado como ganador entre cuatro propuestas.",
        bod3: "Asumí la responsabilidad total del proyecto, supervisando todas las fases: conceptualización, modelado 3D, planificación, logística, construcción y presentación final. Utilicé Solid Edge para diseñar una estructura modular que pudiera construirse de forma eficiente y transportarse fácilmente según las limitaciones del espacio. Este enfoque modular también permitió delegar tareas y optimizar el uso de materiales disponibles.",
        bod4: "Principales retos enfrentados:",
        bod5: "Diseño estructural realista con materiales limitados:",
        bod6: " La estructura debía ser fiel visualmente al AT-AT usando materiales accesibles como madera, cartón pluma, adhesivos y pintura. El mayor desafío técnico fue garantizar la estabilidad estructural a pesar de un centro de gravedad elevado y patas estrechas, lo cual requirió cálculos precisos y pruebas de resistencia.",
        bod7: "Gestión de un equipo grande y diverso:",
        bod8: "Lideré un equipo de más de 70 personas con diferentes perfiles, habilidades y disponibilidades. Fue esencial establecer una estructura clara de tareas, motivar a los participantes y gestionar conflictos interpersonales asegurando calidad y compromiso.",
        bod9: "Plazos ajustados y complejidad logística:",
        bod10: "El equipo tenía poco más de un mes para completar toda la construcción. Elaboré un plan semanal detallado, organicé turnos rotativos, gestioné la compra de materiales con un presupuesto limitado y supervisé directamente tareas críticas para cumplir con los tiempos.",
        bod11: "Validación técnica externa:",
        bod12: "El proyecto fue evaluado por la Cátedra Fundación Ingenio (UPM), que revisó el proceso completo siguiendo la metodología IPMA (International Project Management Association). El proyecto obtuvo una puntuación final de 141 sobre 160, una de las más altas de ese año, y recibí certificación oficial por liderazgo y ejecución.",
        bod13: "Habilidades y competencias desarrolladas:",
        bod14: "Liderazgo y coordinación de equipos multidisciplinares.",
        bod15: "Gestión de proyectos: planificación, ejecución, control de calidad y entrega.",
        bod16: "Diseño asistido por computadora (Solid Edge)",
        bod17: " y resolución espacial de problemas.",
        bod18: "Resolución creativa de problemas bajo presión.",
        bod19: "Comunicación efectiva",
        bod20: " tanto con públicos técnicos como con los miembros del equipo.",
        bod21: "Innovación y creatividad aplicada",
        bod22: "en contextos técnicos y logísticos.",
        bod23: "Pensamiento analítico y toma de decisiones rápidas.",
        bod24: "El proyecto culminó en la tradicional cremà del 23 de marzo y fue ampliamente celebrado en la comunidad colegial. Esta experiencia marcó un punto de inflexión en mi desarrollo profesional, reforzando mi pasión por la ingeniería, el liderazgo de proyectos y la resolución de problemas reales.",
        bod25: "Gracias a",
        bod26: " Jose Antonio Márquez y Luis Castaño ",
        bod27: "por su ayuda en la gestión del proyecto, sin ellos esto no habría sido posible.",
        bod28: "Cartel",
        bod29: "Cartel del evento",
        bod30: "Conceptualización",
        bod31: "Boceto",
        bod32: "Digitalización",
        bod33: "Modelado 3D",
        bod34: "Proceso de Construcción",
        bod35: "Construcción",
        bod36: "Detalles",
        bod37: "Proceso de construcción modular",
        bod38: "Detalles finales",
        bod39: "Resultados",
        bod40: "Parte del Equipo",
        bod41: "Evento",
        bod42: "Documentos"


      },

      en: {
        title1:"AT-AT Falla Project",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Project",
        bod1:"AT-AT Falla Project",
        bod2:"In February 2019, I led a multidisciplinary project that combined creativity, engineering, and team management: the design and construction of a temporary structure inspired by a Star Wars AT-AT for the Colegio Mayor Moncloa's annual Falla competition. This internal contest required students to submit fully developed proposals, including technical drawings, logistics plans, and feasibility studies. My project was selected as the winner from among four competing submissions.",
        bod3:"I assumed full responsibility for the project, overseeing all phases: conceptualization, 3D modeling, planning, logistics, construction, and final presentation. I used Solid Edge to design a modular structure that could be built efficiently and transported easily within the constraints of the site. This modular approach also allowed for task delegation and better use of available materials.",
        bod4:"Key challenges faced:",
        bod5:"Realistic structural design with limited materials:",
        bod6:" The structure needed to be visually faithful to the AT-AT while using accessible materials such as wood, foam board, adhesives, and paint. The biggest technical challenge was ensuring structural stability despite a high center of gravity and narrow supporting legs, which required accurate calculations and stress testing.",
        bod7:"Managing a large and diverse team:",
        bod8:" I led a team of over 70 people with varying backgrounds, skills, and availability. It was essential to establish a clear task structure, motivate participants, and handle interpersonal conflicts while ensuring work quality and commitment.",
        bod9:"Tight deadlines and logistical complexity:",
        bod10:"The team had just over a month to complete the entire build. I developed a detailed weekly plan, organized rotating work shifts, managed material procurement under a limited budget, and directly supervised critical tasks to stay on schedule.",
        bod11:"External technical validation:",
        bod12:"The project was reviewed and scored by the Fundación Ingenio Chair (UPM), which evaluated the entire process using the IPMA (International Project Management Association) methodology. The project achieved a final score of 141 out of 160, one of the highest that year, and I received official certification for team leadership and execution.",
        bod13:"Skills and competencies developed:",
        bod14:"Leadership and coordination of multidisciplinary teams.",
        bod15:"Project management: planning, execution, quality control, and delivery.",
        bod16:"Computer-aided design (Solid Edge) ",
        bod17:"and spatial problem-solving.",
        bod18:"Creative problem-solving under pressure.",
        bod19:"Effective communication ",
        bod20:"with both technical audiences and team members.",
        bod21:"Innovation and applied creativity",
        bod22:" in technical and logistical settings.",
        bod23:"Analytical thinking and fast decision-making.",
        bod24:"The project culminated in the traditional cremà event on March 23 and was widely celebrated within the college community. This experience marked a turning point in my professional growth, reinforcing my passion for engineering, project leadership, and real-world problem-solving. ",
        bod25:"Thanks to",
        bod26:" Jose Antonio Márquez and Luis Castaño ",
        bod27:"  for their help in the management of the project, without them this project would not have been possible.",
        bod28:"Banner",
        bod29:"Event banner",
        bod30:"Conceptualization",
        bod31:"sketch",
        bod32:"Digitization",
        bod33:"3D modeling",
        bod34:"Building Process",
        bod35:"Construction",
        bod36:"Details",
        bod37:"Module construction process",
        bod38:"Final details",
        bod39:"Results",
        bod40:"Part of the Team",
        bod41:"Event",
        bod42:"Documents"


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
