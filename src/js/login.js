
// function validarUsuario() {
//     let nomeUsuario = document.getElementById('usuario').value;
//     let senhaUsuario = document.getElementById('senha').value;
//     if (usuarios.find(e => {e.nome == nomeUsuario && e.senha == senhaUsuario})) {
//         window.location.href = 'html/paginaInicial.html'
//     }
//     else {
//         document.getElementById('mensagem').value = "Senha ou usuario não encontados";
//         nomeUsuario.value = '';
//         senhaUsuario.value = '';
//     }
// }
// document.addEventListener(fetch)

async function validarUsuario() {
    const result = await fetch("http://localhost:3000/usuarios")
    console.log(result);
    const usuarios = await result.json();
    let nomeUsuario = document.getElementById('usuario');
    let senhaUsuario = document.getElementById('senha');

    var index = usuarios.findIndex(x => x.nome == nomeUsuario.value && x.senha == senhaUsuario.value)

    if (index > 0) {
        // window.open("./html/paginaInicial.html");
        window.location.href = './html/paginaInicial.html';
    } else {
        var novoTexto = "Senha ou usuario não encontados";
        nomeUsuario.value = "";
        senhaUsuario.value = ""
        document.getElementById("mensagem").innerHTML = novoTexto;
    }

}
