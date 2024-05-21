var categoria='';

document.addEventListener("DOMContentLoaded", function () {
    var adicionarSetorBtn = document.querySelector(".adicionarSetor");
    var inputSetor = document.getElementById("inputSetor");
    var listaSetores = document.getElementById("listaSetores");

    adicionarSetorBtn.addEventListener("click", function () {
        var setor = inputSetor.value.trim();
        if (setor !== "") {
            var novoItem = document.createElement("li");
            novoItem.textContent = setor;
            listaSetores.appendChild(novoItem);
            inputSetor.value = ""; // Limpar o campo de input após adicionar o setor

            categoria += setor;
        } else {
            alert("Por favor, insira um setor válido.");
        }
    });
});


function salvarPublicacao() {
    var titulo = document.getElementById('tituloPublicacao').value;
    var descricao = document.getElementById('resumoPublicacao').value;
    var autor = "Em desenvolvimento"
    var imagem = document.getElementById('imagemPublicacao').value;
    var texto = document.getElementById('textoPublicacao').value;

    var publicacoes = {
        titulo:titulo,
        descricao:descricao,
        autor:"663fcbac94b546e3d426573b",
        imagem:imagem,
        texto:texto,
        categorias: categoria
    }
    alert("Publicação criada com sucesso!");
    fetch("http://localhost:3000/publicacao",{method:"POST", body:JSON.stringify(publicacoes)})
    window.open("./paginaInicial.html");
}