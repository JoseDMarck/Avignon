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
                
                [4.805,43.942],[7.696095890595387,45.06275459536073], 
                [4.805,43.942],[7.4055716782055185,43.74192919988511], 
                [4.805,43.942],[8.735025556629893,41.923424039272476], 
                [4.805,43.942],[9.581989850921758,34.096548664664766], 
                [4.805,43.942],[3.0629155477888617,36.738611592493],
                [4.805,43.942],[-6.833833340199732,34.02229443496822],
                [4.805,43.942],[2.882181278449991,42.69891346298559],
                [4.805,43.942],[3.876689130103614,43.61014966221117],
                [4.805,43.942],[1.4415228172669288,43.6006657474729],
                [4.805,43.942],[4.806820743234113,43.94474033203062], 

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
