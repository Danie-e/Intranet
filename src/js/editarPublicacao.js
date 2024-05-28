
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
                            <button class="deletar" onclick="deletarPublicacao()"></button>
                            <button class="editar"  onclick="editarPublicacao()"></button>
                            </div>
                            
                        </div>
                </div>
            </div>

        `

    });
}


function deletarPublicacao() {
    document.preventDefault();
    alert("publicação deletada")
}

function editarPublicacao() { alert("publicação editada") }

var card = document.getElementById('EdicaoPublicacoes');
card.onclick = function (elemento) {
    window.location.href = 'publicacao.html';
    document.cookie = `idPublicacao=${elemento.target.id}; path=/`;
};