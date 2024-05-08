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
        } else {
            alert("Por favor, insira um setor válido.");
        }
    });
});
