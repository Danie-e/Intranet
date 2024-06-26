document.addEventListener("DOMContentLoaded", async function () {

    const result = await fetch("https://api-intranet.vercel.app/sugestoespdi/");
    const pdiList = await result.json();

    var sugestaopdiLocal = localStorage.getItem("sugestaopdi");

    //localStorage.setItem("idPdi", "teste");

    pdiList.forEach(pdi => {

        if (pdi._id == sugestaopdiLocal) {

            localStorage.setItem("idPdi", pdi._id);
            //alert("teste");

            document.getElementById('pdi').innerHTML +=
                `
            <div class="cabecalhoPdi">
                <div class="titulo">
                    <span>Título do PDI: <input type="text" value="${pdi.titulo}" placeholder="Digite o título do PDI" id="adcTitulo"></span>
                    <span>Área: <input type="text" placeholder="Digite a área do PDI" id="adcArea" value="${pdi.subtitulo}"></span>
                </div>

                <div class="conteudo">
                    <p>Conteúdo: <input value="${pdi.conteudo}" type="text" placeholder="Descreva o conteúdo do PDI como um todo, seu próposito" id="adcConteudo"></p>
                    </div>
                </div>

            <div class="todasTarefas">
                <div class="tarefa">
                    <div class="conteudoTarefa">
                        <p class="nomeTarefa">
                            Tarefa: 
                            <input value="${pdi.tituloTarefa1}" type="text" placeholder="Digite o título da tarefa do PDI" id="cAdcNomeTarefa1">
                        </p>
                        <a class="descricaoTarefa">
                            Link:
                            <input type="text" value="${pdi.linkTarefa1}" placeholder="Adicione o link, caso necessário" id="cAdcLink1">
                        </a>
                    </div>
                </div>

            </div>
    
            <div class="rodape">
                <p class="prazo">Prazo: <input type="date" placeholder="adicione o prazo" id="adcPrazo"></p>
                <div class="botoesRodape2">
                    <button onclick="salvarPDI().alert('teste')">Confirmar</button>
                    <a href="MeusPDIs.html"><button>Cancelar</button></a>
                </div>
            </div>  `;

        }
    });
});

