import { funcoes } from "./funcoes.js";

document.addEventListener("DOMContentLoaded", async function () {
    const idpublicacao = funcoes.acharCookie('idPublicacao=');
    const dados = await procurarPublicacao(idpublicacao);
    console.log(dados);

    let categorias = `${dados.categorias.trim()}`;
    const arrayCategorias = categorias.split(' ');
    var listaCategorias='';
    arrayCategorias.forEach(element => {
        listaCategorias +=  `<li> ${element} </li> `
    });

    const data= new Date(dados.data);

    let tituloPagina = document.getElementById('tituloPagina');
    let titulo = document.getElementById('titulo');
    let descricao = document.getElementById('descricao');
    let nomeAutor = document.getElementById('nomeAutor');
    let dataPublicacao = document.getElementById('dataPublicacao');
    let texto = document.getElementById('texto');
    let categoria = document.getElementById('categorias');

    tituloPagina.innerHTML = `${dados.titulo}`;
    titulo.innerHTML = `${dados.titulo}`;
    descricao.innerHTML = `${dados.descricao}`;
    nomeAutor.innerHTML = `${dados.autor.nome}`;
    dataPublicacao.innerHTML = `${data.toLocaleDateString()}`;
    texto.innerHTML = `${dados.texto}`;
    categoria.innerHTML=`${listaCategorias}`;
});



async function procurarPublicacao(id) {
    const result = await fetch(`http://localhost:3000/publicacao/${id}`);
    return result.json();
}
