
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Insira um nome.");
        return;
    }

    amigos.push(nome);

    atualizarListaAmigos();

    inputAmigo.value = "";
}


function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}