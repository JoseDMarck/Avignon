
map.on('load', function () {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "description": "<strong>**Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                    "icon": "theatre"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.816,43.948]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
                    "icon": "star"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.813,43.949]
                }
            }]
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": "places",
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

   


});




// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: false
});

// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

     


    if (!features.length) {
        popup.remove();

        return;
    }

    var feature = features[0];

   


   // Comprobamos que este oculto el siderBar para mostrarlo 
   if ( $(".siderbar").css('display') == 'none' ){
        $( ".siderbar" ).toggle( "slide", {direction: 'right'}, function(){ });
        $( ".open_info_btn" ).hide();
    }


     

 

        // Cacheing HTML elements
        var project = document.querySelector('#info');
        project.style.opacity = 0;

        
        setTimeout(function(){ 
           // Agregamos las propiedades de descripción con innerHTML
            document.getElementById('info').innerHTML = "Información: " + feature.properties.description;
            project.style.opacity = 1;
             
        },400);

   
});


 



 