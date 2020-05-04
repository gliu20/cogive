<script>


    /**/

    let country = "";
    let state = "";
    let city = "";

    let status = "";
    let searchResult = "";
    const database = firebase.database()
    const hospitalsRef = database.ref("hospitals");
    const deferrables = debounce(1000, function () {
        hospitalsRef
            .child(country)
            .child(state)
            .child(city)
            .once("value")
            .then(function (snapshot) {
                searchResult = JSON.stringify(snapshot.val());
            })


        status = `Found ${searchResult}`;
    }, function () {
        status = `Searching for ${country} in ${state} in ${city}...`;
    });

    $: deferrables(country, state, city)

    // TO-DO: FIND LAT AND LONG FROM COUNTRY, STATE, CITY

    // Function to create a map
    function makeMap(lat, long) {
        mapboxgl.accessToken = "pk.eyJ1IjoibWVlLWtlbGw0MiIsImEiOiJjazlwdXl1NWIwZWZuM25tZXhkMXYxMjFmIn0.6vChDLXY_PeIkScr6c6otQ"

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [long, lat],
            zoom: 10
        });

        return map;
    }

    // Function to add a marker at a hospital coordinate
    function addHospitalMarker(map, lat, long) {

        var coordinates = [lat, long];

        // Create a HTML element for each marker
        var mark = document.createElement('div');
        mark.className = 'marker';

        // Add to map
        new mapboxgl.Marker(mark)
            .setLngLat(coordinates)
            .addTo(map)

    }


    // There might be a better way of doing this in Svelte but idk

    async function displayHospitals() {

        var hospitalDirectory = await getNearbyHospitals(latitude, longitude);
        var text = document.getElementById('hospitals');
        text.innerText = hospitalDirectory;

        const map = await makeMap(latitude, longitude);
        for (hospital in hospitalDirectory) {
            addHospitalMarker(map, hospital[0], hospital[1]);
        }

    }

    displayHospitals();
    console.log(longitude + " " + latitude);

</script>


{status}<br />

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>

<br />

<p id="hospitals"></p>