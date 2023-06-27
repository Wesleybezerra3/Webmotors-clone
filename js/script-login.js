// login
$(document).ready(() => {
  $("#btnLogin").click(() => {
    var email = $("#email").val();
    var senha = $("#senha").val();

    function validarEmail(email) {
      let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return padrao.test(email);
    }
    function validarSenha(senha) {
      let padrao =/^(.{8,})$/

      return padrao.test(senha);
    }
    if (validarEmail(email) && validarSenha(senha)) {
      alert("Sucesso");
    } else {
      alert("[ERROR]");
    }
  });
});

$(document).ready(() => {
  $("#email").keyup(() => {
    let email = $("#email").val();
    function verificarEmail(email) {
      let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return padrao.test(email)
    }
    if (verificarEmail(email) == false) {
      $("#campoObrigEmail").css({
        display: "block"
      });
      $("#email").css({
        'border':'2px solid blueviolet'
      })
    } else {
      $("#campoObrigEmail").css({
        'display': "none"
      });
      $("#email").css({
        'border':'1px solid rgba(46, 46, 46, 0.26)'
      })
    }
  });
  $("#senha").keyup(() => {
    let senha = $("#senha").val();
    function verificarSenha(senha) {
      let padrao =/^(.{8,})$/

      return padrao.test(senha)
    }
    if (verificarSenha(senha) == false) {
      $("#campoObrigSenha").css({
        "display": "block"
      });
      $("#senha").css({
        'border':'2px solid blueviolet'
      })
    } else {
      $("#campoObrigSenha").css({
        "display": "none"
      });
      $("#senha").css({
        'border':'1px solid rgba(46, 46, 46, 0.26)'
      })
    }
  });
});
