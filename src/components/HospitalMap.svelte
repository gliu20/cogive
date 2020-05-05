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

    export let hospitalDigest

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
                interactive: true
            });
            
            
            await addHospitalMarkers()
            locate()
        }
    }
    async function locate() {
        location = await hospitalLocator.getLocationFromBrowser();

        

        map.fitBounds([
            [location.longitude - .15,location.latitude - .15],//southwest
            [location.longitude + .15,location.latitude + .15]//northeast
        ])
        
        map.setMaxBounds([
            [location.longitude - .15,location.latitude - .15],//southwest
            [location.longitude + .15,location.latitude + .15]//northeast
        ])

        // force mapbox to update zoom levels due to new bounds
        map.flyTo({
            center: [location.longitude,location.latitude],
            zoom: 10
        });
        
    }


    async function addHospitalMarkers() {
        const hospitalList = await hospitalLocator.getHospitalsNearby();
        hospitalDigest = hospitalLocator.toHopsitalDigest(hospitalList);


        hospitalDigest.forEach((item) => {
            const {
                latitude, longitude, 
                name, phone, website,
                city, housenumber, postcode, street
            } = item;

            const address = [
                `${housenumber} ${street}<br/>`,
                `${city} ${postcode}`
            ].join("\n");

            const hospitalDetails = [
                `<a href="${website}" rel="noopener noreferrer" target="_blank"><strong>${name}</strong></a><br/>`,
                `<em>${phone}</em><br/>`,
                `<br/>`,
                `${address}`
            ].join("\n");

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