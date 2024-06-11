document.addEventListener("DOMContentLoaded", async function () {

    var id = localStorage.getItem("usuarioLocal");

    const result = await fetch("https://api-intranet.vercel.app/pdi/"+id);
    const pdiList = await result.json();

    //localStorage.setItem("list", pdiList);

    pdiList.forEach(pdi => {
            //const buttonText = pdi.status ? "Feito" : "Concluir ação";

            if (pdi.status){
    
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
                    </div>
                    `;


            /*function formatDate(date) {
                const d = new Date(date);
                const year = d.getFullYear();
                let month = (d.getMonth() + 1).toString().padStart(2, '0');
                let day = d.getDate().toString().padStart(2, '0');
                return `${day}/${month}/${year}`;
            }*/
        }   
        
    });
});


