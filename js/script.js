
     
$(document).ready(()=>{
  $('#motos').click(()=>{
    $('#motos').css({
      'color':'#000000',
        'border-bottom':'3px solid #f50707'
         
         });

         $('#search').prop('placeholder','Digite marca ou modelo da moto');

       $('#carros').css({
        'color':'#272424a8',
        'border-bottom':'none'
     });
   });
});

   


$(document).ready(()=>{
  $('#carros').click(()=>{
    $('#carros').css({'color':'#000000',
      'border-bottom':'3px solid #f50707'
});

  $('#search').attr('placeholder','Digite marca ou modelo do carro');

  $('#motos').css({
     'color':'#272424a8',
       'border-bottom':'none'
});
  });
    });





 // MENU MOBILE

$(document).ready(()=>{
    let abrirNav =$('#abrirNav').click(()=>{
    $('#container-navbar').css('display','block');
});
                                
let fecharNav = $('#fecharNav').click(()=>{
   $('#container-navbar').css('display','none');
 });
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













//  $('#email').keyup(()=>{
//  $('#campoObrig').text($('#email').val())
//  })


   
 