document.addEventListener("DOMContentLoaded", async function () {
    const result = await fetch("http://localhost:3000/pdi");
    const pdiList = await result.json();

    pdiList.forEach(pdi => {
            const buttonText = pdi.status ? "Feito" : "Concluir ação";

            const dataFormatada = formatDate(pdi.prazo);
    
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
                        
                        <button>
                            ${buttonText}
                        </button>
                    </div>
                    </div>
                            
                    <div class="rodape">
                        <p class="prazo">Prazo: ${dataFormatada}</p>
                        <div class="botoesRodape">
                            <button><img src="/img/Icons/edit.svg" alt=""></button>
                            <button><img src="/img/Icons/deleteazul.png" alt=""></button>
                        </div>
                    </div>
                </div>
                `;


        function formatDate(date) {
            const d = new Date(date);
            const year = d.getFullYear();
            let month = (d.getMonth() + 1).toString().padStart(2, '0');
            let day = d.getDate().toString().padStart(2, '0');
            return `${day}/${month}/${year}`;
        }

        
    });
});


