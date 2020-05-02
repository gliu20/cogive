<script>
    const database = firebase.database();
    const hospitalsRef = database.ref("hospitals");
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


    async function getNearbyHospitals(lat, long) {

        // Access API

        let hospitalListAPI = "https://www.overpass-api.de/api/interpreter?data=[out:json][timeout:25];nwr(around:10000," + lat + "," + long + ")[%22amenity%22=%22hospital%22];out%20center;"

        const hospitalListResponse = await fetch(hospitalListAPI, {});
        const hospitalListJSON = await hospitalListResponse.json();

        // Loop through list of hospitals and extract coordinates & name

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
        var hospitalDirectory = await getNearbyHospitals(22.39, 114.10);
        var text = document.getElementById('hospitals');
        text.innerText = hospitalDirectory;
    }

    displayHospitals();

</script>


{status}<br />

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>

<br/>

<p id="hospitals"></p>