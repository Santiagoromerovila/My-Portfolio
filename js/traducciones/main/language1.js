document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1:"Inicio",
        title2: "Ingeniero Industrial | Automatización y Sistemas Inteligentes | Python | C++ | Robótica",
        conec: "Conecta conmigo en LinkedIn",
          nave1: "Inicio",
          nave2: "Currículum",
          nave3: "Proyectos",
          nave4: "Trabajos",
          nave5: "Prensa",
          title3: "¡Bienvenido a mi espacio personal!",
          bod1: "Soy Santiago Romero Vila, estudiante de Ingeniería Industrial en la UPM, especializado en Automatización y Mecatrónica, con pasión por la robótica, los sistemas inteligentes y la innovación tecnológica.",
          bod2: "Desde el inicio de mi carrera he buscado activamente conectar la teoría con la práctica formando parte de proyectos prácticos como la construcción de prototipos robóticos funcionales utilizando control PID, sistemas embebidos y simulaciones en MATLAB/Simulink. Mi enfoque proactivo me ha permitido trabajar en desafíos complejos como control de movimiento en lazo cerrado, modelado cinemático e integración de múltiples sensores, siempre con el objetivo de desarrollar soluciones aplicables al mundo real.",
          bod3: "Más allá del laboratorio, he liderado y coordinado equipos de más de 70 personas en eventos de ingeniería y culturales a gran escala. También estoy desarrollando habilidades de programación en python mediante cursos online de Harvard e IBM, y fortaleciendo continuamente mi dominio de C++ y frameworks de automatización.",
          bod4: "Impulsado por la curiosidad y una mentalidad de pensamiento crítico, aspiro a contribuir a la transformación digital de la industria donde la robótica y la automatización se cruzan con las necesidades humanas y los retos globales.",
          bod5: "A través de este espacio comparto aprendizajes de mi camino por la ingeniería, la robótica y la innovación con propósito. Sientete libre de leer esta página y acompañarme a través de mi aprendizaje disfrutando de las lecturas y contenidos que he ido aprendiendo a lo largo de mi trayectoria."

      },

      en: {
        title1:"Home",
        title2: "Industrial Engineer | Automation & Intelligent Systems | Python | C++ | Robotics",
        conec: "Connect with me on LinkedIn",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Welcome to my personal space!",
        bod1: "I’m Santiago Romero Vila, an Industrial Engineering student at UPM specializing in Automation and Mechatronics, with a passion for robotics, intelligent systems, and technological innovation.",
        bod2: "Since the beginning of my studies, I have actively sought to bridge theory and practice by participating in hands-on projects such as building functional robotic prototypes using PID control, embedded systems, and MATLAB/Simulink simulations. My proactive approach has allowed me to work on complex challenges such as closed-loop motion control, kinematic modeling, and multi-sensor integration, always aiming to develop real-world solutions.",
        bod3: "Beyond the lab, I have led and coordinated teams of over 70 people in large-scale engineering and cultural events. I’m also developing programming skills in Python through online courses from Harvard and IBM, while continuously strengthening my expertise in C++ and automation frameworks.",
        bod4: "Driven by curiosity and a critical-thinking mindset, I aspire to contribute to the digital transformation of industry, where robotics and automation intersect with human needs and global challenges.",
        bod5: "Through this space, I share insights and lessons from my journey through engineering, robotics, and purpose-driven innovation. Feel free to explore this page and join me in this learning journey, enjoying the content and reflections I’ve gathered along the way."

        
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
