<script>
    import HospitalMap from "./HospitalMap.svelte";

    let hospitalDigest = [];
</script>

<style>
    section {
        display:flex;
    }
</style>

<section>
    <HospitalMap bind:hospitalDigest></HospitalMap>
    <div>
        <h2>Find a hospital in need nearby.</h2>
        {#each hospitalDigest as hospital}
            <p>{hospital.name}</p>
        {/each}
    </div>
</section>