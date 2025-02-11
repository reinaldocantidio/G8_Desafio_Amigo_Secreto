
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


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo foi adicionado para o sorteio.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}