// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputAmigo = document.querySelector('#amigo');
const lista = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado');

// FUNCIÓN: Para añadir un amigo en el array
function agregarAmigo() {
  const nombre = captuarvalor();
  if (validarEntrada(nombre)) {
    amigos.push(nombre);
    limpiar();
    agregarLista();
  }
  console.log(amigos);
}

function sortearAmigo() {
  if (validarLista()) {
    let amigoSecreto = amigos[generarIndiceAleatorio()];
    limpiar();
    pintarlista(resultado, `Tu amigo secreto es: ${amigoSecreto} `);
  }
}

// FUNCIÓN: Valida el valor del campo input devuelve un false si esta vacio
function validarEntrada(name) {
  if (name === '') {
    alert('Por favor, inserte un nombre');
    return false;
  }
  return true;
}

// FUNCIÓN: Retorna el valor del input
function captuarvalor() {
  return inputAmigo.value;
}

// FUNCIÓN: Limpia todo en pantalla
function limpiar() {
  inputAmigo.value = '';
  lista.innerHTML = '';
  resultado.innerHTML = '';
}

// FUNCIÓN: agregar a lista;
function agregarLista() {
  for (let i = 0; i < amigos.length; i++) {
    pintarlista(lista, amigos[i]);
  }
}

// FUNCIÓN: Valida el estado actual de la lista
function validarLista() {
  if (amigos.length === 0) {
    alert('La lista de amigos esta vacia');
    return false;
  }
  return true;
}

// FUNCIÓN: Genera un indice aleatorio
function generarIndiceAleatorio() {
  return Math.floor(Math.random() * amigos.length);
}

// FUNCIÓN: función que agrega un li por cada elemento que se le pase
function pintarlista(lista, nombre) {
  lista.innerHTML += `<li>${nombre}</li>`;
}
