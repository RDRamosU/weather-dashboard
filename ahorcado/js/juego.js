/* Estado del juego */
const estado = {
    palabra: "",
    vidas: 8,
    usadas: [],
    aciertos: new Set(),
    activo: false
};

/* Expresión regular para validar letras */
const regexLetra = /^[A-ZÑ]$/;

/* Iniciar juego*/
function iniciarJuego() {
    estado.palabra = sortearPalabra();
    estado.vidas = 8;
    estado.usadas = [];
    estado.aciertos.clear();
    estado.activo = true;

    limpiarCanvas();
    mostrarCanvas();
    dibujarEspacios(estado.palabra);
}


/* Sortear palabra*/
function sortearPalabra() {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

/* Manejo de palabras*/
function manejarLetra(letraInput) {
    if (!estado.activo) return;

    const letra = letraInput.toUpperCase();

    // Validación
    if (!regexLetra.test(letra)) return;
    if (estado.usadas.includes(letra)) return;

    estado.usadas.push(letra);

    // Verificar si la letra está
    if (estado.palabra.includes(letra)) {
        estado.aciertos.add(letra);
        mostrarLetraCorrecta(letra);
        comprobarVictoria();
    } else {
        manejarError(letra);
    }
}

/* Manejo de error*/

function manejarError(letra) {
    estado.vidas--;
    dibujarError(estado.vidas);
    dibujarLetraIncorrecta(letra, estado.usadas.length);
    comprobarVictoria();
}

/* Mostar letras correctas*/
function mostrarLetraCorrecta(letra) {
    const palabraArray = estado.palabra.split("");

    palabraArray.forEach((l, index) => {
        if (l === letra) {
            reemplazarEspacioPorLetra(letra, index, palabraArray.length);
        }
    });
}

/* Validar el fin del juego */

function comprobarVictoria() {

    // Gana si todas las letras fueron acertadas
    const gano = estado.palabra
        .split("")
        .every(l => estado.aciertos.has(l));

    if (gano) {
        estado.activo = false;
        dibujarResultado(true);
        dibujarHombreGano();
        mostrarBotonesFinal();
        return;
    }

    // Pierde si se queda sin vidas
    if (estado.vidas === 0) {
        estado.activo = false;
        dibujarResultado(false);
        mostrarBotonesFinal();
    }
}

/* Reiniciar juego*/
function reiniciarJuego() {
  iniciarJuego();
}

/* Volver al inicio*/
function volverInicio() {
  location.reload();
}

