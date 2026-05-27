/* Referencias del DOM*/
const btnIniciar = document.getElementById("iniciar-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnInicio = document.getElementById("btn-inicio");

const contenedorPrincipal = document.getElementById("contenedor-principal");
const contenedorCanvas = document.getElementById("contenedor-canvas");
const contenedorBotonesFinal = document.getElementById("botones");

const inputOculto = document.getElementById("input-oculto");

const btnNuevaPalabra = document.getElementById("nueva-palabra");
const inputNuevaPalabra = document.getElementById("input-nueva-palabra");


/* Inicializacion*/
document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
    agregarEventos();

    ocultarCanvas();
    contenedorBotonesFinal.classList.add("hidden");
}

/* Eventos*/

function agregarEventos() {

    btnIniciar.addEventListener("click", () => {
        iniciar();
    });

    btnReiniciar.addEventListener("click", () => {
        reiniciar();
    });

    btnInicio.addEventListener("click", () => {
        volverInicio();
    });

    btnNuevaPalabra.addEventListener("click", agregarPalabraUI);

    // Click en canvas para enfocar input
    contenedorCanvas.addEventListener("click", () => {
        inputOculto.focus();
    });

    // Entrada de letra
    inputOculto.addEventListener("input", (e) => {
        manejarInput(e);
    });
}

/* Control del juego*/

function iniciar() {
    contenedorPrincipal.classList.add("hidden");
    contenedorCanvas.classList.remove("hidden");

    contenedorBotonesFinal.classList.add("hidden");

    iniciarJuego();

    activarInput();
}

function reiniciar() {
    contenedorBotonesFinal.classList.add("hidden");
    iniciarJuego();
    activarInput();
}

function mostrarBotonesFinal() {
    contenedorBotonesFinal.classList.remove("hidden");
    desactivarInput();
}

function activarInput() {
    inputOculto.disabled = false;
    inputOculto.focus();
}

function desactivarInput() {
    inputOculto.disabled = true;
    inputOculto.blur();
}

/* Input de letras*/
function manejarInput(e) {
    const valor = e.target.value;

    manejarLetra(valor); // función de juego.js

    e.target.value = "";
}

/* Agregar nueva palabra*/

function agregarPalabraUI() {
    const palabra = inputNuevaPalabra.value.toUpperCase();
    const regex = /^[A-ZÑ]+$/;

    if (!regex.test(palabra) || palabra.length < 4) {
        mostrarMensaje("❌ Palabra inválida", "error");
        return;
    }

    if (!palabras.includes(palabra)) {
        palabras.push(palabra);
        mostrarMensaje("✅ Palabra agregada", "exito");
    } else {
        mostrarMensaje("⚠️ Ya existe", "error");
    }

    inputNuevaPalabra.value = "";
}

/* Mensajes UI*/
function mostrarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.textContent = texto;
    mensaje.classList.add("mensaje");

    if (tipo === "error") {
        mensaje.style.background = "#f8d7da";
    } else {
        mensaje.style.background = "#cff4fc";
    }

    contenedorPrincipal.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 2000);
}

/* Volver al inicio*/
function volverInicio() {
    location.reload();
}
