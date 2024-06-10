document.addEventListener("DOMContentLoaded", async function () {

    const result = await fetch("http://localhost:3000/pdi/");
    const pdiList = await result.json();

    var IdPdiAlterar = localStorage.getItem("IdPdiAlterar");

    //localStorage.setItem("idPdi", "teste");

    pdiList.forEach(pdi => {

        
        if(pdi._id==IdPdiAlterar){

            //localStorage.setItem("idPdi", pdi._id);
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
    <button onclick="alterarPDInoBanco('${pdi._id}')">Alterar</button>
    <a href="MeusPDIs.html"><button onclick="()=>{alert('Cancelando cadastro de publicação.')}">Cancelar</button></a>

</div>
</div>
                
                `;

        }
        

    

    

            });
});


async function alterarPDInoBanco(req) {

    var titulo = document.getElementById('adcTitulo').value;
    var subtitulo = document.getElementById('adcArea').value;
    var conteudo = document.getElementById('adcConteudo').value;
    var prazo = document.getElementById('adcPrazo').value;
    var tituloTarefa1 = document.getElementById('cAdcNomeTarefa1').value;
    var linkTarefa1 = document.getElementById('cAdcLink1').value;


    var pdi = {
        titulo: titulo,
        subtitulo: subtitulo,
        conteudo: conteudo,
        prazo: prazo,
        tituloTarefa1: tituloTarefa1,
        linkTarefa1: linkTarefa1,
        //status: false,
        //autor: localStorage.getItem("usuarioLocal"),
    }
    // alert(JSON.stringify(publicacoes));
    const result = await fetch("http://localhost:3000/pdi/"+req, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(pdi)
    });
    console.log(result);
    if (result.ok) {
        alert("PDI criado com sucesso");
        window.open("./meusPdis.html");
    }
    else {
        alert(`${result.message} - Não foi possivel alterar PDI!`);
    }
}

