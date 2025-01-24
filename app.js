// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const inputAmigo = document.querySelector('#amigo');

// FUNCIÓN: Para añadir un amigo en el array
function agregarAmigo() {
  const nombre = captuarvalor();
  if (validarEntrada(nombre)) {
    listaAmigos.push(nombre);
    limpiarInput();
  }
  console.log(listaAmigos);
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

// FUNCIÓN: Limpia el campo de entrdad
function limpiarInput() {
  inputAmigo.value = '';
}
