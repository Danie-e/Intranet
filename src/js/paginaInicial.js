
document.addEventListener("DOMContentLoaded", async function () {
    const carrossel = document.getElementById('carrossel');
    const publicacao = await fetch("https://api-intranet.vercel.app/publicacao")

    const publicacoes = await publicacao.json();
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

    const formulario = await fetch("https://api-intranet.vercel.app/formulario")
    const formularios = await formulario.json();
    formularios.forEach(element => {
        carrossel.innerHTML += `
        <div class="cardFormulario" id="${element._id}">
            <img src="" class="cardFormulario__Imagem">
            <h2 class="cardFormulario__Titulo">${element.titulo}</h2>
            <p class="cardFormulario__Paragrafo">Novo Formulario</p>
        </div>
        `;
    });
});

var card = document.getElementById('paginaInicialPublicacoes');
card.onclick = function (elemento) {
    window.location.href = 'publicacao.html';
    document.cookie = `idPublicacao=${elemento.target.id}; path=/`;
};


var cardFormulario = document.getElementById('carrossel');
cardFormulario.onclick = function (elemento) {
    alert(elemento.target.id)
    window.location.href = 'formulario.html';
    document.cookie = `idFormulario=${elemento.target.id}; path=/`;
};

