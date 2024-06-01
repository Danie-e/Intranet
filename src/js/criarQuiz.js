var adicionarOpcaoBtn = document.getElementById("botaoAdicionarOpcao");
var adicionarQuestaoBtn = document.getElementById("botaoAdicionarQuestao");

async function criarQuiz() {
    var varNomeQuiz = document.getElementById("nomeQuiz").value;
    var varImagem = document.getElementById("imagem").value;
    var varTextoQuestao = document.getElementById("textoQuestao").value;
    var varOpcao = document.getElementById("opcao").value;
    var varTextoOpcao = document.getElementById("textoOpcao").value;

    var quizes = {
        varNomeQuiz: varNomeQuiz,
        varImagem: varImagem,
        varTextoQuestao: varTextoQuestao,
        varOpcao: varOpcao,
        varTextoOpcao: varTextoOpcao
    }

    const result = await fetch("http://localhost:3000/quiz", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(quizes)
    })
    var resultado = await result.json();
    console.log (resultado);
    if (resultado.status==200) {
        alert(resultado.message);
        window.open("./paginaInicial.html");
    }
    else {
        alert(resultado.message);
    }
}