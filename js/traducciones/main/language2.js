document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Currículum",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Currículum",
        bod1: "Formación Académica",
        bod2: "Grado en Ingeniería Industrial – Universidad Politécnica de Madrid (2017 – 2025)",
        bod3: "Máster en Automatización y Robótica – Universidad de Stuttgart (2025 – 2026)",
        bod4: "Experiencia Profesional",
        bod5: "Ingeniero de Automatización – Siemens AG (2021 – Actualidad)",
        bod6: "Técnico de Procesos Industriales – Repsol (2018 – 2019)",
        bod7: "Habilidades Técnicas",
        bod8: "Lenguajes",
        bod9: "Python, C++, HTML, CSS, VHDL",
        bod10: "Automatización",
        bod11: "PLCs, Controladores PID, sensores",
        bod12: "Robótica",
        bod13: "MATLAB, Simulink, Arduino (ESP32) y AVR, control cinemático y dinámico",
        bod14: "Idiomas",
        bod15: "Español",
        bod16: " Nativo",
        bod17: "Gallego",
        bod18: " Nativo",
        bod19: "Inglés",
        bod20: " B2",
        bod21: "Alemán",
        bod22: " A2",
        bod23: "Certificaciones (Enlaces)",
        bod24: "First Certificate in English Nivel B2",
        bod25: "Curso Avanzado de Python (Santander Open Academy)",
        bod26: "Introducción a HTML, CSS y JavaScript (IBM–Coursera)",
        bod27: "CS50: Introducción a la Informática (Harvard)",
        bod28: "Programa de Especialización: Machine Learning (Stanford–Coursera)",
        bod29: "Machine Learning con Python (IBM–Coursera)",
        bod30: "Certificado Profesional en Machine Learning (IBM–Coursera)",
        bod31: "CS50's Introducción a la Inteligencia Artificial con Python (Harvard)",
        bod32: "Uso de Python para la Investigación (Harvard)",
        bod33: "Ciencia de Datos: Machine Learning (Harvard)",
        bod35: "Ciencia de Datos 101 (IBM-Coursera)"

      },

      en: {
        title1:"Resume",
        nave1:"Home",
        nave2:"Resume",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Resume",
        bod1:"Education",
        bod2:"Bachelor’s Degree in Industrial Engineering – Polytechnic University of Madrid (2017 – 2025)",
        bod3:"Master’s Degree in Automation and Robotics – University of Stuttgart (2025 – 2026)",
        bod4:"Professional Experience",
        bod5:"Automation Engineer – Siemens AG (2021 – Present)",
        bod6:"Industrial Process Technician – Repsol (2018 – 2019)",
        bod7:"Technical Skills",
        bod8:"Languages",
        bod9:"Python, C++, HTML, CSS, VHDL",
        bod10:"Automation",
        bod11:"PLCs, PID Controllers, sensors",
        bod12:"Robotics",
        bod13:"MATLAB, Simulink, Arduino (ESP32) and AVR, kinematic and dynamic control",
        bod14:"Idiomas",
        bod15:"Spanish",
        bod16:" Native",
        bod17:"Galician",
        bod18:" Native",
        bod19:"English",
        bod20:" B2",
        bod21:"German",
        bod22:" A2",
        bod23:"Certifications (Links)",
        bod24:"First Certificate in English Level B2",
        bod25:"Advanced Python Course (Santander Open Academy)",
        bod26:"Introduction to HTML, CSS, and JavaScript (IBM–Coursera)",
        bod27:"CS50: Introduction to Computer Science (Harvard)",
        bod28:"Specialization Program: Machine Learning (Stanford–Coursera)",
        bod29:"Machine Learning with Python (IBM–Coursera)",
        bod30:"Professional Certificate in Machine Learning (IBM–Coursera)",
        bod31:"CS50's Introduction to Artificial Intelligence with Python (Harvard)",
        bod32:"Using Python for Research (Harvard)",
        bod33:"Data Science: Machine Learning (Harvard)",
        bod35:"Data Science 101 (IBM-Coursera)"

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

