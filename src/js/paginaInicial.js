
document.addEventListener("DOMContentLoaded", async function () {
    const result = await fetch("http://localhost:3000/publicacao")

    const publicacoes = await result.json();
    publicacoes.forEach(element => {

        document.getElementById('paginaInicialPublicacoes').innerHTML +=
            `
            <div class="publicacao">
                <img src="../img/Icons/account_circle.svg">
                <div class="card">
                    <h3 class="tituloCard">${element.titulo}</h2>
                        <p class="descricaoCard">${element.descricao}</p>
                        <div class="favoritoCategorias">
                            <ul>
                                <li>
                                    ${element.categorias}
                                </li>
                            </ul>
                            <button class="favoritar"></button>
                        </div>
                </div>
            </div>

        `

    });
})