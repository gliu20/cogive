
export default app;

var geoRun = true;


localStorage.setItem("latitudeLocalStorage", latitude);  
localStorage.setItem("longitudeLocalStorage", longitude);  
export var latitude;
export var longitude;
import App from './App.svelte';

var app = new App({
	target: document.body
});