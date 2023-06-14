$(document).ready(()=>{
  let abrirNav =$('#abrirNav').click(()=>{
    $('#container-navbar').css('display','block');
  });

 let fecharNav = $('#fecharNav').click(()=>{
   $('#container-navbar').css('display','none');
 });
})

$(document).ready(()=>{
  $('#motos').click(()=>{
    $('#motos').css({
      'color':'#000000',
        'border-bottom':'2px solid #f50707',
          'font-size':'20px'
         });

         $('#search').prop('placeholder','Digite marca ou modelo da moto');

       $('#carros').css({
        'font-size':'18px',
        'color':'#272424a8',
        'border-bottom':'none'
     });
   });
});

   


$(document).ready(()=>{
  $('#carros').click(()=>{
    $('#carros').css({'color':'#000000',
      'border-bottom':'2px solid #f50707',
        'font-size':'20px'
});

  $('#search').attr('placeholder','Digite marca ou modelo do carro');

  $('#motos').css({'font-size':'18px',
     'color':'#272424a8',
       'border-bottom':'none'
});
  });
    });



// Cadastro

$('#btnLogin').click(()=>{
  var email =$('#email').val()
  var senha =$('#senha').val()


    function validarEmail(email){
      let padrao=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return padrao.test(email)
  }
  function validarSenha(senha){
    let padrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return padrao.test(senha)
  }
  if(validarEmail(email) && validarSenha){
   alert('Sucesso')
  }


  
})
$(document).ready(()=>{
  let rotation=0
 $('#summary1').click(()=>{
  rotation+=180
  $('#arrowDown1').css({'transform':`rotate(${rotation}deg)`})
  if(rotation==180){
    rotation=-180
  }
 })
})
$(document).ready(()=>{
  let rotation=0
 $('#summary2').click(()=>{
  rotation+=180
  $('#arrowDown2').css({'transform':`rotate(${rotation}deg)`})
  if(rotation==180){
    rotation=-180
  }
 })
})
$(document).ready(()=>{
  let rotation=0
 $('#summary3').click(()=>{
  rotation+=180
  $('#arrowDown3').css({'transform':`rotate(${rotation}deg)`})
  if(rotation==180){
    rotation=-180
  }
 })
})
$(document).ready(()=>{
  let rotation=0
 $('#summary4').click(()=>{
  rotation+=180
  $('#arrowDown').css({'transform':`rotate(${rotation}deg)`})
  if(rotation==180){
    rotation=-180
  }
 })
})




// $('#email').keyup(()=>{
// $('#campoObrig').text($('#email').val())
// })


   
 