<script>
    const database = firebase.database();
    const hospitalsRef = database.ref("hospitals");
    /**/

    let country;
    let state;
    let city;

    let status;


    const deferrables = debounce(1000,function () {
        status = "Found"
    },function () {
        status = `Searching for ${country} in ${state} in ${city}...`;
    });

    $: deferrables(country,state,city)

</script>


{status}

<input bind:value={country}>
<input bind:value={state}>
<input bind:value={city}>



