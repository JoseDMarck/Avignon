map.on('load', function () {

 

// Lineas Tram 
map.addSource("route", {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                [4.805,43.942],[ -9.160,38.744], 
                [4.805,43.942],[-3.704,40.478], 
                [4.805,43.942],[-0.087,51.489], 
                [4.805,43.942],[2.347,48.859], 
                [4.805,43.942],[4.369,50.843],
                [4.805,43.942],[13.424,52.507],

                [4.805,43.942],[9.129,45.402],
                [4.805,43.942],[12.470,41.802],
                [4.805,43.942],[23.734,37.987], 
                [4.805,43.942],[7.253,43.703], 
                [4.805,43.942],[4.805,43.942], 

                ]
            }
        }
    });

        map.addLayer({
        "id": "route",
        "type": "line",
        "source": "route",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#FA0020',
            "line-width": 1,
        }
    });


        
// Lineas Tram 
map.addSource("verde", {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                        [4.838889282190763,45.75233098194187],[4.806820743234113,43.94474033203062],
                        [4.806820743234113,43.94474033203062],[5.369930168458609,43.29620715909331]


                ]
            }
        }
    });

        map.addLayer({
        "id": "verde",
        "type": "line",
        "source": "verde",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#558c25',
            "line-width": 3,
        }
    });


// Lineas Tram 
map.addSource("naranja", {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [


                        [2.175281788170082,41.382431374681744],[4.806820743234113,43.94474033203062],
                        [4.806820743234113,43.94474033203062],[8.933959300786313,44.40696948694833]


                ]
            }
        }
    });

        map.addLayer({
        "id": "naranja",
        "type": "line",
        "source": "naranja",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#FA9527',
            "line-width": 3,
        }
    });




});
