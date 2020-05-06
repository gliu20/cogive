
<script>
	import Responsive from "../components/Responsive.svelte";
	import Footer from "../components/Footer.svelte";
	import NavBar from "../components/NavBar.svelte";
	import HospitalLocator from "../components/HospitalLocator.svelte";
    import FrontPageBody from "../components/FrontPageBody.svelte"

</script>

<NavBar></NavBar>

<Responsive>
<div class="container">
    <h1 class="title">Producing PPE</h1>
    <p>Making PPE can be easily done with a 3D printer or a laser cutter. Many schools or universities are likely to own this kind of equipment. Check and see if you can use these facilities to contribute!</p>
    <h1 class="subtitle">3D Printing Masks</h1>
        <h3>3D Printing</h3>
        <ul>
            <li>3D printing technology is used to produce objects of practically unlimited complexity and variable size, shape, and geometry, in contrast to traditional construction methods.</li>
            <li>The production of said objects relies on 3D virtual CAD models designed on appropriate software.</li>
            <li>There are almost a dozen types of 3D printing, but the most widely available and inexpensive types of 3D printing are Fused Filament Fabrication (FFF) and Selective Laser Sintering (SLS).</li>
        </ul>
        <h3>NanoHack by Copper3D</h3>
        <p>The “NanoHack” model by Copper3D is an open-sourced mask design. It is antiviral, reusable, modular, washable, recyclable and low-cost. This model - made of copper, which is effective in killing the coronavirus - can be downloaded anywhere and 3D printed with any FDM/FFF equipment, even a low cost one.</p>
        <a href="https://copper3d.com/hackthepandemic/">View the details for producing NanoHack masks here.</a>
        <br/><br/>
        <a href="www.google.com">Here is a list of more 3D printing resources.</a>
        <h3>An important disclaimer:</h3>
        <p><i>3D printed PPE is unlikely to provide fluid barrier and air filtration protection like FDA-cleared surgical masks. However, they can still act as a physical barrier, and the need for PPE has become so desperate in many hospitals that any piece of equipment that remotely decreases the risk of transmission is appreciated. The FDA guidelines originally discouraged the use of most 3D printed PPE, but due to extremely heavy demand it has relaxed those restrictions.</i></p>
    <h1 class="subtitle">Laser Cutting Face Shields</h1>
        <h3>Face Shields</h3>
        <ul>
            <li>They are used to protect the facial area and allow for greater reusability of face masks like the N95 mask. This is a recommended item, mainly because there aren’t complex regulations, and most facilities are in need of this protection.</li>
            <li>There should be enough space between the clear shield and face. This would allow for masks to be worn underneath.</li>
            <li>Shields must have a top hood/cover to protect from falling droplets.</li>
        </ul>
        <h3>Kitronik</h3>
        <p>For producing face shields, we recommend the simple laser cut face visor for use as PPE, designed by Kitronik. These sheilds are completely laser cut from polypropylene and can be done at speed.</p>
        <a href="https://www.kitronik.co.uk/blog/kitronik-make-nhs-frontline-ppe-visors/">View the details for producing Kitronik face shields here.</a>
        <br/><br/>
        <a href="www.google.com">Here is a list of more laser cutting resources.</a>
    <h1 class="subtitle">Sanitization</h1>
        <ul>
            <li>When handling materials, clean your hands with soap and water. If possible, wear gloves when sanitizing PPE.</li>
            <li>If working together, students must maintain 2 metres of distance between each other.</li>
            <li>When producing PPE, wear shields, masks and overalls.</li>
            <li>Wipe down with alcohol-based wipes or spray containing at least 70% alcohol and leave on the surface for at least 30 seconds.</li>
            <li>Place and seal finished PPE into plastic bags immediately.</li>
            <li>Leave for 72 hours before distributing to reduce the risk of surface contamination.</li>
        </ul>
        <p>To ensure that PPE is produced safely, we also encourage students to follow FDA regulations and carry out the following checks on samples of their PPE.</p>
        <h3>FDA regulations</h3>
        <ul>
            <li></li>
        </ul>
</div>
</Responsive>

<Footer></Footer>