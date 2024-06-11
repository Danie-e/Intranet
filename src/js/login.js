
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

    //console.log(usuarios);
    

    var index = usuarios.findIndex(x => x.nome == nomeUsuario.value && x.senha == senhaUsuario.value)

    // Local Storage
    //let nomeUsuarioLocal = document.getElementById('usuario').value;
    //localStorage.setItem("usuarioLocal", nomeUsuarioLocal);

    var idUsuarioLocal

    usuarios.forEach(usuario => {
        if(usuario.nome == nomeUsuario.value){
            idUsuarioLocal = usuario._id;
        }
    });

    //console.log(localStorage.getItem("usuarioLocal"));
    
    localStorage.setItem("usuarioLocal", idUsuarioLocal);

    var categoriaUsuarioLocal

    usuarios.forEach(usuario => {
        if(usuario.nome == nomeUsuario.value){
            categoriaUsuarioLocal = usuario.equipe;
        }
    });
    localStorage.setItem("categoriaUsuarioLocal", categoriaUsuarioLocal);


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



