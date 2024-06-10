document.addEventListener("DOMContentLoaded", async function () {
    
    carregaRespostasQuiz();
});

window.onload = mudaQuestao();

var localStorageId = localStorage.getItem("idQuiz");
console.log(localStorageId);

var numQuiz;
var numQuestao = 0;

async function carregaRespostasQuiz(){

    const result = await fetch("http://localhost:3000/quiz")
    resultado = await result.json();
    console.log (resultado);

    for(var i = 0; i < resultado.length; i++){

        if(localStorageId == resultado[i]._id){
            numQuiz = i;

            for(var j = 1; j <= resultado[numQuiz].varQuestoes.length; j++){
                document.getElementById("selecionaQuestao").innerHTML +=
                `<button class="botaoSelecao" id=Questão${j} onclick="mudaQuestao(${j})"; type="button">${j}</button>`
            };
            
        }
    }

    window.onload = mudaQuestao(1);
}

async function mudaQuestao(valor){

    for(var k = 0; k < resultado[numQuiz].varQuestoes.length; k++){

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
            `<button class="botaoQuiz"; type="button">${resultado[numQuiz].varQuestoes[k][3][0]}</button>
                <button class="botaoQuiz"; type="button">${resultado[numQuiz].varQuestoes[k][3][1]}</button>
                <button class="botaoQuiz"; type="button">${resultado[numQuiz].varQuestoes[k][3][2]}</button>
                <button class="botaoQuiz"; type="button">${resultado[numQuiz].varQuestoes[k][3][3]}</button>`
        }

    }
}