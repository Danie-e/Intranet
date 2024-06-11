document.addEventListener("DOMContentLoaded", async function () {
    //exibeAproveitamentoPessoal();
    //exibeAproveitamentoEquipe();
    //exibeNumQuizzesFeitos();
    
    exibeQuizCriados();
});

var resultado;

async function exibeQuizCriados() {

    const result = await fetch("http://localhost:3000/quiz")
    resultado = await result.json();
    console.log (resultado);
    
    for(var i = 0; i < resultado.length; i++){
        
        document.getElementById('jsCardQuiz').innerHTML +=
        `<section id="cardQuiz">
            <div>
                <p id="nomeQuiz">${resultado[i].varNomeQuiz}</p>
                <!--<p id="porcentagem">81%</p>-->
                <button type="button" id="entraQuiz" onclick="entraQuiz(resultado[${i}]._id)">Responder Quiz</button>
            </div>    
        </section>`

    }
 
};

async function entraQuiz(id) {
    localStorage.setItem("idQuiz", id);
    window.location.href = './telaInicialQuiz.html';
}

//export default idQuizEx;