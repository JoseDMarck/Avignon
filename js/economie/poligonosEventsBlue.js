map.on('load', function () {




var mislider2 = $('.bxslider2').bxSlider({});



map.on('click', function (e) {


	

	mislider2.reloadSlider()

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

           // Variables para comprobar que los elementos existan. 

           	var Vphoto = feature.properties.photo;
           	var VGallery = feature.properties.gallery;
            var VFoncier = feature.properties.fonciermaitrisepublique;
            var VNombreEstablecimiento = feature.properties.nombre;
            var VNombreSalaries = feature.properties.nombresalaries;
           	var VZones = feature.properties.adresse_association_de_zones;

           	$.ajax({url: "", 
            success: function(result){
                
                // Recargamos el slider
                mislider2.reloadSlider()

                if ( VGallery == ""){
			  			$(".bx-wrapper").addClass("ocultar");
					}

            
            }});


                  
           document.getElementById('titulo_siderbar2').innerHTML =  feature.properties.name
           
            

			 
			     if ( VGallery != ""){
			       document.getElementById('sliderX2').innerHTML =  feature.properties.gallery;
			     }
			      

           document.getElementById('photo_sb2').innerHTML =  feature.properties.photo	

           document.getElementById('occupation_sb2').innerHTML = "<span class='yellow'> Occupation :  </span>" + feature.properties.occupation
           
           document.getElementById('surfacetotale_sb2').innerHTML = "<span class='yellow'> Surface totale :  </span>" + feature.properties.surfacetotale           
           

           if ( VFoncier != ""){
            document.getElementById('fonciermaitrisepublique_sb2').innerHTML = "<span class='yellow'> Foncier maitrise publique :  </span>" + feature.properties.fonciermaitrisepublique
           }


      

          if(VNombreEstablecimiento  != "" ){
             document.getElementById('nombre_sb2').innerHTML = "<span class='yellow'> Nombre d'etablissement :  </span>" + feature.properties.nombre
          }


           if ( VNombreSalaries != ""){
           document.getElementById('nombresalaries_sb2').innerHTML = "<span class='yellow'> Nombre salaries :   </span>" + feature.properties.nombresalaries

           }

           
           
           document.getElementById('Lignedebus_sb2').innerHTML = "<span class='yellow'> Ligne de bus : </span>" + feature.properties.Lignedebus           
           
           document.getElementById('fibre_optique_sb2').innerHTML = "<span class='yellow'> Fibre optique : </span>" + feature.properties.fibre_optique          
           
			
           if ( VZones != ""){
           document.getElementById('adresse_association_de_zones_sb2').innerHTML = "<span class='yellow'> Adresse association de zones : </span> <br>" + feature.properties.adresse_association_de_zones
           }


           document.getElementById('commune_sb2').innerHTML = "<span class='yellow'> Commune : </span>" + feature.properties.commune
           

         



   
        },400);




       return false;  
});


 







});