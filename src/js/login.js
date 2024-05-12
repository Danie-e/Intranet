var usuarios = [
    {
        "_id": {
            "$oid": "6633d7eace7caf61e75d450c"
        },
        "nome": "Admin",
        "senha": "Admin",
        "equipe": "RH",
        "tipo": 1
    }, {
        "_id": {
            "$oid": "663fcbac94b546e3d426573b"
        },
        "nome": "TesteRH",
        "senha": "Admin",
        "equipe": "RH",
        "tipo": 1
    }, {
        "_id": {
            "$oid": "663fcc0b94b546e3d426573d"
        },
        "nome": "TesteGerente",
        "senha": "Admin",
        "equipe": "Gerente",
        "tipo": 2
    }, {
        "_id": {
            "$oid": "663fcc1a94b546e3d426573f"
        },
        "nome": "TesteUsuario",
        "senha": "Admin",
        "equipe": "Usuario",
        "tipo": 3
    }
]

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

function validarUsuario() {
    let nomeUsuario = document.getElementById('usuario').value;
    let senhaUsuario = document.getElementById('senha').value;

    // Procura por uma correspondência
    var pessoaEncontrada = usuarios.find(function (pessoa) {
        return pessoa.nome === nomeUsuario && pessoa.senha === senhaUsuario;
    });

    if (pessoaEncontrada) {
        window.open("./html/paginaInicial.html");
        // window.location.href = '../src/html/paginaInicial.html';
    } else {
        var novoTexto = "Senha ou usuario não encontados";
        return document.getElementById("mensagem").innerHTML = novoTexto;
    }

}
