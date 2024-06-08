document.addEventListener("DOMContentLoaded", async function () {

    //var id = localStorage.getItem("usuarioLocal");

    const meuSet = new Set();

// Adicionando valores ao Set
    // meuSet.add('valor1');
    // meuSet.add('valor1');

    //



    function adicionarSet(valor){

        var encontrou = false

        meuSet.forEach(valorExistentes => {

            if(valorExistentes==valor){
                encontrou = true;
            };

        });

        if(!encontrou){
            meuSet.add(valor);
        }

    }

    

    const result = await fetch("http://localhost:3000/sugestoespdi/");
    const pdiList = await result.json();

    pdiList.forEach(pdi => {

            //const buttonText = pdi.status ? "Feito" : "Concluir ação";
            adicionarSet(pdi.subtitulo);
    
            document.getElementById('todosPdis').innerHTML +=
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

                //const arrayDeValores = Array.from(meuSet);
                

                
                // arrayDeValores.forEach(valor => {
                //     `
                //         <button>${valor}</button>
                //         `
                // });
                // ;

                //localStorage.setItem("pdiId", pdi._id);

                
            
        /*function formatDate(date) {
            const d = new Date(date);
            const year = d.getFullYear();
            let month = (d.getMonth() + 1).toString().padStart(2, '0');
            let day = d.getDate().toString().padStart(2, '0');
            return `${day}/${month}/${year}`;
        }*/

    });

    meuSet.forEach(valor => {
        document.getElementById('categoriaSugestaoPdi').innerHTML +=
       
            //localStorage.setItem("meuSet", valor);
            `
            <button onclick="filtroSugestoes('${valor}')">${valor}</button>
            `
          });
});

async function aderirPdi(valor){
    localStorage.setItem("sugestaopdi", valor);

    window.open("./CriarPDIcomSugestao.html");
    
};

async function filtroSugestoes(valor){
    localStorage.setItem("filtrosugestaopdi", valor);

    window.open("./VerSugestoesPdicomFiltro.html");
    
};