// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú me conoces bien 👸🏻💕 ", time: 14 },
  { text: "sabes cómo hacer captar mi atención 💖😊", time:15 },
  { text: "Contigo, siempre caigo 👸🏻💕", time: 22 },
  { text: "Ere' mi tentación, 💖😊", time: 20},
  { text: "dime qué hay pa' hoy, 💖😊", time: 29},
  { text: "Noche de pasión, hasta que el Sol salga 👸🏻💕", time: 26 },
  { text: "Bellaqueando en la playa 💖😊", time: 30 },
  { text: "Casi to' el verano bellaqueando en la playa 👸🏻💕", time: 33 },
  { text: "Ay, ven pa'cá, no te vaya' 💖😊", time: 37 },
  { text: "Se pasa de trago' y se pasa de la raya 👸🏻💕", time: 40 },
  { text: "Ay, ay, ay, ay, ay, ay 💖😊", time: 44 },
  { text: "Hay una nena 👸🏻💕", time: 47 },
  { text: "Que mis expectativas llena, 'toy puesto pa' ti, morena 💖😊", time: 50 },
  { text: "Ey, enhorabuena 👸🏻💕", time: 54 },
  { text: "Hace que olvide mis problema', el ritmo corre por las vena' 💖😊", time: 53 },
  { text: "Me la bailé, contra la pared, yo la acorralé 👸🏻💕", time: 47 },
  { text: "Si hay fila, me colaré 💖😊", time: 50 },
  { text: "Yo, por siempre, te recordaré 👸🏻💕", time: 53 },
  { text: "En lo oscuro, yo me la bailé 💖😊", time: 58 },
  { text: "Contra la pared, yo la acorralé 👸🏻💕", time: 61 },
  { text: "Si hay fila, me colaré 💖😊", time: 64 },
  { text: "Yo, por siempre, te recordaré 👸🏻💕", time: 67 },
  { text: "Sí, mami, o sin ropa bellaqueando en la playa 💖😊", time: 70 },
  { text: "Casi to' el verano bellaqueando en la playa 👸🏻💕", time: 74 },
  { text: "Ay, ven pa'cá, no te vaya' 💖😊", time: 78 },
  { text: "Se pasa de trago' y se pasa de la raya 👸🏻💕", time: 81 },
  { text: "Ay, si tú me deja', yo te llevaré 💖😊", time: 85 },
  { text: "A los lugare' que por rede' ve' 👸🏻💕", time: 88 },
  { text: "Apuesto a que no va' a querer volver 💖😊", time: 91 },
  { text: "Los problema' solos se van a resolver 👸🏻💕", time: 95 },
  { text: "Porque contigo me voy 💖😊", time: 98 },
  { text: "De vacación por St. Croix 👸🏻💕", time: 101 },
  { text: "Tú quiere' estar con un island boy 💖😊", time: 104 },
  { text: "Turismo interno le doy 👸🏻💕", time: 108 },
  { text: "Me la vo'a llevar por el trópico 💖😊", time: 111 },
  { text: "Se puso traje de baño exótico 👸🏻💕", time: 115 },
  { text: "Tiene detrá' un ejército 💖😊", time: 118 },
  { text: "Los deja sediento' apropósito 👸🏻💕", time: 121 },
  { text: "Por la orilla, con los caballo' 💖😊", time: 124 },
  { text: "A uste' yo no le encuentro fallo 👸🏻💕", time: 127 },
  { text: "Viene pa' PR pa' mayo",time: 130},
  { text: "Viene pa' PR pa' mayo 💖😊", time: 133 },
  { text: "Vamo' a hacerlo hasta que cante el gallo 👸🏻💕", time: 136 },
  { text: "Hicimo' cosa' que yo aún las callo 💖😊", time: 140 },
  { text: "Bellaqueando en la playa 👸🏻💕", time: 143 },
  { text: "Casi to' el verano bellaqueando en la playa 💖😊", time: 146 },
  { text: "Ay, ven pa'cá, no te vaya' 👸🏻💕", time: 150 },
  { text: "Se pasa de trago' y se pasa de la raya 💖😊", time: 153 },
  { text: "Ay, ay, ay, ay, ay, ay 👸🏻💕", time: 157 },
  { text: "Hay una nena 💖😊", time: 160 },
  { text: "Que mis expectativas llena, 'toy puesto pa' ti, morena 👸🏻💕", time: 163 },
  { text: "Ey, enhorabuena 💖😊", time: 167 },
  { text: "Hace que olvide mis problema', el ritmo corre por las vena' 👸🏻💕", time: 169 },
  { text: "Me la bailé, contra la pared, yo la acorralé 💖😊", time: 173 },
  { text: "Si hay fila, me colaré 👸🏻💕", time: 177 },
  { text: "Yo, por siempre, te recordaré 💖😊", time: 180 },
  { text: "En lo oscuro, yo me la bailé 👸🏻💕", time: 183 },
  { text: "Contra la pared, yo la acorralé 💖😊", time: 186 },
  { text: "Si hay fila, me colaré 👸🏻💕", time: 189 },
  { text: "Yo, por siempre, te recordaré 💖😊", time: 191 },
  { text: "El Young King, baby, yeah 👸🏻💕", time: 193 },
  { text: "(Yeah) 💖😊", time: 196 },
  { text: "(Tu-ru-ru-ru-ru-ru-ru-ru-ru) 👸🏻💕", time: 197 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);