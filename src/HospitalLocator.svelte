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

</script>


{status}<br />

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>