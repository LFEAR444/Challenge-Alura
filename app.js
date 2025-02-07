//Crear un array para almacenar los nombres
let amigos =[];

//Implementa una función para agregar amigos
function agregarAmigo(){
    let tpInput = document.getElementById("amigo").value;
    if(tpInput === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(tpInput);
        console.log(amigos);
        document.getElementById("amigo").value = "";
    }
}

//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

}
