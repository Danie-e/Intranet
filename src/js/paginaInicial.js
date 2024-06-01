
document.addEventListener("DOMContentLoaded", async function () {
    const result = await fetch("http://localhost:3000/publicacao")

    const publicacoes = await result.json();
    publicacoes.forEach(element => {

        let categorias = `${element.categorias}`;
        const arrayCategorias = categorias.split(' ');
        var listaCategorias = '';
        arrayCategorias.forEach(elemento => {
            listaCategorias += ` <li> ${elemento} </li> `
        });

        var img = element.autor.imagem != '' ? element.autor.imagem : "../img/Icons/account_circle.svg";
        document.getElementById('paginaInicialPublicacoes').innerHTML += `
            <div class="card" id="${element._id}">
                <img src="${img}" id="imagem">
                <div class="publicacao">
                    <h3 class="tituloCard">${element.titulo}</h2>
                        <p class="descricaoCard">${element.descricao}</p>
                        <div class="favoritoCategorias">
                            <ul id="categorias">
                               ${listaCategorias}
                            </ul>
                            <button class="favoritar"></button>
                        </div>
                </div>
            </div> `
    });
});

var card = document.getElementById('paginaInicialPublicacoes');
card.onclick = function (elemento) {
    window.location.href = 'publicacao.html';
    document.cookie = `idPublicacao=${elemento.target.id}; path=/`;
};
