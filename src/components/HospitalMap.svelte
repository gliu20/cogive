<svelte:head>
    <!-- Mapbox -->
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js' on:load={onMapboxLoaded}></script>

    <!-- custom api for getting hosptial data -->
    <script src="libs/cache.js"></script>
    <script src="libs/tokens.js"></script>
    <script src="libs/hospitalLocator.js"></script>
</svelte:head>

<script>
            
    import { onMount } from 'svelte';
    // keep track of what's loaded;
    // we need this to initialize map only when 
    // everything is ready
    let mounted = false;
    let mapboxLoaded = false;
    let location;
    let map;
    onMount(() => {
        mounted = true;
        onReady();
    })
    function onMapboxLoaded() {
        mapboxLoaded = true;
        onReady();
    }
    async function onReady() {
        // this runs when everything is ready
        // aka mapbox loaded and component is mounted
        if (mounted && mapboxLoaded) {
            mapboxgl.accessToken = tokens.mapbox;
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v10',
                // why 0,0 b/c we will get coordinates later; 
                // so ppl will see a map somewhere even if there are not coordinates available
                center: [0, 0],
                zoom: 1
            });
            
            locate()
        }
    }
    async function locate() {
        location = await hospitalLocator.getLocationFromBrowser();
        map.flyTo({
            center: [location.longitude,location.latitude],
            zoom: 10
        });
    }
    async function addHospitalMarkers() {
        const hospitalList = await hospitalLocator.getHospitalsNearby();
        let address;
        hospitalList.elements.forEach(item => {
            
            let latitude;
            let longitude;
            if (item.lat) {
                latitude = item.lat;
                longitude = item.lon;
            }
            else {
                latitude = item.center.lat;
                longitude = item.center.lon;
            }
            addHospitalPopup(map,latitude,longitude);
            addHospitalMarker(map,latitude,longitude);
        })
    }
    function addHospitalMarker(map, latitude, longitude) {
        var coordinates = [longitude, latitude];
        
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }
    
    
    function addHospitalPopup(map, latitude, longitude) {
        var address = ""
        var coordinates = [longitude, latitude];
        const KEY = "AIzaSyAtJEFPjooKhSStCp1CUJrQc22duqrkFJ4";
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${KEY}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            address = data.results[0].formatted_address
            var popup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(address)
            .addTo(map);   
        })
        
        .catch(err => console.warn(err.message));
         
    };
    
     
    
</script>

<div id="map"></div>

<button on:click={locate}>Locate</button>

<button on:click={addHospitalMarkers}>add markers</button>
<div class="footer">© CoGive 2020</div>
