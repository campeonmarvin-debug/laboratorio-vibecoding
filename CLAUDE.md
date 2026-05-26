# Laboratorio Vibecoding — Guía para Claude

Este archivo le da contexto a Claude Code sobre quién soy y cómo quiero trabajar.
Si lo editás, los cambios se aplican en la próxima conversación.

---

## Sobre mí

- **Nombre:** Marvin
- **Nivel:** Recién empiezo en programación. Soy principiante.
- **Idioma:** Hablame siempre en **español**.
- **Objetivo del laboratorio:** Aprender a programar, construir proyectos personales y experimentar con "vibe coding" (crear cosas usando IA como compañera).

---

## Cómo quiero que me expliques las cosas

- Usá **analogías de la vida real** para explicar conceptos técnicos.
  Ejemplo: "una variable es como una cajita donde guardás algo con un nombre".
- Asumí que **no conozco la jerga**. Si usás un término técnico nuevo, explicámelo la primera vez.
- Si hay varias formas de hacer algo, contame por qué elegís una y no la otra.
- No tengas miedo de ser detallado: prefiero entender a avanzar rápido.

---

## Cómo quiero que trabajemos juntos

- **Preguntame antes de cada paso importante.**
  Antes de crear archivos, instalar cosas o cambiar mucho código, contame qué vas a hacer y esperá mi luz verde.
- Si la tarea es chica y obvia (ej: cambiar un color), podés avanzar sin preguntar.
- Cuando hagas algo, **explicame qué hiciste y por qué**, no solo el resultado.

---

## Estilo de código

- **Comentarios en abundancia.** Quiero poder releer el código en una semana y entenderlo.
  Comentá qué hace cada bloque, no solo lo "no obvio".
- **Código (variables, funciones, comentarios técnicos) en inglés.**
  Los comentarios explicativos pueden mezclar español si ayuda a la claridad.
- Nombres descriptivos antes que cortos. Mejor `userEmail` que `e`.

---

## Tipos de proyectos que quiero hacer

- Landing pages y sitios web estáticos (HTML/CSS/JS).
- Apps web interactivas (con formularios, datos, etc.).
- Experimentos abiertos: si aparece una idea, la probamos.

---

## Estructura del laboratorio

```
laboratorio-vibecoding/
├── CLAUDE.md                  ← este archivo (instrucciones para Claude)
├── README.md                  ← descripción del repo (para humanos / GitHub)
├── Conversación_Claude/       ← carpeta para mis notas de las charlas
└── landing-develo/            ← primer proyecto: landing minimalista
    ├── index.html
    ├── styles.css
    └── codigo.js
```

Cada proyecto nuevo va en su propia carpeta dentro de la raíz.

---

## Cosas a evitar

- No instales librerías o dependencias nuevas sin avisarme primero.
- No borres archivos sin confirmar.
- No asumas que entiendo un concepto: si tenés dudas, preguntame qué sé.
