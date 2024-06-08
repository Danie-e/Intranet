var arquivoImagem = "";

// const enviar= document.getElementsByClassName('confirmar');
// enviar.addEventListener("submit", e => async function (e) {
//     e.preventDefault();
async function criarUsuario() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const equipe = document.getElementById("equipe").value;
    const tipo = document.getElementById("tipo").value;

    var novoUsuario = {
        nome: nome,
        senha: senha,
        equipe: equipe,
        tipo: tipo,
        imagem: arquivoImagem
    };

    const resultado = await fetch("https://api-intranet.vercel.app/usuarios", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(novoUsuario),
    });
    const result = await resultado.json();

    if (result.status = 201) {
        alert(result.message);
        window.location.href = 'paginaInicial.html';
    }
    else
        alert(result.message)
};

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
