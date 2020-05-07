<script>
	import Responsive from "./components/Responsive.svelte";
	import Footer from "./components/Footer.svelte";
	import NavBar from "./components/NavBar.svelte";
	import HospitalLocator from "./components/HospitalLocator.svelte";
	import FrontPageBody from "./components/FrontPageBody.svelte"
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import BuildPPE from "./routes/BuildPPE.svelte"
  import DonatePPE from "./routes/DonatePPE.svelte"
  import Fundaraise from "./routes/Fundraise.svelte"
  import NavLink from "./components/NavLink.svelte";
  import LoginPage from "./routes/LoginPage.svelte"
  import Register from "./routes/Register.svelte"
  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="about" component="{About}" />
    <Route path="BuildPPE" component="{BuildPPE}" />
    <Route path="DonatePPE" component="{DonatePPE}" />
    <Route path="Fundraise" component="{Fundaraise}" />
    <Route path="LoginPage" component="{LoginPage}" />
    <Route path="Register" component="{Register}" />
 />
    <Route path="/"><Home /></Route>
  </div>
</Router>


