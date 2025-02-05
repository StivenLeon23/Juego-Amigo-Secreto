# Juego-Amigo-Secreto
Juego de amigo secreto alura

Secret Friend App

Descripción

La Secret Friend App es una aplicación sencilla y divertida que permite organizar un sorteo de amigo secreto de manera digital. Los usuarios pueden agregar nombres a una lista y luego sortear aleatoriamente uno de ellos, mostrando el nombre del amigo seleccionado en pantalla.

Funcionalidades

Agregar Amigos: Los usuarios pueden ingresar nombres mediante un campo de texto. Cada nombre válido se añade a una lista visual.

Visualización Dinámica: La lista de amigos se actualiza automáticamente al agregar nuevos participantes.

Sorteo Aleatorio: Permite seleccionar un nombre aleatorio de los amigos ingresados.

Validación: Mensajes de error si el campo de texto está vacío o si se intenta sortear sin amigos disponibles.

Tecnologías

HTML5

CSS3

JavaScript

Cómo Usar

Abre el archivo HTML asociado a esta aplicación en un navegador web.

Ingresa los nombres de los amigos en el campo de texto.

Haz clic en el botón para agregar cada nombre.

Visualiza la lista actualizada de amigos.

Haz clic en el botón de "Sortear Amigo" para obtener un nombre aleatorio.

Ejemplo de Código

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSorteado = nombresAmigos[indiceAleatorio];
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

Mejoras Futuras

Implementación de almacenamiento local para persistir los datos.

Diseño más atractivo usando frameworks como Bootstrap.

Opciones para compartir el resultado del sorteo.

Contribuciones

Si deseas contribuir a mejorar esta aplicación, siéntete libre de hacer un fork y enviar un pull request.
