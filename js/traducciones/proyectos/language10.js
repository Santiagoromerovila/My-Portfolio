document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      es: {
        title1: "Space Invaders",
        nave1: "Inicio",
        nave2: "Currículum",
        nave3: "Proyectos",
        nave4: "Trabajos",
        nave5: "Prensa",
        title3: "Proyecto",
        bod1: "Desarrollo de Videojuego con OpenGL y C++",
        bod2: "Un enfoque práctico de la Programación Orientada a Objetos a través de un clon de Space Invaders.",
        bod3: "Introducción",
        bod4: "En este proyecto desarrollé un videojuego 2D básico inspirado en el clásico Space Invaders, utilizando C++ y OpenGL. Este trabajo formó parte de una asignatura grupal para el curso de “Sistemas de Programación” en el tercer año del grado en Ingeniería Industrial.",
        bod5: "Fue mi primera vez trabajando con OpenGL y me sirvió como una introducción práctica a los gráficos por computadora, bucles de juego, renderizado y diseño orientado a objetos de manera estructurada y aplicada. El proyecto ayudó a consolidar múltiples conceptos de programación a través de un producto tangible: un juego jugable.",
        bod6: "Descripción",
        bod7: "El objetivo principal del proyecto fue diseñar e implementar una versión simplificada de Space Invaders utilizando",
        bod8: "C++",
        bod9: "con un claro enfoque en los principios de",
        bod10: " programación orientada a objetos (POO)",
        bod11: ". Usamos",
        bod12: " OpenGL ",
        bod13: "para renderizar gráficos 2D y gestionar elementos visuales como la nave del jugador, enemigos, disparos y fondo del juego.",
        bod14: "Este proyecto proporcionó el contexto perfecto para aplicar conceptos clave de la POO como encapsulamiento, herencia, polimorfismo y diseño modular. Cada elemento del juego (por ejemplo, el jugador, enemigos, proyectiles) fue implementado como una clase independiente, encapsulando su propio estado y comportamiento. Esta estructura hizo que el código fuera más escalable y fácil de gestionar.",
        bod15: "OpenGL: Primer Contacto",
        bod16: "Esta fue la primera vez que trabajé con",
        bod17: " OpenGL",
        bod18: ", y representó una de las curvas de aprendizaje más pronunciadas del proyecto. Al principio, entender cómo OpenGL se comunica con la GPU y renderiza los fotogramas en tiempo real fue todo un reto.",
        bod19: "Aspectos clave que aprendí:",
        bod20: "Configurar una ventana básica de OpenGL y un bucle de juego",
        bod21: "Gestionar búferes y renderizado de fotogramas",
        bod22: "Manejo de sistemas de coordenadas y transformaciones en 2D",
        bod23: "Dibujar formas simples y texturas usando primitivas de OpenGL",
        bod24: "Renderizado en tiempo real y actualización de frames",
        bod25: "También obtuve una mejor comprensión de cómo funciona la programación gráfica de bajo nivel, especialmente en comparación con motores de juego de alto nivel.",
        bod26: "Diseño Orientado a Objetos",
        bod27: "El enfoque educativo principal del proyecto fue aplicar",
        bod28: " POO ",
        bod29: "a un sistema real y funcional. Todos los componentes del juego fueron modelados como objetos, y usamos jerarquías de clases e interacciones para mantener la arquitectura limpia.",
        bod30: "Desglose de clases:",
        bod31: "Jugador",
        bod32: ": Controlado por el usuario, podía moverse y disparar.",
        bod33: "Enemigo",
        bod34: ": Se movía en patrones y podía ser destruido.",
        bod35: "Bala",
        bod36: ": Se generaba cuando el jugador disparaba; gestionaba la detección de colisiones.",
        bod37: "Motor del Juego",
        bod38: ": Controlaba el bucle, tiempos, actualizaciones y renderizado.",
        bod39: "Estas clases interactuaban mediante interfaces públicas limpias y lógica interna privada. Este enfoque modular nos permitió aislar errores, hacer el código más mantenible y probar partes específicas de forma independiente.",
        bod40: "Estructura e Implementación del Juego",
        bod41: "La estructura final incluyó los siguientes componentes:",
        bod42: "Bucle de juego: Un ciclo continuo que actualizaba todos los objetos del juego y refrescaba la pantalla.",
        bod43: "Gestión de entradas: Captura de eventos del teclado para controlar al jugador.",
        bod44: "Detección de colisiones: Gestión de interacciones entre balas y enemigos.",
        bod45: "Estados del juego: Pantalla de inicio, juego activo y condiciones de fin de partida.",
        bod46: "Sistema de puntuación: Mostraba puntos según los enemigos eliminados.",
        bod47: "Aunque simples, estas características requirieron un diseño disciplinado y coordinación entre clases. Nos dio una visión de cómo se construyen desde cero juegos o sistemas más complejos.",
        bod48: "Aprendizajes Clave",
        bod49: "Comprender cómo escala el diseño orientado a objetos en aplicaciones reales",
        bod50: "Familiarizarme con OpenGL como API gráfica",
        bod51: "Valorar el papel de la arquitectura y patrones de diseño en el desarrollo de software",
        bod52: "Depurar y optimizar rendimiento en aplicaciones en tiempo real",
        bod53: "Trabajo en equipo: división de tareas, revisión de código e integración",
        bod54: "Quizá lo más importante, aprendí a tomar una idea vaga 'crear un juego sencillo' y dividirla en componentes estructurados y alcanzables.",
        bod55: "Conclusión",
        bod56: "Este proyecto sirvió como puente entre conceptos teóricos de programación y su aplicación en el mundo real. Por primera vez, pude construir algo visual e interactivo desde cero usando solo C++ y OpenGL.",
        bod57: "Más allá del conocimiento técnico, el proyecto me dio una apreciación más profunda por el código limpio, la estructura de sistemas y el valor práctico de la POO. También despertó un interés continuo en la programación gráfica y el diseño de software interactivo.",
        bod58: "Todo el código se encuentra en mi",
        bod59: "Galería"

      },

      en: {
        title1:"Space Invaders",
        nave1:"Home",
        nave2:"Curriculum",
        nave3:"Projects",
        nave4:"Jobs",
        nave5:"Press",
        title3:"Project",
        bod1:"Game Development with OpenGL and C++",
        bod2:"A practical approach to Object-Oriented Programming through a Space Invaders clone.",
        bod3:"Introduction",
        bod4:"In this project, I developed a basic 2D game inspired by the classic Space Invaders, using C++ and OpenGL. This work was part of a group assignment for the “Sistemas de Programación” course in the third year of my Industrial Engineering degree. ",
        bod5:"This was my first time working with OpenGL, and it served as a hands-on introduction to computer graphics, game loops, rendering, and object-oriented design in a more structured and applied way. The project helped consolidate multiple programming concepts through a tangible product: a playable game.",
        bod6:"Description",
        bod7:"The core goal of the project was to design and implement a simplified version of Space Invaders using",
        bod8:"C++",
        bod9:"with a clear focus on ",
        bod10:"object-oriented programming (OOP)",
        bod11:"principles. We used ",
        bod12:"OpenGL",
        bod13:" to render 2D graphics and handle visual elements such as the player ship, enemies, bullets, and game background.",
        bod14:"This project provided the perfect context to apply key OOP concepts like encapsulation, inheritance, polymorphism, and modular design. Each element of the game (e.g., the player, enemies, projectiles) was implemented as a separate class, encapsulating its own state and behavior. This structure made the codeeasier to scale and manage.",
        bod15:"OpenGL: First Contact",
        bod16:"This was the first time I worked with ",
        bod17:"OpenGL",
        bod18:", and it represented one of the steepest learning curves of the project. Initially, understanding how OpenGL communicates with the GPU and renders frames in real time was challenging.",
        bod19:"Key things I learned:",
        bod20:"Setting up a basic OpenGL window and game loop",
        bod21:"Managing buffers and frame rendering",
        bod22:"Handling coordinate systems and transformations in 2D",
        bod23:"Drawing simple shapes and textures using OpenGL primitives",
        bod24:"Real-time rendering and frame updates",
        bod25:"I also gained a much better understanding of how low-level graphics programming works, especially in contrast to higher-level game engines.",
        bod26:"Object-Oriented Design",
        bod27:"The primary educational focus of the project was applying",
        bod28:" OOP ",
        bod29:"to a real, functioning system. All the components of the game were modeled as objects, and we used class hierarchies and interactions to keep the architecture clean.",
        bod30:"Class breakdown:",
        bod31:"Player",
        bod32:": Controlled by the user, could move and shoot.",
        bod33:"Enemy",
        bod34:": Moved in patterns and could be destroyed.",
        bod35:"Bullet",
        bod36:": Spawned when the player shot; handled collision detection.",
        bod37:"Game Engine",
        bod38:": Managed the loop, timing, updates, and rendering.",
        bod39:"These classes interacted using clean public interfaces, with private internal logic. This modular approach allowed us to isolate bugs, make the code more maintainable, and test specific parts independently.",
        bod40:"Game Structure and Implementation",
        bod41:"The final structure included the following components:",
        bod42:"Game loop: A continuous cycle that updated all game objects and refreshed the display.",
        bod43:"Input handling: Captured keyboard events to control the player.",
        bod44:"Collision detection: Managed interactions between bullets and enemies.",
        bod45:"Game states: Start screen, active gameplay, and game-over conditions.",
        bod46:"Scoring system: Displayed points based on how many enemies were destroyed.",
        bod47:" Although simple, these features required disciplined design and coordination across classes. It gave us insight into how larger games or systems might be built from the ground up.",
        bod48:"Key Learnings",
        bod49:"Understanding how object-oriented design scales in real applications",
        bod50:"Getting comfortable with OpenGL as a graphics API",
        bod51:"Appreciating the role of architecture and design patterns in software development",
        bod52:"Debugging and performance optimization in real-time applications",
        bod53:"Working in a team: task division, code reviews, and integration",
        bod54:"Perhaps most importantly, I learned how to take a loosely defined idea - build a simple game - and break it down into structured, achievable components.",
        bod55:"Conclusion",
        bod56:"This project bridged the gap between theoretical programming concepts and real-world application. For the first time, I was able to build something visual and interactive from scratch using just C++ and OpenGL.",
        bod57:" Beyond technical knowledge, the project gave me a deeper appreciation for clean code, system structure, and the practical value of OOP. It also sparked an ongoing interest in graphics programming and interactive software design.",
        bod58:"All the code can be found in my",
        bod59:"Showcase"


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
