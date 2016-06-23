$("#save_cinema").on("click", store);


function store(){
	var cinemaName = $('#cinema').val();
	var latitude = $('#lat').val();
	var longitude = $('#lon').val();

	window.localStorage.setItem(cinemaName, latitude +"," + longitude);
	console.log(window.localStorage.getItem(cinemaName));
}
if("geolocation" in navigator){
		console.log("geolocation is available!")
	} else {
		console.log("geolocation is not available")
	}
	navigator.geolocation.getCurrentPosition(onLocation, onError, options);

	function onLocation(position){
		console.log('Your latitude is ' + position.coords.latitude);
		console.log('Your longitude is ' + position.coords.longitude);
		document.getElementById('position').innerHTML = 'Lat: ' + 
		position.coords.latitude + ', lon: ' + position.coords.longitude 
	}
	function onError (error) {
	  // Delivers an error object with information about the error
	  console.error(error); 
	}
	var options = {
	enableHighAccuracy: true  // retrieve more accurate position, takes longer
	};
console.log(position.coords.latitude);

function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var radlon1 = Math.PI * lon1/180
  var radlon2 = Math.PI * lon2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.853159
  
  return dist
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.39, lng: -6.002},
    zoom: 8
  });
}
