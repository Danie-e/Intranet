document.addEventListener("DOMContentLoaded", async function () {
    carregarTodasUsuarios();
});

async function carregarTodasUsuarios() {
    const result = await fetch("https://api-intranet.vercel.app/usuarios")

    const usuarios = await result.json();
    usuarios.forEach(element => {
        let img = element.imagem != null ? element.imagem : "../img/Icons/account_circle.svg"
        document.getElementById('listarUsuarios').innerHTML += `
            <div class="card" id="${element._id}">
                <img src="${img}" id="imagem" />
                <div class="publicacao">
                    <h3 >${element.nome}</h2>
                    <p >${element.equipe}</p>
                </div>
                <div>
                <button class="cancelar" onclick="deletarUsuario('${element._id}')">Excluir</button>
                <button class="botaoEditar" onclick="editarUsuario('${element._id}')">Editar</button>
                </div>
            </div>
        `
    });
};
async function deletarUsuario(id) {
    const result = await fetch(`https://api-intranet.vercel.app/usuarios/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    
    if (result.ok) {
        alert(`${result.message} `);
        window.location.href = "paginaInicial.html";
    }
    else {
        alert(`${result.message} `);
        window.location.href = 'CRUD_Usuario.html';
    }
};

function editarUsuario(id) {
    window.location.href = 'editarUsuario.html';
    document.cookie = `editarUsuario = ${id}; path = /`;
};
