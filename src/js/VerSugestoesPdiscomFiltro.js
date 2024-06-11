document.addEventListener("DOMContentLoaded", async function () {
    const result = await fetch("https://api-intranet.vercel.app/sugestoespdi/");
    const pdiList = await result.json();

    //var id = localStorage.getItem("usuarioLocal");

    const meuSet = new Set();

    function adicionarSet(valor) {

        var encontrou = false

        meuSet.forEach(valorExistentes => {
            if (valorExistentes == valor) {
                encontrou = true;
            };
        });

        if (!encontrou) {
            meuSet.add(valor);
        }
    }

    var filtro = localStorage.getItem("filtrosugestaopdi");
    pdiList.forEach(pdi => {
        adicionarSet(pdi.subtitulo);
        if (pdi.subtitulo == filtro) {
            document.getElementById('todosPdisComFiltro').innerHTML +=
                `
                    <div class="pdi">
                        <div class="cabecalhoPdi">
                            <div class="titulo">
                                <span>${pdi.titulo}</span>
                                <span>${pdi.subtitulo}</span>
                            </div>
                            
                            <div class="conteudo">
                                <p>${pdi.conteudo}</p>
                            </div>
                        </div>
                
                        <div class="todasTarefas">
                            <div class="tarefa">
                            <div class="conteudoTarefa">
                                <p class="nomeTarefa">
                                    ${pdi.tituloTarefa1}
                                </p>
                                <a class="descricaoTarefa" href="${pdi.linkTarefa1}" target="_blank">
                                    ${pdi.linkTarefa1}
                                </a>
                            </div>
                            
                            
                        </div>
                        </div>
                                
                        <div class="rodape">
                            <p> <p>
                            <button onclick="aderirPdi('${pdi._id}')">
                                Aderir a PDI
                            </button>
                        </div>
                    </div>
                    `;
        };


    });

    meuSet.forEach(valor => {
        document.getElementById('categoriaSugestaoPdi').innerHTML +=
            //localStorage.setItem("meuSet", valor);
            `<button onclick="filtroSugestoes('${valor}')">${valor}</button>`
    });
});



