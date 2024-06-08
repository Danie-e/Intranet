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
            <label  class="labelTexto">${elemento.conteudo[valor]}
            <input type="text" name="labelText" placeholder="Digite aqui sua resposta">
            </label> `;
            valor += 1;
        } else if (element == "inputRadio") {
            form.innerHTML += `<p> ${elemento.conteudo[valor]}</p>
            <label for="${elemento.conteudo[valor + 1]}"><input type="radio" name="inputRadio" value="${elemento.conteudo[valor + 1]}">${elemento.conteudo[valor + 1]}</label>
            <label for="${elemento.conteudo[valor + 2]}"><input type="radio" name="inputRadio" value="${elemento.conteudo[valor + 2]}">${elemento.conteudo[valor + 2]}</label>
            <label for="${elemento.conteudo[valor + 3]}"><input type="radio" name="inputRadio" value="${elemento.conteudo[valor + 3]}">${elemento.conteudo[valor + 3]} </label>
            <label for="${elemento.conteudo[valor + 4]}"><input type="radio" name="inputRadio" value="${elemento.conteudo[valor + 4]}">${elemento.conteudo[valor + 4]} </label>`
            valor += 5;
        }
        else if (element == "inputCheckbox") {
            form.innerHTML += `
            <p>${elemento.conteudo[valor]}</p>
            
            <label for="${elemento.conteudo[valor + 1]}">
            <input type="checkbox" name="inputCheckbox" value="${elemento.conteudo[valor + 1]}">${elemento.conteudo[valor + 1]}
            </label>
       
            <label for="${elemento.conteudo[valor + 2]}">
            <input type="checkbox" name="inputCheckbox" value="${elemento.conteudo[valor + 2]}">${elemento.conteudo[valor + 2]}
            </label>
       
            <label for="${elemento.conteudo[valor + 3]}">
            <input type="checkbox" name="inputCheckbox" value="${elemento.conteudo[valor + 3]}">${elemento.conteudo[valor + 3]}
            </label>
       
            <label for="${elemento.conteudo[valor + 4]}">
            <input type="checkbox" name="inputCheckbox" value="${elemento.conteudo[valor + 4]}">${elemento.conteudo[valor + 4]}
            </label> `;
            valor += 5;
        }
        else if (element == "inputDate") {
            form.innerHTML += `
            <p>${elemento.conteudo[valor]}</p>
            <input type="date" nome="inputData">`
        }
    });

});

const buttonEnviar = document.getElementById('responderFormulario');
buttonEnviar.onclick = async function () {
    const formulario = document.getElementById('formulario');

    let respostas = [].map.call(formulario, function (input) {
        return `${input.value} ${input.value}`;
    });

    const usuario = funcoes.acharCookie("id=");
    const idFormulario = funcoes.acharCookie("idFormulario=");
    const corpo = {
        idFormulario: idFormulario,
        idUsuario: usuario,
        conteudo: respostas
    }

    const result = await fetch("https://api-intranet.vercel.app/formulario/respostas/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(corpo),
    })
    const resultado = await result.json();
    if (resultado.status == 201) {
        alert(resultado.message);
        window.location.href = './paginaInicial.html';
    }
    else {
        alert(resultado.message);
    }
}