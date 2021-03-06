map.on('load', function () {

// AREAS COLOREADAS: AZULES
 map.addSource('map-Blue-SinEvent', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            "features": [
                
                  {
                    "properties": {
                        "name": "37"
                    },

                     'geometry': {
                     'type': 'Polygon',
                     'coordinates':
                     [[   
                      [4.798193,43.9440128],[4.800584,43.943034],[4.8016906,43.943024],[4.8079133,43.942576],[4.8111534,43.9430395],[4.8149943,43.943951],[4.8172045,43.9465774],[4.8196507,43.9500998],[4.8195648,43.9515519],[4.8174834,43.9522471],[4.8125267,43.9535446],[4.8102093,43.9534829],[4.808321,43.9536682],[4.8069692,43.9536528],[4.8052955,43.9531121],[4.8038149,43.9519381],[4.8028922,43.9510421],[4.8023772,43.9505169],[4.8016906,43.9496209],[4.7994375,43.9467937],[4.7983003,43.945944],[4.7980428,43.944878],[4.798193,43.9440128]
                     ]] 
                     }
                 },
    

            ]
        }   
 
    });

  map.addLayer({
        'id': 'map-Blue-SinEvent',
        'type': 'fill',
        'source': 'map-Blue-SinEvent',
        'layout': {},
        'paint': {
            'fill-color': '#2075a8',
            'fill-opacity': 0.9
        }
    });

});
