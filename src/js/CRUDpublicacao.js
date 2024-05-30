
document.addEventListener("DOMContentLoaded", async function () {
    carregarTodasPublicacaoes();
});

async function carregarTodasPublicacaoes() {
    const result = await fetch("http://localhost:3000/publicacao")

    const publicacoes = await result.json();
    publicacoes.forEach(element => {

        let categorias = `${element.categorias}`;
        const arrayCategorias = categorias.split(' ');
        var listaCategorias = '';
        arrayCategorias.forEach(elemento => {
            listaCategorias +=
                `<li>
                ${elemento}
            </li> `
        });

        document.getElementById('EdicaoPublicacoes').innerHTML +=
            `
            <div class="card" id="${element._id}">
                <img src="../img/Icons/account_circle.svg">
                <div class="publicacao">
                    <h3 class="tituloCard">${element.titulo}</h2>
                        <p class="descricaoCard">${element.descricao}</p>
                        <div class="favoritoCategorias">
                            <ul id="categorias">
                               ${listaCategorias}
                            </ul>
                            <div>
                            <button class="deletar" onclick="deletarPublicacao('${element._id}')"></button>
                            <button class="editar"  onclick="editarPublicacao('${element._id}')"></button>
                            </div>
                            
                        </div>
                </div>
            </div>

        `

    });
}

async function deletarPublicacao(id) {
    const result = await fetch(`http://localhost:3000/publicacao/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    const resultado = await result.json();
    if (resultado.ok)
        alert(`${resultado.message} `);

    else {
        alert(`${resultado.message} `);
        window.location.href = 'paginaInicial.html';
    }
}

function editarPublicacao(id) {
    window.location.href = 'editarPublicacao.html';
    document.cookie = `editarPublicacao = ${id}; path = /`;
}


var card = document.getElementById('EdicaoPublicacoes');
card.onclick = function (elemento) {
    if (elemento.target == "[object HTMLDivElement]")
        window.location.href = 'publicacao.html';
    document.cookie = `idPublicacao=${elemento.target.id}; path=/`;
};