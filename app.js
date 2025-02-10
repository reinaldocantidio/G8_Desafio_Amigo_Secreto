
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    atualizarListaAmigos();

    inputAmigo.value = "";
}


