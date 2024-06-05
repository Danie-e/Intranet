import { funcoes } from "./funcoes.js";

var conteudo='';
const buttonModal = document.getElementById('adicionarInput');
const inputs = document.getElementById('modal');
const buttonCriar = document.getElementById('criarFormulario');

buttonCriar.onclick = async function () {
    const nomeFormulario= document.getElementById('nomeFormulario').value;
    let formulario = document.getElementById('criarFormularios');

    let valores = [].map.call(formulario, function (input) {
        return` ${input.name} ${input.value}`;
    });
    const autor = funcoes.acharCookie("id=");
    const corpo = {
        titulo: nomeFormulario,
        autor: autor,
        formHtml: conteudo,
        conteudo: valores
    }
    console.log(await JSON.stringify(corpo));

    const result = await fetch("http://localhost:3000/formulario", {
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

buttonModal.onclick = function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

inputs.onclick = function (elemento) {
    // alert(elemento.target.id)
    const form = document.getElementById('novosInputs');
    if (elemento.target.id == "inputText") {
        form.innerHTML += `    
            <p for="labelText">Campo de texto</p>
            <input type="text" name="labelText" placeholder="Digite aqui a label do campo texto"> `;
        conteudo+="inputText ";
    }
    else if (elemento.target.id == "inputRadio") {
        form.innerHTML += ` 
        <p> Digite a pegunta e o valores de cada opção</p>
            <input type="text" name="nomeInputRadio" placeholder="Digite aqui a label do campo radio">
            <label for="valor1"><input type="radio" name="inputRadio" value="valor1"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 1° campo"></label>
            <label for="valor2"><input type="radio" name="inputRadio" value="valor2"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 2° campo"></label>
            <label for="valor3"><input type="radio" name="inputRadio" value="valor3"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 3° campo"></label>
            <label for="valor4"><input type="radio" name="inputRadio" value="valor4"
                    placeholder="Digite aqui a label do campo texto"> <input type="text"
                    placeholder="Digite o valor do 4° campo"></label> `;
        conteudo+="inputRadio ";

    }
    else if (elemento.target.id == "inputCheckbox") {
        form.innerHTML += `
        <p>Digite os valores de cada opção</p>
        <input type="text" name="nomeInputRadio" placeholder="Digite aqui a label do campo checkbox">
           
            <label for="valor1"><input type="checkbox" name="inputCheckbox" value="valor1"
            placeholder="Digite aqui a label do campo texto"><input type="text" placeholder="Digite o valor do 1° campo"></label>
           
            <label for="valor2"> <input type="checkbox" name="inputCheckbox" value="valor2"
            placeholder="Digite aqui a label do campo texto"><input type="text" placeholder="Digite o valor do 2° campo"></label>
            
            <label for="valor3"><input type="checkbox" name="inputCheckbox" value="valor3"
            placeholder="Digite aqui a label do campo texto"><input type="text" placeholder="Digite o valor do 3° campo"></label>
            
            <label for="valor4"><input type="checkbox" name="inputCheckbox" value="valor4"
            placeholder="Digite aqui a label do campo texto"><input type="text" placeholder="Digite o valor do 4° campo"></label> `;
        conteudo+="inputCheckbox ";
    }
    else if (elemento.target.id == "inputDate") {
        form.innerHTML += `
        <p for="inputData">Campo de data</p>
        <input type="text" nome="inputData" placeholder="Digite aqui a label para o campo de data"> `
        conteudo+="inputDate ";
    }

    inputs.style.display = 'none';
}
