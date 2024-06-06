


async function salvarPDI() {
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
        status: false,
        autor: localStorage.getItem("usuarioLocal"),
    }
    // alert(JSON.stringify(publicacoes));
    const result = await fetch("http://localhost:3000/pdi", {
        method: "POST",
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
        alert(`${result.message} - Não foi possivel criar PDI!`);
    }
}