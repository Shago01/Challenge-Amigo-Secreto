# Amigo Secreto

Este proyecto es una aplicación web simple que permite a los usuarios agregar nombres a una lista y luego seleccionar un "amigo secreto" de manera aleatoria.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Funcionalidades

1. **Agregar Amigo:** Permite ingresar nombres a una lista de amigos.
2. **Sortear Amigo Secreto:** Selecciona un nombre aleatorio de la lista de amigos.
3. **Validaciones:**
   - No permite agregar nombres vacíos.
   - No permite realizar el sorteo si la lista está vacía.
4. **Interfaz Dinámica:** La lista se actualiza visualmente al agregar amigos y realizar el sorteo.

## Estructura del Código

- `agregarAmigo()`: Agrega un nombre a la lista si la entrada es válida.
- `sortearAmigo()`: Selecciona y muestra un amigo secreto aleatorio.
- `validarEntrada(name)`: Verifica que el nombre ingresado no esté vacío.
- `capturarValor()`: Obtiene el valor del campo de entrada.
- `limpiar()`: Borra el campo de entrada, la lista y el resultado.
- `agregarLista()`: Actualiza la lista de amigos en pantalla.
- `validarLista()`: Comprueba si la lista tiene elementos antes del sorteo.
- `generarIndiceAleatorio()`: Genera un índice aleatorio para seleccionar un amigo.
- `pintarLista(lista, nombre)`: Agrega elementos a la lista en la interfaz.

## Cómo Usarlo

1. Escribe un nombre en el campo de entrada.
2. Presiona el botón "Agregar" para añadirlo a la lista.
3. Cuando la lista tenga al menos un nombre, presiona "Sortear".
4. Se mostrará el nombre del amigo secreto seleccionado.


