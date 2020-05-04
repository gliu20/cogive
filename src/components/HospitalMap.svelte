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

    function onMapboxLoaded () {
        mapboxLoaded = true;
        onReady();
    }

    async function onReady () {
        // this runs when everything is ready
        // aka mapbox loaded and component is mounted
        if (mounted && mapboxLoaded) {
            mapboxgl.accessToken = tokens.mapbox;
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v10',
                // why 40.7128 , 74.0060? b/c we will get coordinates later; 
                // so ppl will see a map somewhere even if there are not coordinates available
                center: [40.7128, -74.0060],
                zoom: 10
            });
        }
    }

    async function locate () {
        location = await hospitalLocator.getLocationFromBrowser();

        map.flyTo({
            center: [location.longitude,location.latitude]
        });
    }
</script>

<div id="map"></div>

<button on:click={locate}>Locate</button>