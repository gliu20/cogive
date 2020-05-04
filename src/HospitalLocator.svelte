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


</script>


{status}<br />

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>

<br />

<p id="hospitals"></p>
