document.addEventListener("DOMContentLoaded", async function () {
    
    carregaRespostasQuiz();
});

var localStorageId = localStorage.getItem("idQuiz");
console.log(localStorageId);

var numQuiz;
var numQuestao = 0;
var resultado;
var selecionado;
var alternativaCorreta;
var respostas = [];
var acertou;
var questoesFeitas = 0;
var questaoRespondida = [];

async function carregaRespostasQuiz(){

    const result = await fetch("https://api-intranet.vercel.app/quiz")
    resultado = await result.json();
    console.log (resultado);

    for(var i = 0; i < resultado.length; i++){

        if(localStorageId == resultado[i]._id){
            numQuiz = i;

            for(var j = 1; j <= resultado[numQuiz].varQuestoes.length; j++){
                document.getElementById("selecionaQuestao").innerHTML +=
                `<button class="botaoSelecao" id="Questão${j}" type="button">${j}</button>`
            };
            
        }
    }

    window.onload = mudaQuestao(1);
}

async function mudaQuestao(valor){

    for(var k = 0; k < resultado[numQuiz].varQuestoes.length; k++){

        if(questaoRespondida[k] == 1){

        }

        if(numQuestao == valor){
            k = 10;
        }
        else{
            numQuestao = valor;
            k = valor-1;

            document.getElementById("imagemQuiz").innerHTML =
            `<img src="${resultado[numQuiz].varQuestoes[k][0]}" alt="Imagem Quiz">`

            document.getElementById("textoPergunta").innerHTML =
            `<p>${resultado[numQuiz].varQuestoes[k][1]}</p>`

            document.getElementById("espacoBotaoQuiz").innerHTML =
            `<button class="botaoQuiz" id="botaoQuiz${k}1" type="button" onclick="selecionaResposta(${numQuiz}, ${k}, ${1})">${resultado[numQuiz].varQuestoes[k][3][0]}</button>
                <button class="botaoQuiz" id="botaoQuiz${k}2" type="button" onclick="selecionaResposta(${numQuiz}, ${k}, ${2})">${resultado[numQuiz].varQuestoes[k][3][1]}</button>
                <button class="botaoQuiz" id="botaoQuiz${k}3" type="button" onclick="selecionaResposta(${numQuiz}, ${k}, ${3})">${resultado[numQuiz].varQuestoes[k][3][2]}</button>
                <button class="botaoQuiz" id="botaoQuiz${k}4" type="button" onclick="selecionaResposta(${numQuiz}, ${k}, ${4})">${resultado[numQuiz].varQuestoes[k][3][3]}</button>`
        }

    }
}

function selecionaResposta(numQuiz, questao, alternativa) {

    var btn;

    for(var i = 0; i < resultado[numQuiz].varQuestoes[questao][2].length; i++){

        if(resultado[numQuiz].varQuestoes[questao][2][i] == true){
            alternativaCorreta = i;
        }
    }

    if(alternativa == 1){

        if(alternativaCorreta+1 == alternativa){
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "green";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "green";
        }
        else{
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "red";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "red";

            if(alternativaCorreta+1 == 2){
                btn = document.getElementById(`botaoQuiz${questao}2`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 3){
                btn = document.getElementById(`botaoQuiz${questao}3`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 4){
                btn = document.getElementById(`botaoQuiz${questao}4`)
                btn.style.backgroundColor = "green";
            }
            
        }
        
        selecionado = 1;
    }
    else if(alternativa == 2){

        if(alternativaCorreta+1 == alternativa){
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "green";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "green";
        }
        else{
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "red";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "red";

            if(alternativaCorreta+1 == 1){
                btn = document.getElementById(`botaoQuiz${questao}1`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 3){
                btn = document.getElementById(`botaoQuiz${questao}3`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 4){
                btn = document.getElementById(`botaoQuiz${questao}4`)
                btn.style.backgroundColor = "green";
            }
        }

        selecionado = 2;
    }
    else if(alternativa == 3){

        if(alternativaCorreta+1 == alternativa){
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "green";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "green";
        }
        else{
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "red";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "red";

            if(alternativaCorreta+1 == 1){
                btn = document.getElementById(`botaoQuiz${questao}1`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 2){
                btn = document.getElementById(`botaoQuiz${questao}2`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 4){
                btn = document.getElementById(`botaoQuiz${questao}4`)
                btn.style.backgroundColor = "green";
            }
        }

        selecionado = 3;
    }
    else if(alternativa == 4){

        if(alternativaCorreta+1 == alternativa){
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "green";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "green";
        }
        else{
            btn = document.getElementById(`botaoQuiz${questao}1`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}2`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}3`)
            btn.style.backgroundColor = "#ffffff";
            btn = document.getElementById(`botaoQuiz${questao}4`)
            btn.style.backgroundColor = "red";
            btn = document.getElementById(`Questão${questao+1}`)
            btn.style.backgroundColor = "red";

            if(alternativaCorreta+1 == 1){
                btn = document.getElementById(`botaoQuiz${questao}1`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 3){
                btn = document.getElementById(`botaoQuiz${questao}3`)
                btn.style.backgroundColor = "green";
            }
            else if(alternativaCorreta+1 == 2){
                btn = document.getElementById(`botaoQuiz${questao}2`)
                btn.style.backgroundColor = "green";
            }
        }

        selecionado = 4;
    }

    if(alternativaCorreta+1 == selecionado){
        acertou = true;
    }
    else{
        acertou = false;
    }
    
    respostas[questao] = acertou;

    questoesFeitas++;

    if(questoesFeitas == ((resultado[numQuiz].varQuestoes.length))){
        setTimeout(() => {
            gerarResultado();
          }, 1000);
    }

    setTimeout(() => {
        mudaQuestao(questao+2);
      }, 1000);      
}

function gerarResultado(){

   var resultadoQuiz = 0;
   var porcentagem;
   console.log(respostas.length);
   console.log(respostas);

    for(var i = 0; i < respostas.length; i++){

        if(respostas[i] == true){
            resultadoQuiz++;
        }
    }

    porcentagem = Math.round((resultadoQuiz / respostas.length) * 100);


    document.getElementById("imagemQuiz").innerHTML = ``;
    document.getElementById("imagemQuiz").style.display = "none";

    document.getElementById("textoPergunta").innerHTML =``

    document.getElementById("espacoBotaoQuiz").innerHTML =``

    document.getElementById("mostraResultado").innerHTML =
        `<section id="resultado">
            <p>Seu total de acertos foi:</p>
            <p>${resultadoQuiz}/${respostas.length}</p>
            <p>Sua porcentagem de acertos foi:</p>
            <p>${porcentagem}%</p>  
        </section>
        <button class="botaoFinalizaQuiz" type="button" onclick="voltar()">Finalizar Quiz</button>`
}

function voltar() {
    window.location.href = './paginaInicial.html';
}