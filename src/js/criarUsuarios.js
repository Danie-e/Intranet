document.addEventListener("submit", async function () {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const equipe = document.getElementById("equipe").value;
    const tipo = document.getElementById("tipo").value;
    const imagem = document.getElementById("foto").value;

    var novoUsuario = {
        nome: nome,
        senha: senha,
        equipe: equipe,
        tipo: tipo,
        imagem: imagem
    };

    const resultado = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(novoUsuario),
    });
    var result = resultado.json();
    alert(result);
    if (result.ok) {
        alert(resultado.message);
    }
    else
        alert(resultado.message)
});