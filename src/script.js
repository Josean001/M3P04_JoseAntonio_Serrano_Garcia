function obtenerNotas() {
    // Obtiene los valores de las notas
    const notas = [
        parseFloat(document.getElementById("nota1").value),
        parseFloat(document.getElementById("nota2").value),
        parseFloat(document.getElementById("nota3").value),
        parseFloat(document.getElementById("nota4").value),
        parseFloat(document.getElementById("nota5").value),
        parseFloat(document.getElementById("nota6").value)
    ];
    return notas;
}

function calcularMedia(notas) {
    // Suma todas las notas y divide por el número de notas
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

function mostrarMedia() {
    const notas = obtenerNotas();
    const media = calcularMedia(notas);
    document.getElementById("resultado").innerHTML = `La nota media es: ${media.toFixed(2)}`;
}

function mostrarCorrespondencia() {
    const notas = obtenerNotas();
    const media = calcularMedia(notas);
    let correspondencia;

    // Asigna una calificación en función de la media
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