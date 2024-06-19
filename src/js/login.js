async function validarUsuario() {
    const result = await fetch("https://api-intranet.vercel.app/usuarios")
    const usuarios = await result.json();
    let nomeUsuario = document.getElementById('usuario');
    let senhaUsuario = document.getElementById('senha');

    var index = usuarios.findIndex(x => x.nome == nomeUsuario.value && x.senha == senhaUsuario.value);

    var idUsuarioLocal= usuarios[index]._id;
    var categoriaUsuarioLocal= usuarios[index].equipe;

    localStorage.setItem("usuarioLocal", idUsuarioLocal);
    localStorage.setItem("categoriaUsuarioLocal", categoriaUsuarioLocal);
    localStorage.setItem("Usuario", usuario);

    if (index > 0) {
        document.cookie = `id=${usuarios[index]._id}`;
        window.location.href = './html/paginaInicial.html';
    } else {
        nomeUsuario.value = "";
        senhaUsuario.value = ""
        document.getElementById("mensagem").value = "Senha ou usuario não encontados";
    }
}
