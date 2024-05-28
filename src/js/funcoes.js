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

export const funcoes = {
    acharCookie
}
