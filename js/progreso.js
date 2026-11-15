function leerXP() {
  return Number(localStorage.getItem("xp")) || 0;
}

function retoCompletado(id) {
  const hechos = JSON.parse(localStorage.getItem("retosHechos") || "[]");
  return hechos.includes(id);
}

function completarReto(id, xp) {
  if (retoCompletado(id)) {
    return;
  }
  const hechos = JSON.parse(localStorage.getItem("retosHechos") || "[]");
  hechos.push(id);
  localStorage.setItem("retosHechos", JSON.stringify(hechos));
  localStorage.setItem("xp", leerXP() + xp);
}

function formatearFecha(fecha) {
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return fecha.getFullYear() + "-" + mes + "-" + dia;
}

function fechaHoy() {
  return formatearFecha(new Date());
}

function fechaAyer() {
  const ayer = new Date();
  ayer.setDate(ayer.getDate() - 1);
  return formatearFecha(ayer);
}

function leerRacha() {
  const ultima = localStorage.getItem("ultimaPractica");
  if (ultima === fechaHoy() || ultima === fechaAyer()) {
    return Number(localStorage.getItem("racha")) || 0;
  }
  return 0;
}

function registrarPractica() {
  const hoy = fechaHoy();
  const ultima = localStorage.getItem("ultimaPractica");
  if (ultima === hoy) {
    return;
  }
  let racha = 1;
  if (ultima === fechaAyer()) {
    racha = leerRacha() + 1;
  }
  localStorage.setItem("racha", racha);
  localStorage.setItem("ultimaPractica", hoy);
}