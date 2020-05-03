
export default app;

var geoRun = true;
function geoFindMe() {

	const status = document.querySelector('#status');
	const mapLink = document.querySelector('#map-link');
  
	mapLink.href = '';
	mapLink.textContent = '';
  
	function success(position) {
	  global; latitude  = position.coords.latitude;
	  longitude = position.coords.longitude;
  
	  status.textContent = '';
	  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
	}
  
	function error() {
	  status.textContent = 'Unable to retrieve your location';
	}
  
	if(!navigator.geolocation) {
	  status.textContent = 'Geolocation is not supported by your browser';
	} else {
	  status.textContent = 'Locating…';
	  navigator.geolocation.getCurrentPosition(success, error);
	}
  
  }
  
geoFindMe();

localStorage.setItem("latitudeLocalStorage", latitude);  
localStorage.setItem("longitudeLocalStorage", longitude);  
export var latitude;
export var longitude;
import App from './App.svelte';

var app = new App({
	target: document.body
});