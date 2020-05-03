<script>
    const database = firebase.database();
    const hospitalsRef = database.ref("hospitals");
    var longyHospital= localStorage.getItem("longitudeLocalStorage");  
    var latyHospital= localStorage.getItem("latitudeLocalStorage");

    latHospital = latitude;
    longHospital = longitude;
    console.log(latHospital);
    /**/

    let country = "";
    let state = "";
    let city = "";

    let status = "";
    let searchResult = "";

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

    // Do stuff with hospital data
    async function getNearbyHospitals(lat, long) {

        // Access API

        let hospitalListAPI = "https://www.overpass-api.de/api/interpreter?data=[out:json][timeout:25];nwr(around:10000," + lat + "," + long + ")[%22amenity%22=%22hospital%22];out%20center;"

        const hospitalListResponse = await fetch(hospitalListAPI, {});
        const hospitalListJSON = await hospitalListResponse.json();

        // Loop through list of hospitals, extract coordinates & name, add to map

        var hospitalList = [];

        for (var i = 0; i < hospitalListJSON["elements"].length; i++) {

            var element = hospitalListJSON["elements"][i];

            var hospitalData = [
                element["center"]["lat"], element["center"]["lon"], element["tags"]["name"]
            ];

            hospitalList = [...hospitalList, hospitalData];

        }

        return hospitalList;

    }

    // There might be a better way of doing this in Svelte but idk

    async function displayHospitals() {

        var hospitalDirectory = await getNearbyHospitals(latHospital, longHospital);
        var text = document.getElementById('hospitals');
        text.innerText = hospitalDirectory;

        const map = await makeMap(latHospital, longHospital);
        for (hospital in hospitalDirectory) {
            addHospitalMarker(map, hospital[0], hospital[1]);
        }

    }

    displayHospitals();

</script>


{status}<br />

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>

<br/>

<p id="hospitals"></p>