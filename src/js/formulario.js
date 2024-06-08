import { funcoes } from "./funcoes.js";

document.addEventListener("DOMContentLoaded", async function () {
    const idFormulario = funcoes.acharCookie("idFormulario=")
    const dadosFormulario = await fetch(`http://localhost:3000/formulario/${idFormulario}`);
    const elemento = await dadosFormulario.json();

    console.log(elemento);

    document.getElementById('nomePagina').innerHTML = elemento.titulo;
    document.getElementById('nomeFormulario').innerHTML = elemento.titulo;

    // buttonCriar.onclick = async function () {
    //     const nomeFormulario = document.getElementById('nomeFormulario').value;
    //     let formulario = document.getElementById('criarFormularios');

    //     let valores = [].map.call(formulario, function (input) {
    //         return ` ${input.name} ${input.value}`;
    //     });
    //     const autor = funcoes.acharCookie("id=");
    //     const corpo = {
    //         titulo: nomeFormulario,
    //         autor: autor,
    //         formHtml: conteudo,
    //         conteudo: valores
    //     }
    //     console.log(await JSON.stringify(corpo));

    //     const result = await fetch("http://localhost:3000/formulario", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(corpo),
    //     })
    //     const resultado = await result.json();
    //     if (resultado.status == 201) {
    //         alert(resultado.message);
    //         window.location.href = './paginaInicial.html';
    //     }
    //     else {
    //         alert(resultado.message);
    //     }
    // }
});