import { funcoes } from "./funcoes.js";

var idUsuario = '';
var arquivoImagem;

document.addEventListener("DOMContentLoaded", async function () {
    idUsuario = funcoes.acharCookie('editarUsuario=');
    const usuario = await funcoes.procurarUsuario(idUsuario);

    const nome = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const equipe = document.getElementById("equipe");
    const tipo = document.getElementById("tipo");
    const imagem = document.getElementById('enviarImagem')

    nome.value = usuario.nome;
    senha.value = usuario.senha;
    equipe.value = usuario.equipe;
    tipo.value = parseInt(usuario.tipo);
    imagem.src = usuario.imagem;

});

const atualizarUsuario = document.getElementById('confirmar');
atualizarUsuario.addEventListener("click", async function () {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const equipe = document.getElementById("equipe").value;
    const tipo = document.getElementById("tipo").value;

    var img = arquivoImagem ? imagem.src : arquivoImagem;

    var novoUsuario = {
        nome: nome,
        senha: senha,
        equipe: equipe,
        tipo: tipo,
        imagem: img
    };

    const resultado = await fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(novoUsuario),
    });

    const result = await resultado.json();
    if (result.status = 200) {
        alert(result.message);
        window.location.href = "paginaInicial.html"
    }
    else
        alert(result.message)
});


const imagem = document.getElementById('imagem')
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
};
