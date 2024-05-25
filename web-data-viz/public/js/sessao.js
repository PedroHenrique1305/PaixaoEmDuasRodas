// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    // var divAguardar = document.getElementById("div_aguardar");
    alert("Aguarde um instante! \n Estamos redirecionando para a Dashboard ");
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    alert("Algo deu errado, tente se logar novamente.");

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

