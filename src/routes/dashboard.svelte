<script>
    import NavBar from "../components/NavBar.svelte";
    import NavLink from "../components/NavLink.svelte";
    import firebase from 'firebase/app';
    import { getInfo } from '../firebase.js'
    import Footer from "../components/Footer.svelte";

    var email = '';
    var job = '';
    var awards = '';
    var ppeDonated = '';
    var Hospital = '';
    const database = firebase.database()
    var userOccupation = '';
    var user = firebase.auth().currentUser;

    var email = user.email;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // this gets and sets whatever the job is
            database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
                job = (snapshot.val() && snapshot.val().job) || 'Anonymous';
            });
            if (job = "person") {
                database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
                    awards = (snapshot.val() && snapshot.val().rewardLevel) || 'Anonymous';
                    //TODO shouldn't this value be 0
                    ppeDonated = (snapshot.val() && snapshot.val().ppeDonated) || 'Anonymous';
                });
            }
            else {
                database.ref('/users/' + user.uid).once('value').then(function (snapshot) {
                    Hospital = (snapshot.val() && snapshot.val().Hospital) || 'Anonymous';

                });
            }

            var userId = firebase.auth().currentUser.uid;


            // User is signed in.
            email = user.email;
        }
        else {
            // User is signed out.
            // ...
            window.location.replace("http://localhost:5000/")
        }
    });
    let userguy;

    if (job = "doctor") {
        userguy = { doctorman: true }
    }
    else {
        let userguy = { doctorman: false }
    }




    let name = 'test'
    let donationUserID;
    let ppeUPDATE;
    let ppeDonateduser;
    function updatePPE(userID, ppeUpdate) {
        firebase.auth().onAuthStateChanged(function (user) {
            database.ref('/users/' + userID).once('value').then(function (snapshot) {
                awards = (snapshot.val() && snapshot.val().rewardLevel) || 'Anonymous';
                ppeDonateduser = (snapshot.val() && snapshot.val().ppeDonated) || 'Anonymous';
            });
        });
        console.log("old ppe val" + ppeDonateduser)
        var ppeLevel = parseInt(ppeUpdate, 10) + parseInt(ppeDonateduser, 10)
        var newrewardLevel = ((ppeLevel - (ppeLevel % 10)) / 10)
        console.log("ppeUpdate" + ppeUpdate)
        console.log("current ppe level" + ppeLevel)
        console.log("rewardLevel : " + newrewardLevel);
        firebase.auth().onAuthStateChanged(function (user) {
            firebase.database().ref('users/' + userID).update({
                ppeDonated: ppeLevel,
                rewardLevel: newrewardLevel
            });
        });
    }
    let dummyInputVar;

    function doSomething() {
        updatePPE(donationUserID, ppeUPDATE);
    }
</script>
<style>

</style>
<NavBar></NavBar>
{#if job == "person"}
    <div class="container">
        <div class="accountContainer">
            <img src="{job}.svg" id="iconLogo" alt="doctor" style= "float: right">

            <div class="infoDash">
                <p><strong>Email: {email}</strong></p>
                <p><strong>Role : {job}</strong></p>
                <p><strong>Reward Level : {awards}</strong></p>
                <p><strong>PPE Donated : {ppeDonated}</strong></p>
                <p><strong>UserID : {user.uid}</strong></p>

            </div>
        </div>
        </div>
{/if}
{#if job == "doctor"}
    <div class="container">
        <div class="accountContainer">
            <img src="{job}.svg" id="iconLogo" alt="doctor" style= "float: right">

            <div class="infoDash">
                <p><strong>Email: {email}</strong></p>
                <p><strong>Hospital: {Hospital}</strong></p>
                <p><strong>Role : {job}</strong></p>
                <p><strong>UserID : {user.uid}</strong></p>
                <input type="text" bind:value = {donationUserID} />
                <input type="text" bind:value = {ppeUPDATE} />
                <button on:click={doSomething}></button>
            </div>
        </div>
        </div>
{/if}





<Footer></Footer>