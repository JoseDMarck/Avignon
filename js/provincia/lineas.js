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
                [4.805,43.942],[4.807,44.136], 
                [4.805,43.942],[5.048,44.055], 
                [4.805,43.942],[5.44733760279297,43.52509440367925],
               
                [4.805,43.942],[4.630995418493029,43.67732152048271],
                [4.805,43.942],[3.8758791063008005,43.61069008750749],
                [4.805,43.942],[4.360039256190561,43.83704892058461],

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
