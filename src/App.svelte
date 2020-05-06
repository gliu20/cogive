<script>
	import Responsive from "./components/Responsive.svelte";
	import Footer from "./components/Footer.svelte";
	import NavBar from "./components/NavBar.svelte";
	import HospitalLocator from "./components/HospitalLocator.svelte";
	import FrontPageBody from "./components/FrontPageBody.svelte"
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="about" component="{About}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>


