// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputAmigo = document.querySelector('#amigo');
const lista = document.querySelector('#listaAmigos');

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
}

// FUNCIÓN: agregar a lista;

function agregarLista() {
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
