// sessão
function validarSessao() {
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
      b_usuario.innerHTML = `Olá, ${nome}`;
      cadastro.style.display = "none";
      b_usuario.removeAttribute("href");
  } else {
    MonteComp.style.display = "none";
    Dashboard.style.display = "none";
    Quiz.style.display = "none";
    Sair.style.display = "none";
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.style.display = "flex";
    divErrosLogin.innerHTML = texto;
  }
}
