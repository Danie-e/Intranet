function fazGet(){
  
  let nomeUsuario = document.getElementById('usuario').value;
  let senhaUsuario = document.getElementById('senha').value;
  
  let request= new XMLHttpRequest();
  request.open("GET",`http://localhost:3000/login/${nomeUsuario}/${senhaUsuario}`,false);
  request.send();
  const response=request.responseText;
  if (response === null) {
    document.getElementById('mensagem').value = "Senha ou usuario não encontados";
    nomeUsuario.value = '';
    senhaUsuario.value = '';
  }
  else {
    window.location.href = 'html/paginaInicial.html'
  }
}


async function validarUsuario() {
  let nomeUsuario = document.getElementById('usuario').value;
  let senhaUsuario = document.getElementById('senha').value;

  const usuario = {
    nome: nomeUsuario,
    senha: senhaUsuario
  }
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
    // body: JSON.stringify(usuario),
  };
  try {
    var url=`http://localhost:3000/login/${nomeUsuario}/${senhaUsuario}`;
    const response = fetch(url,{  credentials: "omit",})
    response.then(response=>{
    if (response === null) {
      document.getElementById('mensagem').value = "Senha ou usuario não encontados";
      nomeUsuario.value = '';
      senhaUsuario.value = '';
    }
    else {
      window.location.href = './html/paginaInicial.html'
    }
  })
  }
  catch (erro) {
    console.log(erro);
  };

}

function irpara() {
  window.location.href = 'html/paginaInicial.html'
}

