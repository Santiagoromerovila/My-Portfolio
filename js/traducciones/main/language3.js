document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1:"Proyectos",
          nave1: "Inicio",
          nave2: "Currículum",
          nave3: "Proyectos",
          nave4: "Trabajos",
          nave5: "Prensa",
          title3: "Proyectos",
          bod1: "Diseño y Desarrollo de un Portafolio Web Personal Dinámico",
          bod2: "Este proyecto consiste en el diseño, codificación y evolución de una página web personal tipo portafolio, desarrollada como plataforma profesional. El sitio fue construido desde cero utilizando HTML, CSS y JavaScript tras completar un curso introductorio de desarrollo web ofrecido por IBM en Coursera. Esta web sirve tanto como escaparate profesional como entorno de aprendizaje continuo, aplicando conceptos clave de accesibilidad, diseño adaptable, gestión de interfaces y experiencia de usuario.",
          bod3: "Desarrollo de Sistemas Embebidos con AVR-C y ATmega640",
          bod4: "Desarrollé un sistema embebido en C y ensamblador para controlar un túnel de lavado totalmente automatizado usando un microcontrolador ATmega640. El sistema coordina motores, sensores, rodillos, secadores, una barrera de entrada y un semáforo mediante una máquina de estados y temporizadores. Implementé PWM, anti-rebote (debouncing) y detección de marcha atrás, y utilicé un depurador AVR Dragon para pruebas en tiempo real. El proyecto exigió control preciso, gestión de seguridad y sincronización de múltiples componentes mecánicos, consolidando mis habilidades en programación de microcontroladores, electrónica digital y diseño de sistemas en tiempo real.",
          bod5: "Diseño y Control de un Brazo Robótico de Tres Grados de Libertad con Interfaz en MATLAB y Control PID sobre ESP32",
          bod6: "Se diseñó y controló un brazo robótico de tres grados de libertad usando un ESP32 y una interfaz gráfica desarrollada en MATLAB. El sistema utiliza un motor paso a paso y dos motores DC con encoders, todos controlados mediante algoritmos PID en tiempo real. Las trayectorias se calculan en MATLAB mediante cinemática inversa y se envían como comandos al microcontrolador. La aplicación permite visualizar la trayectoria deseada frente a la real e incluye análisis de errores. El sistema logra un control preciso integrando electrónica, programación embebida y modelado cinemático.",
          bod7: "Desarrollo de Videojuego con OpenGL y C++",
          bod8: "Desarrollé un clon de Space Invaders utilizando C++ y OpenGL como parte de un proyecto académico. Fue mi primera experiencia con programación gráfica y OpenGL. Aplicamos programación orientada a objetos para estructurar el juego, lo que me ayudó a consolidar conceptos clave y obtener experiencia práctica en desarrollo de software interactivo.",
          bod9: "Gestión de Personal y Ejecución del Proyecto de la Falla AT-AT (All Terrain Armored Transport)",
          bod10: "Lideré un proyecto multidisciplinar que combinaba creatividad, ingeniería y gestión de equipos: el diseño y construcción de una estructura temporal inspirada en un AT-AT de Star Wars para el concurso anual de fallas del Colegio Mayor Moncloa. Este concurso interno requería que los estudiantes presentaran propuestas completas, incluyendo planos técnicos, esquemas logísticos y estudios de viabilidad. Mi proyecto fue seleccionado como ganador entre cuatro propuestas competidoras.",
          bod11: "Siguiente →"
      },

      en: {
        title1:"Projects",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Projects",
        bod1:"Design and Development of a Dynamic Personal Web Portfolio",
        bod2:"This project involves the design, coding, and evolution of a personal portfolio website developed as a professional platform. The site was built from scratch using HTML, CSS, and JavaScript after completing an introductory web development course offered by IBM on Coursera. This website serves both as a professional showcase and a continuous learning environment, applying key concepts in accessibility, responsive design, interface management, and user experience.",
        bod3:"Embedded Systems Development with AVR-C and ATmega640",
        bod4:"I developed an embedded system in C and assembly to control a fully automated car wash using an ATmega640 microcontroller. The system coordinates motors,sensors, rollers, dryers, an entry barrier, and a traffic light through a state machine and timers. I implemented PWM, debouncing, and reverse detection, and used an AVR Dragon debugger for real-time testing. The project required precise control, safety management, and synchronization of multiple mechanical components, consolidating my skills in microcontroller programming, digital electronics, and real-time system design.",
        bod5:"Design and Control of a Three Degrees of Freedom Robotic Arm with MATLAB Interface and PID Control on ESP32",
        bod6:"A three-degrees-of-freedom robotic arm was designed and controlled using an ESP32 and a graphical interface developed in MATLAB. The system uses one stepper motor and two DC motors with encoders, all controlled by real-time PID algorithms. Trajectories are calculated in MATLAB using inverse kinematics and sent as commands to the microcontroller. The application allows visualization of the desired versus actual trajectory and includes error analysis. The system achieves precise control by integrating electronics, embedded programming, and kinematic modeling.",
        bod7:"Game Development with OpenGL and C++",
        bod8:"I developed a Space Invaders clone using C++ and OpenGL as part of an academic project. It was my first experience with graphics programming and OpenGL. We applied object-oriented programming to structure the game, which helped me solidify key concepts and gain practical experience in interactive software development.",
        bod9:"Personnel Management and Execution of the AT-AT Falla Project (All Terrain Armored Transport)",
        bod10:"I led a multidisciplinary project that combined creativity, engineering, and team management: the design and construction of a temporary structure inspired by a Star Wars AT-AT for the Colegio Mayor Moncloa's annual Falla competition. This internal contest required students to submit fully developed proposals, including technical drawings, logistics plans, and feasibility studies. My project was selected as the winner from among four competing submissions.",
        bod11:"Next →"

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
