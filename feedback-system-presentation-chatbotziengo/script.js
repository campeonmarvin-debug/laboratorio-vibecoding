/*
  ╔══════════════════════════════════════════════════════════════╗
  ║  SCRIPT — SISTEMA DE FEEDBACK CHATBOT ZIENGO                 ║
  ║  Acá vive la INTERACTIVIDAD de la presentación:              ║
  ║    · Cambiar de slide al hacer click en las flechas          ║
  ║    · Cambiar de slide con las teclas ← → del teclado         ║
  ║    · Actualizar el contador "X / Y"                          ║
  ║    · Deshabilitar flechas al estar en el primer/último slide ║
  ╚══════════════════════════════════════════════════════════════╝

  CÓMO LEER ESTE ARCHIVO:
  JavaScript se ejecuta paso a paso, de arriba hacia abajo.
  Vamos a:
    1) Encontrar los elementos del HTML que nos interesan.
    2) Guardar en una variable cuál slide se está mostrando ahora.
    3) Escribir una función que cambie el slide visible.
    4) Conectar los botones y las teclas a esa función.
*/


/* ─────────────────────────────────────────────────────────────
   1. CAPTURAR LOS ELEMENTOS DEL HTML
   "document.querySelector(...)" es como decir:
   "buscame en el HTML el elemento que tenga TAL etiqueta/clase/id".
   Es como buscar habitaciones específicas en la casa.
   ───────────────────────────────────────────────────────────── */

// Capturamos TODOS los slides (los 5). querySelectorAll devuelve una lista.
const slides = document.querySelectorAll(".slide");

// El botón de "anterior" (lo encontramos por su id)
const prevButton = document.querySelector("#prev-button");

// El botón de "siguiente"
const nextButton = document.querySelector("#next-button");

// El contador "X / Y"
const counter = document.querySelector("#slide-counter");

// Cuántos slides hay en total (5 en nuestro caso)
const totalSlides = slides.length;


/* ─────────────────────────────────────────────────────────────
   2. ESTADO ACTUAL
   "currentIndex" es la VARIABLE que recuerda qué slide se muestra.
   Empieza en 0 (el primer slide, según cómo cuenta JavaScript).

   Nota: en programación contamos desde 0, no desde 1.
   Entonces los 5 slides son: 0, 1, 2, 3, 4.
   ───────────────────────────────────────────────────────────── */

let currentIndex = 0;
//  ^ usamos "let" (no "const") porque este valor VA A CAMBIAR
//    cada vez que el usuario navegue entre slides.


/* ─────────────────────────────────────────────────────────────
   3. FUNCIÓN PRINCIPAL: MOSTRAR UN SLIDE ESPECÍFICO
   Una "función" es una receta: le das ingredientes (parámetros)
   y ejecuta una serie de pasos. Acá la receta es:
   "Mostrame el slide número N, escondé los demás, y actualizá
    el contador y los botones".
   ───────────────────────────────────────────────────────────── */

function showSlide(newIndex) {
  // (a) Sacarle la clase "is-active" a TODOS los slides
  //     forEach = "para cada slide de la lista, hacé esto"
  slides.forEach(function (slide) {
    slide.classList.remove("is-active");
  });

  // (b) Ponerle "is-active" solo al slide que queremos mostrar
  //     slides[newIndex] = "el slide número newIndex de la lista"
  slides[newIndex].classList.add("is-active");

  // (c) Actualizar la variable que recuerda dónde estamos
  currentIndex = newIndex;

  // (d) Actualizar el texto del contador (ej: "3 / 5")
  //     Sumamos +1 porque al usuario le mostramos desde 1, no desde 0
  counter.textContent = (currentIndex + 1) + " / " + totalSlides;

  // (e) Habilitar/deshabilitar los botones según corresponda
  updateButtonStates();
}


/* ─────────────────────────────────────────────────────────────
   4. HABILITAR / DESHABILITAR BOTONES
   Si estoy en el primer slide, no tiene sentido un "anterior".
   Si estoy en el último, no tiene sentido un "siguiente".
   ───────────────────────────────────────────────────────────── */

function updateButtonStates() {
  // Si estamos en el slide 0 → desactivar el botón "anterior"
  prevButton.disabled = (currentIndex === 0);

  // Si estamos en el último slide → desactivar el botón "siguiente"
  nextButton.disabled = (currentIndex === totalSlides - 1);
  // Nota: totalSlides - 1 porque empezamos a contar en 0.
}


/* ─────────────────────────────────────────────────────────────
   5. NAVEGACIÓN: SIGUIENTE Y ANTERIOR
   Funciones cortitas que llaman a showSlide con el índice adecuado.
   ───────────────────────────────────────────────────────────── */

function goToNext() {
  // Solo avanzamos si NO estamos en el último slide
  if (currentIndex < totalSlides - 1) {
    showSlide(currentIndex + 1);
  }
}

function goToPrev() {
  // Solo retrocedemos si NO estamos en el primer slide
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  }
}


/* ─────────────────────────────────────────────────────────────
   6. CONECTAR LOS BOTONES (event listeners)
   "addEventListener" es como decir:
   "Cuando pase TAL cosa en este elemento, ejecutá TAL función".
   Es plantar un "oído" en cada botón.
   ───────────────────────────────────────────────────────────── */

// Cuando se hace click en el botón "siguiente" → llamar a goToNext
nextButton.addEventListener("click", goToNext);

// Cuando se hace click en el botón "anterior" → llamar a goToPrev
prevButton.addEventListener("click", goToPrev);


/* ─────────────────────────────────────────────────────────────
   7. SOPORTE DE TECLADO (← →)
   Escuchamos en TODO el documento las teclas que se presionan.
   ───────────────────────────────────────────────────────────── */

document.addEventListener("keydown", function (event) {
  // event.key contiene el nombre de la tecla apretada
  // (ej: "ArrowLeft", "ArrowRight", "a", "Enter", etc.)

  if (event.key === "ArrowRight") {
    goToNext();
  }
  if (event.key === "ArrowLeft") {
    goToPrev();
  }
});


/* ─────────────────────────────────────────────────────────────
   8. INICIALIZACIÓN
   Cuando el script arranca, nos aseguramos que el estado de los
   botones esté bien desde el inicio (botón "anterior" desactivado).
   ───────────────────────────────────────────────────────────── */

updateButtonStates();
