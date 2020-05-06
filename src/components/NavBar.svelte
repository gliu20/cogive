<script>
    import Responsive from "./Responsive.svelte";
    import {Router, Link, Route} from "svelte-routing";
    import Home from "../routes/Home.svelte";
    import About from "../routes/About.svelte";
    import NavLink from "./NavLink.svelte";

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
            <!-- <li class="nav-element"></li><a Link to="/" class = "nav-link">Home</a></Link>
            <li class="nav-element"></li><a Link to="about" class = "nav-link">About </a></Link>
            <li class="nav-element"></li><a Link to="blog" class = "nav-link">Blog</a></Link> -->
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            
        </ul>
        <img src="logo.png" id="navLogo" alt="logo">
    </nav>
    <div>
        <Route path="about" component="{About}" />
        <Route path="/"><Home /></Route>
  </div>
</Responsive>
