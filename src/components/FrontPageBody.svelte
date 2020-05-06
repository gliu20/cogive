<script>
    import Responsive from "./Responsive.svelte";
    import {Router, Link, Route} from "svelte-routing";
    import About from "../routes/About.svelte";
    import BuildPPE from "../routes/BuildPPE.svelte"
    import DonatePPE from "../routes/DonatePPE.svelte"
    import Fundaraise from "../routes/Fundraise.svelte"
    import NavLink from "./NavLink.svelte";
</script>
<style>

.frontpage-content {
    margin-top: -5vh;
    width: 100%;
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
    margin-bottom: 3vw;
}

.frontpage-text h4 {
    font-size: 1.8vw;
    font-weight: 300;
    color: gray;
}

#maskLogo {
    width: 45vw;
}

.nav {
    margin-top: -3vh;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.nav-button {
    border: 2px dashed gray;
    padding: 20px 0 20px 3vw;
    margin: 3vw;
    text-align: center;
}

.nav-button:hover {
    border: 2px dashed black;
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

        <nav class="nav">
            <ul class="navbar">
                <div class="nav-button"><NavLink to="/about">About</NavLink></div>
                <div class="nav-button"><NavLink to="/DonatePPE">Donate PPE</NavLink></div>
                <div class="nav-button"><NavLink to="/BuildPPE">Build PPE</NavLink></div>
                <div class="nav-button"><NavLink to ="/Fundraise">Fundraise</NavLink></div>
            </ul>
        </nav>
    </div>
</Responsive>
