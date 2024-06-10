document.addEventListener("DOMContentLoaded", async function () {
    carregarTodasFormularios();
});

async function carregarTodasFormularios() {
    const result = await fetch("https://api-intranet.vercel.app/formulario")

    const formularios = await result.json();
    formularios.forEach(element => {
        let img = element.imagem != null ? element.imagem : "../img/Icons/account_circle.svg"
        document.getElementById('listarFormularios').innerHTML += `
            <div class="card" id="${element._id}">
                <img src="${img}" id="imagem" />
                <div class="formulario">
                    <h3 >${element.titulo}</h2>
                </div>
                <div class="botoes">
                <button class="cancelar" onclick="deletarFormulario('${element._id}')">Excluir</button>
                </div>
            </div>
        `
    });
};
async function deletarFormulario(id) {
    const result = await fetch(`https://api-intranet.vercel.app/formulario/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    const resulatado = await result.json();
    if (result.ok) {
        alert(`${resulatado.message} `);
        window.location.href = 'CRUD_Formulario.html';
    }
    else {
        alert(`${resulatado.message} `);
        window.location.href = 'CRUD_Formulario.html';
    }
};

// function editarFormulario(id) {
//     window.location.href = 'editarPesquisa.html';
//     document.cookie = `editarPesquisa = ${id}; path = /`;
// };

var card = document.getElementById('listarFormularios');
card.onclick = function (elemento) {
    if (elemento.target == "[object HTMLDivElement]")
        window.location.href = 'formulario.html';
    document.cookie = `idFormulario=${elemento.target.id}; path=/`;
};
