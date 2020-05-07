<script>
    import Responsive from "./Responsive.svelte";
    import {Router, Link, Route} from "svelte-routing";
    import Home from "../routes/Home.svelte";
    import About from "../routes/About.svelte";
    import BuildPPE from "../routes/BuildPPE.svelte"
    import DonatePPE from "../routes/DonatePPE.svelte"
    import Fundaraise from "../routes/Fundraise.svelte"
    import NavLink from "./NavLink.svelte";
    import LoginPage from "../routes/LoginPage.svelte"
    import Register from "../routes/Register.svelte"
</script>


<style>
    .nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 10vh;
        display: flex;
        flex-direction: row;
        background-color: whitesmoke;
    }
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
    }
    #navLogo {
        height: 4vw;
        position: absolute;
        top: 1.5vh;
        right: 1.5vw;
    }

</style>

<Responsive>
    <nav class="nav">
        <ul class="navbar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/DonatePPE">Donate PPE</NavLink>
            <NavLink to="/BuildPPE">Build PPE</NavLink>
            <NavLink to ="/Fundraise">Fundraise</NavLink>
            <NavLink to = "/LoginPage">Login</NavLink>
            <NavLink to = "/Register">Register</NavLink>
        </ul>
        <img src="logo.png" id="navLogo" alt="logo"/>
    </nav>
    <div>
        <Route path="about" component="{About}" />
        <Route path="buildppe" component="{BuildPPE}" />
        <Route path="donateppe" component="{DonatePPE}" />
        <Route path="fundraise" component="{Fundaraise}" />
        <Route path="LoginPage" component="{LoginPage}" />
        <Route path="Register" component="{Register}" />
        <Route path="/"><Home /></Route>
        
  </div>
</Responsive>
