import { funcoes } from "./funcoes.js";

document.addEventListener("DOMContentLoaded", async function () {
    const idFormulario = funcoes.acharCookie("idFormulario=")
    const dadosFormulario = await fetch(`https://api-intranet.vercel.app/formulario/${idFormulario}`);
    const elemento = await dadosFormulario.json();

    console.log(elemento);

    document.getElementById('nomePagina').innerHTML = elemento.titulo;
    document.getElementById('nomeFormulario').innerHTML = elemento.titulo;
    const form = document.getElementById('inputs');

    const inputs = elemento.formHtml.split(" ");
    var valor = 0;

    console.log(inputs)
    inputs.forEach(element => {
        if (element == "inputText") {
            form.innerHTML += `
            <label>${elemento.conteudo[valor]}
            <input type="text" name="labelText" placeholder="Digite aqui sua resposta">
            </label> `;
            valor += 1;
        } else if (element == "inputRadio") {
            form.innerHTML += `<p> ${elemento.conteudo[valor]}</p>
            <label for="valor1"><input type="radio" name="inputRadio" value="valor1">${elemento.conteudo[valor+1]}</label>
            <label for="valor2"><input type="radio" name="inputRadio" value="valor2"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 2° campo"></label>
            <label for="valor3"><input type="radio" name="inputRadio" value="valor3"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 3° campo"></label>
            <label for="valor4"><input type="radio" name="inputRadio" value="valor4"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 4° campo"></label>`
        }
    });

});