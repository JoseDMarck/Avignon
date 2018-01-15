
map.on('load', function () {

 
var geojson2 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Saint Roch",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.79963510280847,43.9434120848465
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Les Roses",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.80960671044094,43.9412011759739
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Place St. Ruf",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.81041014312658,43.9363233276239
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Marius Jouveau",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.80965509808816,43.9320274791012
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Stade",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.84117164235454,43.9307630181692
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Librairie",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.83412228224405,43.9304717542298
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Aquilon",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.82600768717131,43.9307846042227
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : Barbiere",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.81982722837574,43.9293465898638
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Projet TRAM : St. Chamande",
                "iconSize": [30, 30],
                "nameIcon": "btn_tram",    
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.81338902672884,43.9286791682502
                ]
            }
        }
   



    ]
}//GEOjson


geojson2.features.forEach(function(marker) {

// create a DOM element for the marker
    var el = document.createElement('div');
    

    var btn_off = 'url(./images/composition/pines/' + marker.properties.nameIcon + '-off.png)';
    var timeout;
    var count = 0;
  

    el.className = 'marker_tramp';
    el.style.backgroundImage = 'url(./images/composition/pines/' + marker.properties.nameIcon + '_off.png)';
    el.style.backgroundSize = "30px 30px";
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


});










}); // MAP LOAD





 

  





 




 



 



 