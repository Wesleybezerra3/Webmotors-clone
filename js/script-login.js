// login
$(document).ready(() => {
  // sistema Validação/Login

  $("#btnLogin").click(() => {
    var email = $("#email").val();
    var senha = $("#senha").val();

    function validarEmail(email) {
      let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
      return padrao.test(email);
    }
    function validarSenha(senha) {
      let padrao = /^(.{8,})$/;

      return padrao.test(senha);
    }
    if (validarEmail(email) && validarSenha(senha)) {
      alert("Sucesso");
    } else {
      alert("[ERROR]");
    }
  });

  //  sistema Verificação/login

  $("#email").keyup(() => {
    let email = $("#email").val();
    function verificarEmail(email) {
      let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
      return padrao.test(email);
    }
    if (verificarEmail(email) == false) {
      $("#campoObrigEmail").css({
        display: "block",
      });
      $("#email").css({
        border: "2px solid blueviolet",
      });
    } else {
      $("#campoObrigEmail").css({
        display: "none",
      });
      $("#email").css({
        border: "1px solid rgba(46, 46, 46, 0.26)",
      });
    }
  });
  $("#senha").keyup(() => {
    let senha = $("#senha").val();
    function verificarSenha(senha) {
      let padrao = /^(.{8,})$/; //Pelo menos 8 caracteres
      return padrao.test(senha);
    }
    if (verificarSenha(senha) == false) {
      $("#campoObrigSenha").css({
        display: "block",
      });
      $("#senha").css({
        border: "2px solid blueviolet",
      });
    } else {
      $("#campoObrigSenha").css({
        display: "none",
      });
      $("#senha").css({
        border: "1px solid rgba(46, 46, 46, 0.26)",
      });
    }
  });

  // alternar visualização de  senha

  let url = "../imagens-icones/oculta-senha.svg";
  $("#eyeIcon").click(() => {
    if (url === "../imagens-icones/oculta-senha.svg") {
      url = "../imagens-icones/ver-senha.svg";
      $("#senha").prop("type", "text");
    } else {
      url = "../imagens-icones/oculta-senha.svg";
      $("#senha").prop("type", "password");
    }

    $("#eyeIcon").css({
      "background-image": `url(${url})`,
    });
  });

  // Sistema de verificação/Register

  $("#name, #emailRegister").keyup(() => {
    let nome = $("#name").val();
    let email = $("#emailRegister").val();
    const criarConta = $("#btnRegister");

    function verificarEmail(email) {
      let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
      return padrao.test(email);
    }
    function verificarNome(nome) {
      let padrao = /^[a-zA-Z]+\s[a-zA-Z]+$/;
      return padrao.test(nome);
    }
    if (verificarNome(nome) === false || verificarEmail(email) === false) {
      criarConta.attr("disabled", true);
      $("#btnRegister").css({
        "background-color": "#e44663e5",
      });
    } else {
      criarConta.removeClass("link-desativado");
      criarConta.addClass("link-ativado");
      criarConta.attr("disabled", false);
      $("#btnRegister").css({
        "background-color": "",
      });
    }
  });
});
