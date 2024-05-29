


async function salvarPDI() {
    var titulo = document.getElementById('adcTitulo').value;
    var subtitulo = document.getElementById('adcArea').value;
    var conteudo = document.getElementById('adcConteudo')
    var prazo = document.getElementById('adcPrazo').value;
    var tituloTarefa1 = document.getElementsByid('cAdcTarefa1').value;
    var linkTarefa1 = document.getElementById('cAdcLink1').value;


    var publicacoes = {
        titulo: titulo,
        subtitulo: subtitulo, 
        conteudo: conteudo,
        prazo: prazo,
    }
    // alert(JSON.stringify(publicacoes));
    const result = await fetch("http://localhost:3000/pdi", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(pdi)
    })
    alert(result.json());
    if (result.status==200) {
        alert("PDI criado com sucesso");
        window.open("./meusPdis.html");
    }
    else {
        alert("Não foi possivel criar publicação!");
    }
}