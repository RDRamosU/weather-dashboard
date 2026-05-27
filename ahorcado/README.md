# Ahorcado con JavaScript 

Juego clásico del Ahorcado desarrollado con HTML, CSS y JavaScript puro.  
El proyecto fue creado para practicar manipulación del DOM, uso de Canvas y organización modular del código.


## ¿Qué es?

Aplicación web interactiva donde el usuario debe adivinar una palabra letra por letra antes de quedarse sin intentos.

El juego incluye:
- Dibujo progresivo del ahorcado usando Canvas
- Control de letras correctas e incorrectas
- Validación de entrada del usuario
- Posibilidad de agregar nuevas palabras


## Estructura del proyecto
ahorcado/
├── index.html         # Estructura principal
├── css/
│   └── styles.css     # Estilos globales
├── js/
│   ├── app.js         # Controlador de la UI (DOM + eventos)
│   ├── juego.js       # Lógica del juego
│   ├── canvas.js      # Renderizado en canvas
│   └── palabras.js    # Lista de palabras
└── README.md

## Tecnologías

| Tecnología  | Uso |
|------------|-----|
| HTML5      | Estructura de la aplicación |
| CSS3       | Estilos, layout y responsive |
| JavaScript | Lógica del juego |
| Canvas API | Renderizado gráfico del ahorcado |
| Flexbox    | Layout de la interfaz |

---

## Conceptos practicados

- **Manipulación del DOM** — interacción con botones e inputs
- **Eventos en JavaScript** — click, input y control de flujo
- **Canvas API** — dibujo dinámico del personaje y elementos
- **Arquitectura modular** — separación en múltiples archivos JS
- **Estado del juego** — manejo centralizado con objetos
- **Validación de datos** — uso de expresiones regulares
- **Estructuras de datos** — uso de arrays y `Set`
- **Buenas prácticas** — funciones pequeñas, código legible

---

## Secciones de la aplicación

- **Pantalla inicial**
  - Botón para iniciar el juego
  - Input para agregar nuevas palabras

- **Área de juego**
  - Canvas con el dibujo del ahorcado
  - Espacios de la palabra
  - Letras incorrectas

- **Pantalla final**
  - Mensaje de victoria o derrota
  - Botón de reinicio
  - Botón para volver al inicio

---

## Instalación y uso

### Opción recomendada (servidor local)
1. Clona el repositorio:

2. Abre el proyecto en Visual Studio Code

3. Ejecuta con Live Server:
- Click derecho en `index.html`
- → `Open with Live Server`

### Nota importante

No abrir directamente con `file://` ya que puede generar errores de seguridad en el navegador.

---

## Funcionalidades destacadas

- ✅ Dibujo progresivo del ahorcado
- ✅ Validación de letras ingresadas
- ✅ Gestión de letras repetidas
- ✅ Sistema de vidas
- ✅ Agregar nuevas palabras dinámicamente


## Autor

**Ruben Dario Ramos Ulate**  
Proyecto desarrollado como práctica de JavaScript y desarrollo web.