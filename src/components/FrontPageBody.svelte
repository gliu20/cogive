<script>
    import Responsive from "./Responsive.svelte";
</script>
<style>
.frontpage-content {
    width: 100vw;
    padding-left: 0vw;
    display: flex;
    flex: row;
}

.frontpage-text {
    width: 50vw;
}

.frontpage-text h2 {
    font-size: 6vw;
    margin-bottom: 0;
}

.frontpage-text h1 {
    font-size: 12vw;
    margin-top: 10px;
    margin-bottom: 5vw;
}

.frontpage-text h4 {
    font-size: 1.8vw;
    font-weight: 300;
    color: gray;
}

#maskLogo {
    width: 45vw;
}
</style>
<Responsive>

	<div class="container">
		<div class="frontpage-content">
            <div class="frontpage-text">
                <h2>Welcome to</h2>
                <h1>Cogive</h1>
                <h4>An online platform to empower student efforts to raise funds and produce PPE using school resources for local hospitals.</h4>
            </div>
            <img src="mask.svg" id="maskLogo" alt="mask">
        </div>
</Responsive>
