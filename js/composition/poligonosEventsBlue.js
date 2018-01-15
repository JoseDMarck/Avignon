map.on('load', function () {




var mislider2 = $('.bxslider2').bxSlider({});



map.on('click', function (e) {


	



	 $("#info2").mCustomScrollbar({theme:"minimal",
                    advanced:{
                        updateOnContentResize: true
                    }
      });


    var features = map.queryRenderedFeatures(e.point, { layers: ['map-Blue'] });
    if (!features.length) {  return;  }
    var feature = features[0];




  

     var info2 = document.querySelector('#info2');
     info2.style.opacity = 0;


     // Comprobamos que este oculto el siderBar para mostrarlo 
      if ( $(".siderbar2").css('display') == 'none' ){
           $( ".siderbar2" ).toggle( "slide", {direction: 'right'}, function(){ });
           $( ".open_info_btn" ).hide();
           $(".indicadoresColor").hide();

       }

      // Cerramos el siderbar 2 para solo mostrar el de los puntos 
      if ( $(".siderbar").css('display') == 'block' ){
           $( ".siderbar" ).toggle( "slide", {direction: 'right'}, function(){
             $( ".open_info_btn" ).fadeIn();
           }); 
       }

         setTimeout(function(){ 
           	info2.style.opacity = 1;

         


           	

           	$.ajax({url: "", 
            success: function(result){
                
                // Recargamos el slider


          

            
            }});


                  
           document.getElementById('titulo_siderbar2').innerHTML =  feature.properties.name
           document.getElementById('occupation_sb2').innerHTML = "" + feature.properties.description
           
         
    
           

   
        },400);




       return false;  
});


 







});