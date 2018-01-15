map.on('load', function () {


 // AREAS COLOREADAS: Amarrillas
 map.addSource('map-X', {
        'type': 'geojson',
        
         
        'data': {
            'type': 'FeatureCollection',
            "features": [
                
                  {
                     'geometry': {
                     'type': 'Polygon',
                     'coordinates':
                     [[   

 

                     ]] 
                     }
                 },
    

            ]
        }   
 
    });

  map.addLayer({
        'id': 'map-X',
        'type': 'fill',
        'source': 'map-X',
        'layout': {},
        'paint': {
            'fill-color': '#000',
            'fill-opacity': 0.8
        }
    });



});
