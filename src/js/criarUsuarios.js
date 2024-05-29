document.addEventListener("submit", async function () {
    const nome = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const equipe = document.getElementById("equipe");
    const tipo = document.getElementById("tipo");
    const imagem = document.getElementById("foto");

    const novoUsuario = {
        nome: nome,
        senha: senha,
        equipe: equipe,
        tipo: tipo,
        imagem: imagem
    }

    alert("enviando");
    const resultado = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    });
    if (resultado.ok) {
        alert(resultado.message);
    }
    else
        alert(resultado.message)
});