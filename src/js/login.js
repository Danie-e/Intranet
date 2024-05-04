import { procurarUsuario } from 'db.js';

async function validarUsuario() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;

  let resultado = procurarUsuario(usuario, senha);
  if (resultado) {
    window.location.href = "./src/html/paginaInicial.html";
  }
  else {
    console.log("Senha ou usuario incorretos")
  }

}

