// GOOGLE MAP

if ($('header').is('.header--about')) {

	window.initMap = function () {
		// Create an array of styles.
		var styles = [
			{
				stylers: [
					{ hue: "#ffffff" },
					{ saturation: 0 },
					{ lightness: 100 }
				]
			},{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ lightness: -20 },
					{ visibility: "simplified" }
				]
			},{
				featureType: "road",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
				]
			},{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ hue: "#009688" },
					{ saturation: 100 },
					{ lightness: -60 }
				]
			}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

		var mapOptions = {
			zoom: 15,
			center: {lat: 42.45, lng: 18.53},
			scrollwheel:  false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};

		var map = new google.maps.Map(document.getElementById('map'),
		mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		// Add marker
		var icon = {
	        url: 'assets/img/svg/map_marker.svg',
	        scaledSize: new google.maps.Size(50,75)
	    }
		var marker = new google.maps.Marker({
			position: {lat: 42.455, lng: 18.545},
			icon: icon,
			map: map
		});
	};

	$(document).ready(function() {
		initMap();
	});

}