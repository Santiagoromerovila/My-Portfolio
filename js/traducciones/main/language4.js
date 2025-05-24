document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1:"Trabajos",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Trabajos",
        bod1:"Ingeniero de Automatización - Siemens AG (2021 - Presente)",
        bod2:"Responsable del diseño y puesta en marcha de sistemas de automatización industrial a gran escala, con énfasis en la eficiencia energética y la fiabilidad de los procesos. Lideré el desarrollo de soluciones SCADA avanzadas para líneas de producción críticas.",
        bod3:"Resultados:",
        bod4:"Reducción de tiempos de parada en un 20% mediante automatización de procesos clave.",
        bod5:"Integración de nuevas tecnologías IoT en entornos industriales existentes.",
        bod6:"Consultor Técnico de Energía - Freelance (2020 - 2021)",
        bod7:"Resultados:",
        bod8:"Asesoramiento para pequeñas industrias en la optimización del uso de la energía mediante soluciones sostenibles y automatizadas. Elaboración de estudios energéticos y propuestas de implementación tecnológica.",
        bod9:"Implementación de soluciones que ahorraron hasta un 18% en consumo energético anual.",
        bod10:"Desarrollo de informes técnicos con análisis de retorno de inversión (ROI).",
        bod11:"Prácticas en Procesos Industriales - Repsol (2018 - 2019)",
        bod12:"Apoyo en la mejora continua de procesos en instalaciones industriales. Trabajo en campo con sensores inteligentes, recolección de datos y propuesta de mejoras técnicas para la producción.",
        bod13:"Resultados:",
        bod14:"Desarrollo de dashboards internos para monitoreo de parámetros de proceso.",
        bod15:"Contribución al desarrollo de mantenimiento predictivo basado en datos."
      },

      en: {
        title1: "Jobs",
        nave1: "Home",
        nave2: "Curriculum",
        nave3: "Projects",
        nave4: "Jobs",
        nave5: "Press",
        title3: "Jobs",
        bod1: "Automation Engineer – Siemens AG (2021 – Present)",
        bod2: "Responsible for the design and commissioning of large-scale industrial automation systems, with a focus on energy efficiency and process reliability. Led the development of advanced SCADA solutions for critical production lines.",
        bod3: "Outcomes:",
        bod4: "Reduced downtime by 20% through automation of key processes.",
        bod5: "Integrated new IoT technologies into existing industrial environments.",
        bod6: "Energy Technical Consultant – Freelance (2020 – 2021)",
        bod7: "Outcomes:",
        bod8: "Consulting for small industries on optimizing energy use through sustainable and automated solutions. Development of energy studies and proposals for technological implementation.",
        bod9: "Implemented solutions that achieved up to 18% annual energy savings.",
        bod10: "Developed technical reports including return on investment (ROI) analyses.",
        bod11: "Industrial Process Intern – Repsol (2018 – 2019)",
        bod12: "Assisted in continuous improvement processes at industrial facilities. Conducted fieldwork with smart sensors, data collection, and proposed technical enhancements for production.",
        bod13: "Outcomes:",
        bod14: "Developed internal dashboards for monitoring process parameters.",
        bod15: "Contributed to the development of data-driven predictive maintenance strategies."

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
