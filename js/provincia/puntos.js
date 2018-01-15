
map.on('load', function () {

 
var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 30 minutes",
                "message": "Orange",
                "description": "<strong>**Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.807732331266294,44.13658409985723
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 30 minutes",
                "message": "Carpentras",
                "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                  5.048720751978067,44.05534422143393
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 30 minutes",
                "message": "Aix en Provence",
                "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                  5.44733760279297,43.52509440367925
                ]
            }
        },
        
        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 30 minutes",
                "message": "Arles",
                "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                  4.630995418493029,43.67732152048271
                ]
            }
        },
         {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 1 heure",
                "message": "Montpellier",
                "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                   3.8758791063008005,43.61069008750749
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 30 minutes",
                "message": "Nîmes",
                "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-off.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                   4.360039256190561,43.83704892058461
                ]
            }
        },

        


          {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span>2 heures",
                "message": "Lyon",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-green.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.838889282190763,45.75233098194187
                ]
            }
        },
       

         
       

        {
            "type": "Feature",
            "properties": {
               "Name": "<span class='auto_a'></span> 1 heure",
                "message": "Marselle",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-green.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.369930168458609,43.29620715909331
                ]
            }
        },


        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 4h30",
                "message": "Barcelona",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-orange.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.175281788170082,41.382431374681744
                ]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "Name": "<span class='auto_a'></span> 4h30",
                "message": "Gênes",
                "iconSize": [10, 10],
                "nameIcon": "botones_avignon-orange.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.933959300786313,44.40696948694833
                ]
            }
        },

  {
            "type": "Feature",
            "properties": {
                "Name": "Avignon",
                "message": "Avignon",
                "iconSize": [25, 25],
                "nameIcon": "pin.png"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.806820743234113,43.94474033203062
                ]
            }
        },

        




        

        
    ],

};




 



geojson.features.forEach(function(marker) {

    // create a DOM element for the marker
    var el = document.createElement('div');

    el.className = 'marker';
    el.style.backgroundImage = 'url(./images/pines/' + marker.properties.nameIcon + ')';
    el.style.backgroundSize = "100% 100%";
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';



     // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);


        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });


    

   el.addEventListener('mouseover', function() {
        popup.setLngLat(marker.geometry.coordinates)
        .setHTML(marker.properties.Name)
        .addTo(map);
    });



     el.addEventListener('mouseout', function() {  
       popup.remove();
       return;
    }); 


    
    el.addEventListener('click', function() {
        //window.alert(marker.properties.message);

        $("#info").mCustomScrollbar("destroy");
   
            // Comprobamos que este oculto el siderBar para mostrarlo 
            if ( $(".siderbar_1").css('display') == 'none' ){
                 $( ".siderbar_1" ).toggle( "slide", {direction: 'right'}, function(){ });
                 $( ".open_info_btn" ).hide();
             }


        // Cacheing HTML elements
        var project = document.querySelector('#info');
        project.style.opacity = 0;

        
        setTimeout(function(){ 
           // Agregamos las propiedades de descripción con innerHTML
            project.style.opacity = 1;


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
             
        },400);



    });

   

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});




});



 



 



 