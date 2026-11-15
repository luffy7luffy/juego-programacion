const retos = [
  {
    id: 1,
    titulo: "Tu primer título",
    enunciado: "Completa el hueco para que 'Hola' sea un título grande.",
    codigo: "<___>Hola</___>",
    respuesta: "h1",
    pistas: [
      "Los títulos grandes de una página usan una etiqueta que empieza por h.",
      "Después de la h va un número. El título más grande es el número 1.",
      "La respuesta es h1."
    ]
  },
  {
    id: 2,
    titulo: "Tu primer párrafo",
    enunciado: "Completa el hueco para que el texto sea un párrafo.",
    codigo: "<___>Esto es un texto normal.</___>",
    respuesta: "p",
    pistas: [
      "Los párrafos usan una etiqueta de una sola letra.",
      "Es la inicial de la palabra 'párrafo'.",
      "La respuesta es p."
    ]
  },
  {
    id: 3,
    titulo: "Un enlace",
    enunciado: "Completa el hueco para crear un enlace a otra página.",
    codigo: "<___ href=\"https://ejemplo.com\">Pulsa aquí</___>",
    respuesta: "a",
    pistas: [
      "Los enlaces usan una etiqueta de una sola letra.",
      "Es la inicial de 'anchor', que en inglés significa ancla.",
      "La respuesta es a."
    ]
  },
  {
    id: 4,
    titulo: "Una imagen",
    enunciado: "Completa el hueco para mostrar una imagen.",
    codigo: "<___ src=\"gato.png\">",
    respuesta: "img",
    pistas: [
      "Esta etiqueta tiene tres letras.",
      "Es la abreviatura de 'image', imagen en inglés.",
      "La respuesta es img."
    ]
  },
  {
    id: 5,
    titulo: "Una lista",
    enunciado: "Completa el hueco para que cada línea sea un elemento de la lista.",
    codigo: "<ul>\n  <___>Manzana</___>\n  <___>Pera</___>\n</ul>",
    respuesta: "li",
    pistas: [
      "Esta etiqueta tiene dos letras.",
      "Es la abreviatura de 'list item', elemento de lista en inglés.",
      "La respuesta es li."
    ]
  },
  {
    id: 6,
    titulo: "Un color de texto",
    enunciado: "Completa el hueco de CSS para que el título sea de color rojo.",
    codigo: "h1 {\n  ___: red;\n}",
    respuesta: "color",
    pistas: [
      "Es una palabra en inglés que significa lo mismo que en español, sin la tilde.",
      "Tiene cinco letras y empieza por c.",
      "La respuesta es color."
    ]
  },
  {
    id: 7,
    titulo: "Un color de fondo",
    enunciado: "Completa el hueco de CSS para que el fondo de la página sea azul.",
    codigo: "body {\n  ___: blue;\n}",
    respuesta: "background-color",
    pistas: [
      "Son dos palabras en inglés unidas por un guion.",
      "La primera palabra significa 'fondo' y la segunda es la del reto anterior.",
      "La respuesta es background-color."
    ]
  },
  {
    id: 8,
    titulo: "El tamaño del texto",
    enunciado: "Completa el hueco de CSS para que el texto de los párrafos sea más grande.",
    codigo: "p {\n  ___: 24px;\n}",
    respuesta: "font-size",
    pistas: [
      "Son dos palabras en inglés unidas por un guion.",
      "La primera es 'font', que significa 'letra' o 'tipo de letra'. La segunda significa 'tamaño'.",
      "La respuesta es font-size."
    ]
  },
  {
    id: 9,
    titulo: "Un botón",
    enunciado: "Completa el hueco para crear un botón que se pueda pulsar.",
    codigo: "<___>Pulsa aquí</___>",
    respuesta: "button",
    pistas: [
      "Es una palabra en inglés de seis letras.",
      "Es la palabra inglesa para 'botón'.",
      "La respuesta es button."
    ]
  },
  {
    id: 10,
    titulo: "Centrar el texto",
    enunciado: "Completa el hueco de CSS para que el texto del título quede centrado.",
    codigo: "h1 {\n  text-align: ___;\n}",
    respuesta: "center",
    pistas: [
      "Es una palabra en inglés de seis letras.",
      "Se escribe con 'c' al principio y significa 'centro'.",
      "La respuesta es center."
    ]
  }
];

const RETOS_CSS = [6, 7, 8, 10];
retos.forEach(function (reto) {
  reto.tema = RETOS_CSS.includes(reto.id) ? "CSS" : "HTML";
});