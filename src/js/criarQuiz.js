document.addEventListener("DOMContentLoaded", async function () {
    adicionarQuestao();
});

var numQuestao = 0;
var adicionarOpcaoBtn = document.getElementById("botaoAdicionarOpcao");
var adicionarQuestaoBtn = document.getElementById("botaoAdicionarQuestao");
var varQuestoes = [];
var varDadosQuestoes = [];

async function criarQuiz() {

    varNomeQuiz = document.getElementById("nomeQuiz").value;

    for(var i = 1; i <= numQuestao; i++){

        var opcao1 = false;
        var opcao2 = false;
        var opcao3 = false;
        var opcao4 = false;

        if(document.getElementById(`opcao1${i}`).checked){
            opcao1 = true;
        }
        else if(document.getElementById(`opcao2${i}`).checked){
            opcao2 = true;
        }
        else if(document.getElementById(`opcao3${i}`).checked){
            opcao3 = true;
        }
        else if(document.getElementById(`opcao4${i}`).checked){
            opcao4 = true;
        }
        else{
            alert("Selecione uma Questão certa");
            callback();
        }

        varDadosQuestoes = [
            varImagem = document.getElementById(`imagem${i}`).value,
            varTextoQuestao = document.getElementById(`textoQuestao${i}`).value,
            varOpcao = [opcao1,
                        opcao2,
                        opcao3,
                        opcao4],
            varTextoOpcao = [document.getElementById(`textoOpcao1${i}`).value,
                            document.getElementById(`textoOpcao2${i}`).value,
                            document.getElementById(`textoOpcao3${i}`).value,
                            document.getElementById(`textoOpcao4${i}`).value,]
        ]
        varQuestoes[i-1] = varDadosQuestoes;

    }

    var quizes = {
        varNomeQuiz: varNomeQuiz,
        varQuestoes: varQuestoes
        //varNomeQuiz: varNomeQuiz,
        //varImagem: varImagem,
        //varTextoQuestao: varTextoQuestao,
        //varOpcao: varOpcao,
        //varTextoOpcao: varTextoOpcao
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

    window.location.href = 'paginaInicial.html';
}



function adicionarQuestao() {

    document.getElementById('questao').innerHTML +=
    `<h2>Questão ${numQuestao+1}</h2>
    <label for="imagem" class="labelImagem" id="labelImagem">Insira aqui a Imagem</label>
    <input type="file" accept="image/png" class="imagem" id="imagem${numQuestao+1}" name="imagem">
    <label for="textoQuestao" class="labelTextoQuestao" id="labelTextoQuestao">Insira aqui o texto da questão</label>
    <input type="text" class="textoQuestao" id="textoQuestao${numQuestao+1}" name="textoQuestao">
    <input type="radio" class="opcao" name="${numQuestao+1}" id="opcao1${numQuestao+1}" name="opcao">
    <label for="opcao1" class="labelOpcao" id="labelOpcao">Opção 1</label>
    <input type="text" class="textoOpcao" id="textoOpcao1${numQuestao+1}" placeholder="Insira aqui o texto da opção">
    <input type="radio" class="opcao" name="${numQuestao+1}" id="opcao2${numQuestao+1}" name="opcao">
    <label for="opcao1" class="labelOpcao" id="labelOpcao">Opção 2</label>
    <input type="text" class="textoOpcao" id="textoOpcao2${numQuestao+1}" placeholder="Insira aqui o texto da opção">
    <input type="radio" class="opcao" name="${numQuestao+1}" id="opcao3${numQuestao+1}" name="opcao">
    <label for="opcao1" class="labelOpcao" id="labelOpcao">Opção 3</label>
    <input type="text" class="textoOpcao" id="textoOpcao3${numQuestao+1}" placeholder="Insira aqui o texto da opção">
    <input type="radio" class="opcao" name="${numQuestao+1}" id="opcao4${numQuestao+1}" name="opcao">
    <label for="opcao1" class="labelOpcao" id="labelOpcao">Opção 4</label>
    <input type="text" class="textoOpcao" id="textoOpcao4${numQuestao+1}" placeholder="Insira aqui o texto da opção">`
    //<input type="button" id="botaoAdicionarOpcao" value="+">`
    
    numQuestao++;
}