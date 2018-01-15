
$(document).ready(function(){
    
        var height = $(window).height();
        var width  = $(window).width();

    menu_size();
   


if(width > 1024){

  
}
    

});

 

$( window ).resize(function() {
  menu_size();
});

function menu_size(){
        var height = $(window).height();
        var width  = $(window).width();

        if(width <= 480){

                    var menu_h = ((width / 3) * 250) / 696;
                    var top_h = (50 * 100) / height;

                    
            }else{

                    var top_h = (70 * 100) / height;
                     if(width >= 1270){
                         var menu_h = ((width / 3) * 80) / 696;
                     }else{
                    
                    var menu_h = ((width / 3) * 155) / 696;
            }


        }
      
    
        var aux = (top_h / 100) * height;
        var slide_h = (height - menu_h - aux);
        var map_h = height - menu_h-aux;
        //$(".footer").css("height", menu_h+"px");
        //$(".top_bar").css("height", top_h+"%");
        //$(".sidemenu").css("top", top_h+"%");
        //$("#map").css("height", map_h+"px");
        //$("#map").css("margin-top", aux+"px");
        //$(".slide").css("height", slide_h+"px");
        //$(".slide").css("top", top_h+"%");
        
        
}
 

$( ".CloseSiderbar" ).click(function() {
  $( ".siderbar" ).toggle( "slide", {direction: 'right'}, function(){
    $( ".open_info_btn" ).fadeIn();
    $(".indicadoresColor").show();
    
  });  

  $( ".siderbar_1" ).toggle( "slide", {direction: 'right'}, function(){
    $( ".open_info_btn" ).fadeIn();
  });  
  
});


$( ".CloseSiderbar2" ).click(function() {
  $( ".siderbar2" ).toggle( "slide", {direction: 'right'}, function(){
    $( ".open_info_btn" ).fadeIn();
    $(".indicadoresColor").show();

  });  
  
});


$( ".open_info_btn" ).click(function() {
     $( ".open_info_btn" ).hide();
    $( ".siderbar" ).toggle( "slide", {direction: 'right'}, function(){ });
    $( ".siderbar_1" ).toggle( "slide", {direction: 'right'}, function(){ });


    $.ajax({url: "", 
            success: function(result){
                 
                console.log("Succes!!!")
                $("#info").mCustomScrollbar({theme:"minimal",
                    advanced:{
                        updateOnContentResize: true
                    }
                });

                $("#info").mCustomScrollbar("update");


            
            }});
});



// FUNCIONALIDAD DEL MENU DERECHO 

/* MENU 1 */
$( ".btn_1" ).mouseover(function() {
     $( ".textoTitulo1" ).toggle( "slide", {direction: 'left'}, function(){ });
})

$( ".btn_1" ).mouseleave(function() {    
     $( ".textoTitulo1" ).toggle( "slide", {direction: 'left'}, function(){ });
})

/* MENU 2 */
$( ".btn_2" ).mouseover(function() {
     $( ".textoTitulo2" ).toggle( "slide", {direction: 'left'}, function(){ });
})

$( ".btn_2" ).mouseleave(function() {    
     $( ".textoTitulo2" ).toggle( "slide", {direction: 'left'}, function(){ });
})

/* MENU 3 */
$( ".btn_3" ).mouseover(function() {
     $( ".textoTitulo3" ).toggle( "slide", {direction: 'left'}, function(){ });
})

$( ".btn_3" ).mouseleave(function() {    
     $( ".textoTitulo3" ).toggle( "slide", {direction: 'left'}, function(){ });
})
   


 







  






