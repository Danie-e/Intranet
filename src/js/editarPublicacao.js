import { funcoes } from "./funcoes.js";

var idpublicacao = '';
var categoria = '';
var arquivoImagem = '';

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

document.addEventListener("DOMContentLoaded", async function () {
    idpublicacao = funcoes.acharCookie('editarPublicacao=');
    const dados = await funcoes.procurarPublicacao(idpublicacao);

    // let categorias = `${dados.categorias.trim()}`;
    // const arrayCategorias = categorias.split(' ');
    // var listaCategorias = '';
    // arrayCategorias.forEach(element => {
    //     listaCategorias += `<li> ${element} </li> `
    // });

    let tituloPagina = document.getElementById('nomePublicacao');
    let titulo = document.getElementById('tituloPublicacao');
    let descricao = document.getElementById('resumoPublicacao');
    var imagem = document.getElementById('enviarImagem');
    let texto = document.getElementById('textoPublicacao');
    let categoria = document.getElementById('listaSetores');

    tituloPagina.value = dados.titulo;
    titulo.value = dados.titulo;
    descricao.value = dados.descricao;
    texto.value = dados.texto;
    // alert (dados.imagem)
        imagem.src =dados.imagem;
    // categoria.innerHTML = listaCategorias;
})


async function atualizarPublicacao(evento) {
    evento.preventDefault();
    let titulo = document.getElementById('tituloPublicacao').value;
    let descricao = document.getElementById('resumoPublicacao').value;
    var imagem = document.getElementById('enviarImagem');
    let texto = document.getElementById('textoPublicacao').value;

    var publicacoes = {
        titulo: titulo,
        descricao: descricao,
        imagem: imagem,
        texto: texto,
        categorias: categoria,
        imagem: imagem.src
    }
    console.log(JSON.stringify(publicacoes));
    const resultado = await fetch(`http://localhost:3000/publicacao/${idpublicacao}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(publicacoes)
    });
    const result = await resultado.json();
    if (result.status = 200) {
        alert(result.message);
        window.location.href = './paginaInicial.html';
    }
    else {
        alert(result.message);
    }
}

const excluir = document.getElementById('excluirPublicacao');
excluir.addEventListener("click", function () {
    funcoes.deletarPublicacao(idpublicacao);
});

const formulario = document.getElementById("formPublicacao");
formulario.addEventListener("submit", evento => atualizarPublicacao(evento));


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
    };
}
