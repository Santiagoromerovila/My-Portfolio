document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Currículum",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Proyecto",
        bod1: "Desarrollo de Sistemas Embebidos con AVR-C y ATmega640",
        bod2: "Un sistema de control en tiempo real de bajo nivel para un túnel de lavado totalmente automatizado.",
        bod3: "Resumen",
        bod4: "En este proyecto, desarrollé un sistema de control embebido completo para una instalación de lavado de coches automatizada, utilizando el",
        bod5: " microcontrolador ATmega640",
        bod6: "y programando completamente en",
        bod7: " AVR-C",
        bod8: "Esta fue mi primera experiencia diseñando una solución de control en tiempo real a gran escala desde cero. Utilicé un",
        bod9: " depurador AVR Dragon ",
        bod10: "para programar y probar el firmware en el sistema, asegurando la corrección y seguridad en todos los subsistemas.",
        bod11: "Descripción",
        bod12: "El objetivo era crear un",
        bod13: " firmware embebido robusto ",
        bod14: "que pudiera coordinar múltiples componentes mecánicos en tiempo real, incluyendo motores, sensores, actuadores y sistemas de señalización. Los principales componentes incluyeron:",
        bod15: "Barrera de entrada con luz intermitente de advertencia",
        bod16: "Dos rodillos verticales y uno horizontal",
        bod17: "Unidad de secado basada en ventiladores",
        bod18: "Sistema de cadena transportadora",
        bod19: "Semáforo (rojo/amarillo/verde)",
        bod20: "Sensores de presencia del coche, detección de marcha atrás y sensores de fin de carrera",
        bod21: "AVR-C: Primer Contacto",
        bod22: "Esta fue mi primera vez trabajando con",
        bod23: " microcontroladores AVR de bajo nivel",
        bod24: "Tuve que dominar:",
        bod25: "Configuración a nivel de registro con DDRx, PORTx y PINx",
        bod26: "Uso de Timer0, Timer1 y Timer3 para retardos, PWM y lógica de temporización",
        bod27: "Manejo de interrupciones para retroalimentación de sensores y paradas de emergencia",
        bod28: "Lógica de anti-rebote por software para sensores mecánicos",
        bod29: "Generación de PWM para control de velocidad de motores",
        bod30: "Depuración de hardware con AVR Dragon",
        bod31: "Arquitectura del Sistema",
        bod32: "Control de Entrada",
        bod33: "Una barrera y luz intermitente gestionaban la entrada del coche. Un sensor detectaba el vehículo, activaba la luz, abría la barrera e iniciaba la cinta transportadora.",
        bod34: "Transportador y Seguimiento de Posición",
        bod35: "El transportador era impulsado por un motor controlado por PWM. Contadores basados en temporizadores simulaban el seguimiento de posición. Interruptores de límite detectaban el fin del recorrido.",
        bod36: "Secuencia de Lavado",
        bod37: "Los rodillos verticales y horizontales se activaban en secuencia con temporización precisa. Los motores eran controlados en velocidad mediante PWM.",
        bod38: "Secado y Salida",
        bod39: "Después del lavado, se activaba un sistema de ventilación. El semáforo se ponía en verde una vez que el coche llegaba a la posición final. Un sensor de detección de marcha atrás detenía el sistema si el coche retrocedía inesperadamente.",
        bod40: "Coordinación y Seguridad",
        bod41: "Todas las acciones estaban gobernadas por una",
        bod42: " máquina de estados finitos",
        bod43: "Cada estado correspondía a una etapa del proceso de lavado. La seguridad se garantizaba mediante:",
        bod44: "Subsistemas de temporizador modulares por componente",
        bod45: "Entradas de sensores con anti-rebote",
        bod46: "Interrupciones de emergencia para sensores críticos",
        bod47: "Tiempos de espera tipo watchdog para estados bloqueados",
        bod48: "Retos y Aprendizajes",
        bod49: "Este proyecto me desafió a pensar de forma integral sobre el control embebido:",
        bod50: "Sincronización de módulos concurrentes sin un RTOS",
        bod51: "Filtrado de entradas mecánicas ruidosas",
        bod52: "Garantizar la seguridad en tiempo real",
        bod53: "Depuración de sistemas embebidos en funcionamiento",
        bod54: "Aprendí a gestionar la complejidad trabajando directamente con hardware y temporización del sistema.",
        bod55: "Conclusión",
        bod56: "Este proyecto me enseñó a pensar en términos de sistemas, no solo de código. Construí una aplicación de control confiable y completa enteramente en C embebido. Aumentó mi aprecio por la ingeniería de bajo nivel, desde sensores y PWM hasta seguridad en tiempo real e integración de hardware. Esta experiencia me preparó para roles más avanzados en robótica, automatización y sistemas embebidos industriales.",
        bod57: "Todo el código se encuentra en mi "

      },

      en: {
        title1:"Carwash",
        nave1:"Home",
        nave2:"Resume",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Project",
        bod1:"Embedded Systems Development with AVR-C and ATmega640",
        bod2:"A low-level real-time control system for a fully automated car wash. ",
        bod3:"Overview",
        bod4:"In this project, I developed a complete embedded control system for an automated car wash installation, using the ",
        bod5:" ATmega640 microcontroller",
        bod6:"and programming entirely in",
        bod7:" AVR-C",
        bod8:"This was my first experience designing a full-scale, real-time control solution from the ground up. I used an",
        bod9:" AVR Dragon debugger ",
        bod10:"to program and test the firmware in-system, ensuring correctness and safety across all subsystems.",
        bod11:"Description",
        bod12:"The goal was to create a ",
        bod13:"robust embedded firmware",
        bod14:" that could coordinate multiple mechanical components in real-time, including motors, sensors, actuators, and signaling systems. The main components included:",
        bod15:"Barrier gate with blinking warning light",
        bod16:"Two vertical rollers and one horizontal roller",
        bod17:"Fan-based drying unit",
        bod18:"Conveyor chain system",
        bod19:"Traffic light (red/yellow/green)",
        bod20:"Car presence, reverse detection, and limit sensors",
        bod21:"AVR-C: First Contact",
        bod22:"This was my first time working with ",
        bod23:"low-level AVR microcontrollers",
        bod24:"I had to master:",
        bod25:"Register-level configuration with DDRx, PORTx, and PINx",
        bod26:"Using Timer0, Timer1, and Timer3 for delays, PWM, and timing logic",
        bod27:"Interrupt handling for sensor feedback and emergency stops",
        bod28:"Software debounce logic for mechanical sensors",
        bod29:"PWM generation to control motor speeds",
        bod30:"Hardware debugging with AVR Dragon",
        bod31:"System Architecture",
        bod32:"Entry Control",
        bod33:"A barrier and blinking light managed car entry. A sensor detected the car, triggering the light, opening the barrier, and starting the conveyor.",
        bod34:"Conveyor and Position Tracking",
        bod35:"The conveyor was driven by a PWM-controlled motor. Timer-based counters simulated position tracking. Limit switches detected end-of-travel.",
        bod36:"Washing Sequence",
        bod37:"Vertical and horizontal rollers activated in sequence with precise timing. Motors were speed-controlled via PWM.",
        bod38:"Drying and Exit",
        bod39:"After washing, a fan system activated. A traffic light turned green once the car reached the final position. A reverse detection sensor halted the system if a car moved backwards unexpectedly.",
        bod40:"Coordination and Safety",
        bod41:"All actions were governed by a ",
        bod42:"finite state machine",
        bod43:"Each state corresponded to a stage in the washing process. Safety was enforced through:",
        bod44:"Modular timer subsystems per component",
        bod45:"Debounced sensor inputs",
        bod46:"Emergency interrupts for critical sensors",
        bod47:"Watchdog-like timeouts for stalled states",
        bod48:"Challenges and Learnings",
        bod49:"This project challenged me to think holistically about embedded control:",
        bod50:"Synchronizing concurrent modules without an RTOS",
        bod51:"Filtering noisy mechanical inputs",
        bod52:"Ensuring real-time safety guarantees",
        bod53:"Debugging live embedded systems",
        bod54:" I learned to manage complexity while working directly with hardware and system timing.",
        bod55:"Conclusion",
        bod56:"This project taught me to think in terms of systems, not just code. I built a reliable, full-featured control application entirely in embedded C. It deepened my appreciation for low-level engineering, from sensors and PWM to real-time safety and hardware integration. This experience prepared me for more advanced roles in robotics, automation, and industrial embedded systems.",
        bod57:"All the code can be found in my "

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
