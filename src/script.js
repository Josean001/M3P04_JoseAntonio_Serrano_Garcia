
// Contador para llevar el número correcto de notas
let contadorNotas = 6; // Inicia con las dos notas iniciales

// Añadir dinámicamente nuevos campos de entrada para las notas
document.getElementById("addNotaButton").addEventListener("click", function () {
    contadorNotas++; // Incrementar el contador de notas
    const notasContainer = document.getElementById("notas-container");

    // Crear un nuevo input para la nota
    const nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    nuevoInput.className = "nota";
    nuevoInput.placeholder = `Nota ${contadorNotas}`;
    nuevoInput.min = 0;
    nuevoInput.max = 10;
    nuevoInput.required = true;

    notasContainer.appendChild(nuevoInput); // Añadir el nuevo input al contenedor
});

// Eliminar el último campo de entrada para las notas
document.getElementById("removeNotaButton").addEventListener("click", function () {
    const notasContainer = document.getElementById("notas-container");
    const inputs = document.querySelectorAll(".nota");

    if (inputs.length > 2) {
        notasContainer.removeChild(inputs[inputs.length - 1]); // Elimina el último input
        contadorNotas--; // Disminuye el contador de notas
    } else {
        alert("No se pueden eliminar más notas. Deben permanecer al menos dos.");
    }
});

// Obtener las notas dinámicamente
function obtenerNotas() {
    const inputs = document.querySelectorAll(".nota");
    const notas = Array.from(inputs)
        .map(input => parseFloat(input.value))
        .filter(nota => !isNaN(nota) && nota >= 0 && nota <= 10);

    if (notas.length === 0) {
        alert("Por favor, introduce al menos una nota válida entre 0 y 10.");
        return null;
    }

    return notas;
}

// Calcular la media de las notas
function calcularMedia(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

// Mostrar la nota media
function mostrarMedia() {
    const notas = obtenerNotas();
    if (!notas) return;
    const media = calcularMedia(notas);
    document.getElementById("resultado").innerHTML = `La nota media es: ${media.toFixed(2)}`;
}

// Mostrar la correspondencia basada en la media
function mostrarCorrespondencia() {
    const notas = obtenerNotas();
    if (!notas) return;
    const media = calcularMedia(notas);
    let correspondencia;

    if (media >= 0 && media <= 2.99) {
        correspondencia = "Muy deficiente";
    } else if (media >= 3 && media <= 4.99) {
        correspondencia = "Insuficiente";
    } else if (media >= 5 && media <= 5.99) {
        correspondencia = "Suficiente";
    } else if (media >= 6 && media <= 6.99) {
        correspondencia = "Bien";
    } else if (media >= 7 && media <= 8.99) {
        correspondencia = "Notable";
    } else if (media >= 9 && media <= 10) {
        correspondencia = "Sobresaliente";
    }

    document.getElementById("resultado").innerHTML = `El alumno ha sacado un ${media.toFixed(2)} que corresponde a un ${correspondencia}`;
}
