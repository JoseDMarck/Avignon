map.on('load', function () {


var mislider2 = $('.bxslider2').bxSlider({});

map.on('click', function (e) {


	

	mislider2.reloadSlider()

	 $("#info2").mCustomScrollbar({theme:"minimal",
                    advanced:{
                        updateOnContentResize: true
                    }
      });


    var features = map.queryRenderedFeatures(e.point, { layers: ['map-Orange'] });
    if (!features.length) {  return;  }
    var feature = features[0];



  

     var info2 = document.querySelector('#info2');
     info2.style.opacity = 0;


     // Comprobamos que este oculto el siderBar para mostrarlo 
      if ( $(".siderbar2").css('display') == 'none' ){
           $( ".siderbar2" ).toggle( "slide", {direction: 'right'}, function(){ });
           $( ".open_info_btn" ).hide();

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
           	var Vnail = feature.properties.lien;
           	var Vphoto = feature.properties.photo;
           	var VGallery = feature.properties.gallery;

           	

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
           
           document.getElementById('locauxdisponibles_sb2').innerHTML = "<span class='yellow'> Locaux disponibles :  </span>" + feature.properties.locauxdisponibles
           
           document.getElementById('foncierdisponible_sb2').innerHTML = "<span class='yellow'> Foncier disponible :  </span>" + feature.properties.foncierdisponible
           
           document.getElementById('fonciermaitrisepublique_sb2').innerHTML = "<span class='yellow'> Foncier maitrise publique :  </span>" + feature.properties.fonciermaitrisepublique
           
           document.getElementById('nombre_sb2').innerHTML = "<span class='yellow'> Nombre :  </span>" + feature.properties.nombre
           
           document.getElementById('nombresalaries_sb2').innerHTML = "<span class='yellow'> Nombre salaries :   </span>" + feature.properties.nombresalaries
           
           document.getElementById('Lignedebus_sb2').innerHTML = "<span class='yellow'> Ligne de bus : </span>" + feature.properties.Lignedebus
 			
           document.getElementById('restauran_tinterent_reprise_sb2').innerHTML = "<span class='yellow'> Restaurant inter entreprise : </span>" + feature.properties.restauran_tinterent_reprise
           
           document.getElementById('creche_sb2').innerHTML = "<span class='yellow'>Creche : </span>" + feature.properties.creche
           
           document.getElementById('gardien_sb2').innerHTML = "<span class='yellow'> Gardien : </span>" + feature.properties.gardien
           
           document.getElementById('fibre_optique_sb2').innerHTML = "<span class='yellow'> Fibre optique : </span>" + feature.properties.fibre_optique
           
           document.getElementById('distance_aeroport_sb2').innerHTML = "<span class='yellow'> distance aéroport : </span>" + feature.properties.distance_aeroport
           
           document.getElementById('distance_aerodrome_sb2').innerHTML = "<span class='yellow'> distance aerodrome : </span>" + feature.properties.distance_aerodrome
           
           document.getElementById('distance_gare_sb2').innerHTML = "<span class='yellow'>distance gare : </span>" + feature.properties.distance_gare
           
           document.getElementById('distance_autoroute_sb2').innerHTML = "<span class='yellow'> distance autoroute : </span>" + feature.properties.distance_autoroute
           
           document.getElementById('contact_sb2').innerHTML = "<span class='yellow'> contact : </span>" + feature.properties.contact
           
           document.getElementById('association_sb2').innerHTML = "<span class='yellow'> Association : </span>" + feature.properties.association
			
           document.getElementById('adresse_association_de_zones_sb2').innerHTML = "<span class='yellow'> Adresse association de zones : </span>" + feature.properties.adresse_association_de_zones
           
           document.getElementById('commune_sb2').innerHTML = "<span class='yellow'> Commune : </span>" + feature.properties.commune
           

           if ( Vnail != ""){
       		    document.getElementById('lien_sb2').innerHTML = "<span class='yellow'> Alien :</span>" + feature.properties.lien;
			}
           





   
        },400);




       return false;  
});


 





});