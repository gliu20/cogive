<svelte:head>
    <!-- Mapbox -->
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js' on:load={onMapboxLoaded}></script>

    <!-- custom api for getting hosptial data -->
    <script src="libs/cache.js" on:load={onCacheLoaded}></script>
    <script src="libs/tokens.js" on:load={onTokensLoaded}></script>
    <script src="libs/hospitalLocator.js" on:load={onHospitalLocatorLoaded}></script>
</svelte:head>

<script>
            
    import { onMount } from 'svelte';
    // keep track of what's loaded;
    // we need this to initialize map only when 
    // everything is ready
    let mounted = false;
    let mapboxLoaded = false;
    let cacheLoaded = false;    
    let tokensLoaded = false;
    let hospitalLocatorLoaded = false;    
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
    function onCacheLoaded () {
        cacheLoaded = true;
        onReady();
    }
    function onTokensLoaded () {
        tokensLoaded = true;
        onReady();
    }
    function onHospitalLocatorLoaded () {
        hospitalLocatorLoaded = true;
        onReady();
    }

    async function onReady() {
        // this runs when everything is ready
        // aka mapbox loaded and all libs and component is mounted
        if (mounted && mapboxLoaded && cacheLoaded && tokensLoaded && hospitalLocatorLoaded) {
            mapboxgl.accessToken = tokens.mapbox;
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v10',
                // why 0,0 b/c we will get coordinates later; 
                // so ppl will see a map somewhere even if there are not coordinates available
                center: [0, 0],
                zoom: 1,
                interactive: false
            });
            
            

            await addHospitalMarkers()
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

        hospitalList.elements.forEach(item => {
            
            let latitude;
            let longitude;

            let address;

            let {name,phone,website} = item.tags;

            let city = item.tags["addr:city"] || "Unknown";
            let housenumber = item.tags["addr:housenumber"] || "Unknown";
            let postcode = item.tags["addr:postcode"] || "Unknown";
            let street = item.tags["addr:street"] || "Unknown";

            name = name || "Unknown";
            phone = phone || "Unknown";
            website = website || `https://google.com/search?q=hospital+at+${name.replace(/ /g,"+")}`;

            address = [
                `${housenumber} ${street}<br/>`,
                `${city} ${postcode}`
            ].join("\n");

            let hospitalDetails = [
                `<a href="${website}" rel="noopener noreferrer" target="_blank"><strong>${name}</strong></a><br/>`,
                `<em>${phone}</em><br/>`,
                `<br/>`,
                `${address}`
            ].join("\n");

            if (item.lat) {
                latitude = item.lat;
                longitude = item.lon;
            }
            else {
                latitude = item.center.lat;
                longitude = item.center.lon;
            }


            // TODO get hospital details
            addHospitalMarker(map,latitude,longitude, hospitalDetails);
        })
    }

    function addHospitalMarker(map, latitude, longitude, hospitalDetails) {
        var coordinates = [longitude, latitude];
        
        var popup = new mapboxgl.Popup()
            .setHTML(hospitalDetails);

        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    }
    
     
    
</script>

<div id="map"></div>
