/* Configuracion de canvas*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Colores
const colores = {
    fondo: "#d9d9d9",
    estructura: "#00004d",
    cuerpo: "#ffffe6",
    detalles: "#000000",
    exito: "#000066",
    error: "#4000ff"
};

/* Utilidades + helpers*/

// Limpiar canvas
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Dibujar línea
function linea(x1, y1, x2, y2, width = 5, color = colores.estructura) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Dibujar círculo
function circulo(x, y, radio, color, fill = true) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

// Dibujar texto
function texto(txt, x, y, size = 40, color = "#000") {
    ctx.fillStyle = color;
    ctx.font = `${size}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(txt, x, y);
}

/* Mostrar / Ocultar*/
function mostrarCanvas() {
    canvas.classList.remove("hidden");

    ctx.fillStyle = colores.fondo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    dibujarBase();
}

function ocultarCanvas() {
    canvas.classList.add("hidden");
}

/* Estructura del ahorcado*/
function dibujarBase() {
    linea(50, 400, 150, 350, 8);
    linea(150, 350, 250, 400, 8);
}

function dibujarHorca() {
    linea(150, 360, 150, 50, 10);
    linea(150, 50, 250, 50, 10);
    linea(250, 50, 250, 100, 10);
}

/* Persona*/
function dibujarCabeza() {
    circulo(245, 130, 35, colores.cuerpo);
}

function dibujarCuerpo() {
    linea(245, 150, 245, 270, 15, colores.cuerpo);
}

function dibujarBrazoDer() {
    linea(245, 220, 295, 175, 10, colores.cuerpo);
}

function dibujarBrazoIzq() {
    linea(245, 220, 195, 175, 10, colores.cuerpo);
}

function dibujarPiernaDer() {
    linea(245, 250, 295, 330, 10, colores.cuerpo);
}

function dibujarPiernaIzq() {
    linea(245, 250, 195, 330, 10, colores.cuerpo);
}

function dibujarCara() {
    // Ojos (X)
    linea(225, 120, 235, 130, 2, colores.detalles);
    linea(235, 120, 225, 130, 2, colores.detalles);

    linea(255, 120, 265, 130, 2, colores.detalles);
    linea(265, 120, 255, 130, 2, colores.detalles);

    // Boca triste
    ctx.beginPath();
    ctx.arc(245, 160, 15, 1.25 * Math.PI, 1.75 * Math.PI);
    ctx.strokeStyle = colores.detalles;
    ctx.stroke();
}

/* Personas ganadora*/
function dibujarHombreGano() {
    limpiarCanvas();

    dibujarCabeza();
    dibujarCuerpo();
    dibujarBrazoDer();
    dibujarBrazoIzq();
    dibujarPiernaDer();
    dibujarPiernaIzq();

    // Ojos
    circulo(230, 125, 5, colores.detalles);
    circulo(260, 125, 5, colores.detalles);

    // Sonrisa
    ctx.beginPath();
    ctx.arc(245, 135, 25, 0.25 * Math.PI, 0.75 * Math.PI);
    ctx.stroke();
}

/* Palabra*/
function dibujarEspacios(palabra) {
    const largo = palabra.length;

    for (let i = 0; i < largo; i++) {
        const x = i * 45 + (canvas.width - largo * 50) / 2 + 50;
        texto("_", x, 465, 50, colores.estructura);
    }
}

function reemplazarEspacioPorLetra(letra, index, total) {
    const x = index * 45 + (canvas.width - total * 50) / 2 + 50;
    texto(letra, x, 465, 50, colores.estructura);
}

/* Letras incorrectas*/
function dibujarLetraIncorrecta(letra, index) {
    const fila = Math.floor((index - 1) / 6);
    const col = (index - 1) % 6;

    const x = 400 + col * 45;
    const y = 250 + fila * 50;

    texto(letra, x, y, 35, colores.estructura);
}

/* Dibujo progresivo*/
const partes = [
    dibujarHorca,
    dibujarCabeza,
    dibujarCuerpo,
    dibujarBrazoDer,
    dibujarBrazoIzq,
    dibujarPiernaDer,
    dibujarPiernaIzq,
    dibujarCara
];

function dibujarError(vidasRestantes) {
    const paso = 8 - vidasRestantes;

    if (partes[paso]) {
        partes[paso]();
    }
}

/* Mensajes finales*/
function dibujarResultado(gano) {
    if (gano) {
        texto("Ganaste", 520, 110, 50, colores.exito);
        texto("Felicidades!", 520, 170, 40, colores.exito);
    } else {
        texto("Perdiste", 520, 110, 50, colores.error);
        texto(`Palabra: ${estado.palabra}`, 520, 170, 25, colores.error);
    }
}
