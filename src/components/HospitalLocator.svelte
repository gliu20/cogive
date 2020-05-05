<script>
    import HospitalMap from "./HospitalMap.svelte";

    let hospitalDigest = [];
</script>

<style>
    section {
        display: flex;
    }
</style>

<section>
    <HospitalMap bind:hospitalDigest></HospitalMap>
    <div>
        <h2>Find a hospital in need nearby.</h2>
        {#each hospitalDigest as hospital}
            <div class="card">
                <div class="card-avatar">
                    <p class="avatar-label">Estimated PPE need</p>
                    <p class="avatar">{hospital.beds}</p>
                </div>
                <div class="card-details">
                    <h3><a href={hospital.website} rel="noopener noreferrer" target="_blank">{hospital.name}</a></h3>
                    <p><em>{hospital.phone}</em></p>
                    <p>
                        {hospital.housenumber} {hospital.street}<br/>
                        {hospital.city} {hospital.postcode}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>