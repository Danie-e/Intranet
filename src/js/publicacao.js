import { funcoes } from "./funcoes.js";

document.addEventListener("DOMContentLoaded", async function () {
    const idpublicacao = funcoes.acharCookie('idPublicacao=');
    const dados = await funcoes.procurarPublicacao(idpublicacao);
    console.log(dados);

    let categorias = `${dados.categorias.trim()}`;
    const arrayCategorias = categorias.split(' ');
    var listaCategorias = '';
    arrayCategorias.forEach(element => {
        listaCategorias += `<li> ${element} </li> `
    });

    const data = new Date(dados.data);
    var img = dados.autor.imagem == "" ?  "../img/Icons/account_circle.svg": dados.autor.imagem ;

    const tituloPagina = document.getElementById('tituloPagina');
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const imagem = document.getElementById('imagem')
    const nomeAutor = document.getElementById('nomeAutor');
    const dataPublicacao = document.getElementById('dataPublicacao');
    const texto = document.getElementById('texto');
    const categoria = document.getElementById('categorias');
    const imagemPublicacao = document.getElementById('imagemPublicacao');

    if(dados.imagem)
        imagemPublicacao.src=dados.imagem;
    else
    imagemPublicacao.style.display="none";

    tituloPagina.innerHTML = `${dados.titulo}`;
    titulo.innerHTML = `${dados.titulo}`;
    descricao.innerHTML = `${dados.descricao}`;
    imagem.src = `${img}`;
    nomeAutor.innerHTML = `${dados.autor.nome}`;
    dataPublicacao.innerHTML = `${data.toLocaleDateString()}`;
    texto.innerHTML = `${dados.texto}`;
    categoria.innerHTML = `${listaCategorias}`;
});
