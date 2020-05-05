<script>
    import HospitalMap from "./HospitalMap.svelte";
    import Responsive from "./Responsive.svelte";

    let hospitalDigest = [];
</script>

<style>
    @media (min-width: 1000px) {
        .hospital-locator-widget {
            display: flex;
            height: 30rem;
        }
    }

    .hospital-map {
        flex: 2;
        margin: 0px 15px;
        height:30rem;
    }

    .hospital-list {
        flex: 1;
        overflow-y: auto;
        height: 100%;
        padding: 0px 10px;
    }

    .card {
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 0px 2px 1px #eee;
        margin: 8px 0px;
        display: flex;
        background: #fff;
    }

    .card-avatar {
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .avatar-label {
        text-align: center;
        text-transform: uppercase;
        font-size: .875rem;
    }

    .avatar {
        border-radius: 999px;
        background-color: rgba(0, 0, 0, .6);
        color: #fff;
        padding: 10px;
        width: 60px;
        height: 60px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
    }

    .card-details {
        flex: 1;
    }
</style>
<Responsive>
    <div class="hospital-locator-widget">
        <div class="hospital-map">
            <HospitalMap bind:hospitalDigest></HospitalMap>
        </div>
        <div class="hospital-list">
            <h2>Find a hospital in need nearby.</h2>
            {#each hospitalDigest as hospital}
            <div class="card">
                <div class="card-avatar">
                    <p class="avatar">{hospital.beds * 2}</p>
                    <p class="avatar-label">Estimated<br/> PPE need</p>
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
</Responsive>