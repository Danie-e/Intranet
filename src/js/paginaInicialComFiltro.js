
document.addEventListener("DOMContentLoaded", async function () {
    const result = await fetch("https://api-intranet.vercel.app/publicacao")

    var categoriaUsuarioLocal = localStorage.getItem("categoriaUsuarioLocal");

    document.getElementById('filtroCategoria').innerHTML +=`
            <a href="paginaInicialComFiltro.html"><button>${categoriaUsuarioLocal}</button></a>
            <a href="paginaInicial.html"><button>Todos os Post's</button></a> `;

    const publicacoes = await result.json();
    publicacoes.forEach(element => {

        var categoriaPost = element.categorias

        if(categoriaPost.includes(categoriaUsuarioLocal)){
            
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
        }

    });
})