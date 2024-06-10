//import idQuiz from "./relatorioQuiz.js";

document.addEventListener("DOMContentLoaded", async function () {
    
    carregaNomeQuiz();
});

var localStorageId = localStorage.getItem("idQuiz");
console.log(localStorageId);

var numQuiz;

async function carregaNomeQuiz(){

    const result = await fetch("http://localhost:3000/quiz")
    resultado = await result.json();
    console.log (resultado);

    for(var i = 0; i < resultado.length; i++){

        if(localStorageId == resultado[i]._id){
            numQuiz = i;

            document.getElementById("areaTexto").innerHTML +=
            `<h1>Deseja iniciar o ${resultado[numQuiz].varNomeQuiz}</h1>`
            console.log(resultado[numQuiz].varNomeQuiz);
        }
    }
}

function avanca(){
    window.location.href = './respostasQuiz.html';
}

function volta(){
    window.location.href = './relatorioQuiz.html';
}