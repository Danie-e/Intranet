 var publicacoes = [
    {
        "_id": {
            "$oid": "663fdc4ad1ca8282df7bce83"
        },
        "titulo": "Publicação teste",
        "descricao": "Teste descrição de publicação",
        "autor": {
            "nome": "Admin",
            "senha": "Admin",
            "equipe": "RH",
            "tipo": 1,
            "_id": {
                "$oid": "6633d7eace7caf61e75d450c"
            }
        },
        "imagem": "",
        "texto": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum urna eget accumsan placerat. Ut sed massa placerat lorem mattis pellentesque. Pellentesque laoreet euismod nisl sit amet mattis. Sed posuere velit purus, dignissim interdum tellus iaculis sed. Ut diam metus, pretium a volutpat sit amet, suscipit quis justo. Donec et.",
        "categorias": "TI"
    }
]


var categoria='';

document.addEventListener("DOMContentLoaded", function () {
    var adicionarSetorBtn = document.querySelector(".adicionarSetor");
    var inputSetor = document.getElementById("inputSetor");
    var listaSetores = document.getElementById("listaSetores");

    adicionarSetorBtn.addEventListener("click", function () {
        var setor = inputSetor.value.trim();
        if (setor !== "") {
            var novoItem = document.createElement("li");
            novoItem.textContent = setor;
            listaSetores.appendChild(novoItem);
            inputSetor.value = ""; // Limpar o campo de input após adicionar o setor

            categoria += setor;
        } else {
            alert("Por favor, insira um setor válido.");
        }
    });
});


function salvarPublicacao() {
    var titulo = document.getElementById('tituloPublicacao').value;
    var descricao = document.getElementById('resumoPublicacao').value;
    var autor = "Em desenvolvimento"
    var imagem = document.getElementById('imagemPublicacao').value;
    var texto = document.getElementById('textoPublicacao').value;

    publicacoes += {
        titulo:titulo,
        descricao:descricao,
        autor:autor,
        imagem:imagem,
        texto:texto,
        categorias: categoria
    }
    alert("Publicação criada com sucesso!");

    window.open("./paginaInicial.html");
}