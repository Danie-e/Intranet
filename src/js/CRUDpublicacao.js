var categoria = '';

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


async function salvarPublicacao(evento) {
    evento.preventDefault();
    var titulo = document.getElementById('tituloPublicacao').value;
    var descricao = document.getElementById('resumoPublicacao').value;
    var autor = "663fcbac94b546e3d426573b"
    var imagem = document.getElementById('imagemPublicacao').value;
    var texto = document.getElementById('textoPublicacao').value;

    var publicacoes = {
        titulo: titulo,
        descricao: descricao,
        autor: autor,
        imagem: imagem,
        texto: texto,
        categorias: categoria
    }
    // alert(JSON.stringify(publicacoes));
    const result = await fetch("http://localhost:3000/publicacao", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(publicacoes)
    });
    if (result.ok) {
        alert("Publicação criada com sucesso!");
        window.location.href = './paginaInicial.html';
    }
    else {
        alert("Não foi possivel criar publicação!");
    }
}

const formulario = document.getElementById("formPublicacao");
formulario.addEventListener("submit", evento => salvarPublicacao(evento));
