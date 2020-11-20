frase = Array();
frase[0] = '"La lectura hace al hombre completo; la conversación lo hace ágil, el escribir lo hace preciso." ~ Francis Bacon';
frase[1] = '"El que lee mucho y anda mucho, ve mucho y sabe mucho". ~ Miguel de Cervantes Saavedra';
frase[2] = '"Leer es equivalente a pensar con la cabeza de otra persona en lugar de con la propia". ~ Arthur Schopenhauer.';
frase[3] = '"Sin bibliotecas, ¿qué tenemos? Ni pasado ni futuro" ~ Ray Bradbury';
window.onload = function() {
    max = 3;
    min = 0;
    document.getElementById("frase").innerHTML = frase[Math.round(Math.random() * (max - min) + min)];
}