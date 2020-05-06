
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
        <h1 class="title">Donate PPE</h1>
        <div class="step1">
            <h1 class="subtitle">1. Find a hospital to donate to.</h1>
            <p>Listed below are hospitals close to you that need PPE. The estimated amount of PPE needed is shown alongside the hospital's contact.</p>
            <HospitalLocator></HospitalLocator>
        </div>
        <div class="step2">
            <h1 class="subtitle">2. Read through our safety guidelines.</h1>
            <button link="#" style="width: 80vw;">SAFETY GUIDELINES</button>
            <p>When you are donating PPE, remember to follow appropriate hospital policy and these safety rules to reduce the risk of infection. Unless otherwise stated, please drop off the PPE themselves directly at the hospital. </p>
        </div>
        <div class="step3">
            <h1 class="subtitle">3. Register how much PPE you will give.</h1>
            <p>Please enter information about which hospital(s) you will donate to, how much PPE you expect to donate, what kind of PPE it will be, and when you expect to deliver. Cogive will send this information to your selected hospital(s).</p>
            <p><i>Note: the total amount of requested equipment displayed on the platform will only decrease once donated PPE has been received. We will send reminders near your deadline!</i></p>
            <h1>TODO: form.</h1>
            <p>Once you click submit, details of specific hospital policies will be sent to your email.</p>
        </div>

        <h3>Thank you for contributing!</h3>
    </div>
</Responsive>

<Footer></Footer>