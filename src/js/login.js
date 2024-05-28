
async function validarUsuario() {
    const result = await fetch("http://localhost:3000/usuarios")
    console.log(result);
    const usuarios = await result.json();
    let nomeUsuario = document.getElementById('usuario');
    let senhaUsuario = document.getElementById('senha');

    var index = usuarios.findIndex(x => x.nome == nomeUsuario.value && x.senha == senhaUsuario.value)

    if (index > 0) {
        document.cookie = `id=${usuarios[index]._id}`;
        window.location.href = './html/paginaInicial.html';
    } else {
        var novoTexto = "Senha ou usuario não encontados";
        nomeUsuario.value = "";
        senhaUsuario.value = ""
        document.getElementById("mensagem").innerHTML = novoTexto;
    }

}
