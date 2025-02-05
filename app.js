//Array de Amigos
let nombresAmigos = [];

//Funcion para agregar amigos
function agregarAmigo () {
    //capturar el nombre en el campo de entrada
    let nombreIngresado = document.getElementById('amigo');
    let nombre = nombreIngresado.value.trim();

    //validar la entrada
    if (nombre === ''){
        alert('Por favor, inserta un nombre.');
        return;
    }

    //Actualizar el array de amigos
    nombresAmigos.push(nombre);

    //limpiar campo de entrada
    nombreIngresado.value ='';

    console.log('Lista de amigos:',nombresAmigos);
    //mostrar lista en pantalla
    actualizarAmigos();
}

//Funcion para actualizar la lista de amigos

function actualizarAmigos(){
    //Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    listaAmigos.innerHTML='';

    //Iterar y bucle for
    for(const amigo of nombresAmigos){
        let lista = document.createElement('li');
        lista.textContent = amigo;
        listaAmigos.appendChild(lista);
    }
}

//Funcion para sortear amigos

function sortearAmigo (){
    //Validar que la lista no esté vacia
    if(nombresAmigos.length === 0){
        alert ('No has ingresado ningun amigo.');
        return;
    }
    //gernerar un indice aleatorio
    let amigoAleatorio = Math.floor(Math.random()* nombresAmigos.length);

    //obtener el amigo sorteado
    let amigoSorteado = nombresAmigos[amigoAleatorio];

    //mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`

}