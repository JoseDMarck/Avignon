mapboxgl.accessToken = 'pk.eyJ1IjoiZmFsbGVuYXJ0aXN0IiwiYSI6IkRHY2JKRWMifQ.m6rylJF-IEcmwtiRsVO1WA';

if (!mapboxgl.supported()) {

	console.log('Mapbox GL not supported! Using standard map');

} else {

	var center = [51.5, -0.1];

	var map = new mapboxgl.Map({
		container: 'map',
		center: center,
		zoom: 8,
		style: 'http://www.lenart.pl/assets/codepen/customstyle.json'
	});

	// Markers
	map.on('style.load', function() {
		map.addSource("markers", {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [-0.08, 51.48]
					},
					"properties": {
						"title": "Lorem",
						"marker-symbol": "marker"
					}
				}, {
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [-0.26, 51.52]
					},
					"properties": {
						"title": "Ipsum",
						"marker-symbol": "marker-hole"
					}
				}]
			}
		});

		map.addLayer({
			"id": "markers",
			"type": "symbol",
			"source": "markers",
			"layout": {
				"icon-image": "{marker-symbol}-32",
				"text-field": "{title}",
				"text-font": "Open Sans Semibold, Arial Unicode MS Bold",
				"text-offset": [0, 0.8],
				"text-anchor": "top"
			},
			"paint": {
				"text-size": 16,
				"text-color": "#fff",
				"text-halo-width": 2,
				"text-halo-blur": 1,
				"text-halo-color": "rgb(0,64,220)"
			}
		});
	});

	map.addControl(new mapboxgl.Navigation());
	
}