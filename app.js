//Crear un array para almacenar los nombres
let amigos =[];
let amigoSorteado = 0;

//Implementa una función para agregar amigos
function agregarAmigo(){
    let tpInput = document.getElementById("amigo").value;
    if(tpInput === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(tpInput);
        console.log(amigos);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }

}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if(amigos.length === 0){
        alert("No agregaste amigos para sortear");
        return; 
    } else {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").textContent = "El nombre sorteado es: " + amigoSorteado;
    }
}
//reiniciar juego

function recargarPagina() {
    document.getElementById("reiniciarJuego").addEventListener("click", function() {
        location.reload();
    });
}


recargarPagina();