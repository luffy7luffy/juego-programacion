let contextoAudio = null;

function tono(frecuencia, inicio, duracion) {
  try {
    if (!contextoAudio) {
      contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (contextoAudio.state === "suspended") {
      contextoAudio.resume();
    }
    const oscilador = contextoAudio.createOscillator();
    const volumen = contextoAudio.createGain();
    const comienzo = contextoAudio.currentTime + inicio;

    oscilador.type = "square";
    oscilador.frequency.value = frecuencia;
    volumen.gain.setValueAtTime(0.1, comienzo);
    volumen.gain.exponentialRampToValueAtTime(0.001, comienzo + duracion);

    oscilador.connect(volumen);
    volumen.connect(contextoAudio.destination);
    oscilador.start(comienzo);
    oscilador.stop(comienzo + duracion);
  } catch (error) {
    // Si el navegador no permite sonido, el juego sigue funcionando sin él.
  }
}

function sonidoAcierto() {
  tono(523, 0, 0.12);
  tono(659, 0.12, 0.12);
  tono(784, 0.24, 0.25);
}

function sonidoFallo() {
  tono(220, 0, 0.15);
  tono(165, 0.15, 0.3);
}