import { funcoes } from "./funcoes.js";

var categoria = '';
var arquivoImagem;

var adicionarSetorBtn = document.querySelector(".adicionarSetor");
document.addEventListener("DOMContentLoaded", function () {
    var inputSetor = document.getElementById("inputSetor");
    var listaSetores = document.getElementById("listaSetores");

    adicionarSetorBtn.addEventListener("click", function () {
        var setor = inputSetor.value.trim();
        if (setor !== "") {
            var novoItem = document.createElement("li");
            novoItem.textContent = setor;
            listaSetores.appendChild(novoItem);
            inputSetor.value = ""; // Limpar o campo de input após adicionar o setor

            categoria += setor + " ";
            console.log(categoria);
        } else {
            alert("Por favor, insira um setor válido.");
        }
    });
});


async function salvarPublicacao(evento) {
    evento.preventDefault();
    var titulo = document.getElementById('tituloPublicacao').value;
    var descricao = document.getElementById('resumoPublicacao').value;
    var autor = funcoes.acharCookie("id=");
    var imagem = document.getElementById('enviarImagem');
    var texto = document.getElementById('textoPublicacao').value;

    var publicacoes = {
        titulo: titulo,
        descricao: descricao,
        autor: autor,
        imagem: imagem.src,
        texto: texto,
        categorias: categoria
    }

    const result = await fetch("https://api-intranet.vercel.app/publicacao", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(publicacoes)
    });
    if (result.status == 201) {
        alert("Publicação criada com sucesso!");
        window.location.href = './paginaInicial.html';
    }
    else {
        alert("Não foi possivel criar publicação!");
    }
}

const formulario = document.getElementById("formPublicacao");
formulario.addEventListener("submit", evento => salvarPublicacao(evento));

const imagem = document.getElementById('enviarImagem')
const foto = document.getElementById('foto')
foto.addEventListener("change", previewFile);

function previewFile({ target }) {
    const file = target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        imagem.src = reader.result;
        arquivoImagem = reader.result;
        imagem.style.display="block";
    };
}
