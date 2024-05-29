function acharCookie(nome) {
    let dados = decodeURIComponent(document.cookie);
    let dadosConvertidos = dados.split(';')
    let result;
    dadosConvertidos.forEach(element => {
        if (element.indexOf(nome) >= 0) {
            result = element.split("=");
        }
    });
    return result[1];
}

async function editarPublicacao(id){

}
async function procurarPublicacao(id) {
    const result = await fetch(`http://localhost:3000/publicacao/${id}`);
    return result.json();
}

async function deletarPublicacao(id) {
    const result = await fetch(`http://localhost:3000/publicacao/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    const resultado = await result.json();
    if (resultado.ok) {
        alert(`${resultado.message}`);
    }
    else {
        alert(`${resultado.message}`);
        window.location.href = 'paginaInicial.html';
    }
}


export const funcoes = {
    acharCookie,
    editarPublicacao,
    deletarPublicacao,
    procurarPublicacao
}
