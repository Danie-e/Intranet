document.addEventListener("DOMContentLoaded", async function () {

    var id = localStorage.getItem("usuarioLocal");

    const result = await fetch("http://localhost:3000/pdi/"+id);
    const pdiList = await result.json();

    pdiList.forEach(pdi => {

        if (!pdi.status){
            //const buttonText = pdi.status ? "Feito" : "Concluir ação";
    
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
                        
                        <button onclick="concluirPDI('${pdi._id}')">
                            Concluir Tarefa
                        </button>
                    </div>
                    </div>
                            
                    <div class="rodape">
                        <p class="prazo">Prazo: ${pdi.prazo}</p>
                        <div class="botoesRodape">
                            <button onclick="alterarPDI('${pdi._id}')"><img src="/img/Icons/edit.svg" alt=""></button>
                            <button onclick="excluirPDIdobanco('${pdi._id}')" ><img src="/img/Icons/deleteazul.png" alt=""></button>
                        </div>
                    </div>
                </div>
                `;

                localStorage.setItem("pdiId", pdi._id);



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


async function alterarPDI(req) {

    localStorage.setItem("IdPdiAlterar", req);

    window.open("./EditarPDI.html");
    
};

async function concluirPDI(req) {

    alterarPDI(req, "status");

    
};

async function excluirPDIdobanco(req) {
    alert("teste com sucesso sera???");

    //fetch("http://localhost:3000/pdi/"+req){method: 'delete'};

    fetch(`http://localhost:3000/pdi/${req}`, {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('A requisição não foi bem-sucedida');
    }
    return response.json(); // Não precisamos do JSON da resposta para uma requisição DELETE
  })
  .then(() => {

    window.location.reload(false);
    console.log('Recurso excluído com sucesso');
    //atualizar a tela 
  
  })
  .catch(error => {
    console.error('Erro ao tentar excluir o recurso:', error);
  });

}