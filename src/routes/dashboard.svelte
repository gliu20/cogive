<script>    
import NavBar from "../components/NavBar.svelte";
import NavLink from "../components/NavLink.svelte";
import firebase from 'firebase/app';
import {getInfo} from '../firebase.js'
import Footer from "../components/Footer.svelte";
var email = '';
var job = '';
var awards = '';
var ppeDonated = '';
var Hospital = '';
const database = firebase.database()
// const userInfo = database.ref("users/"+user.userid+"/rewards")
var userOccupation = '';
var user = firebase.auth().currentUser;
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('job');
provider.setCustomParameters({
            'prompt': "jobless"
            });
var email = user.email;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

            database.ref('/users/' + user.uid).once('value').then(function(snapshot) {
            job= (snapshot.val() && snapshot.val().job) || 'Anonymous';
            });
            if(job = "person"){
                database.ref('/users/' + user.uid).once('value').then(function(snapshot) {
                    awards = (snapshot.val() && snapshot.val().rewardLevel) || 'Anonymous';
                    ppeDonated = (snapshot.val() && snapshot.val().ppeDonated) || 'Anonymous';  
                    });
            }
            else{
                database.ref('/users/' + user.uid).once('value').then(function(snapshot) {
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
let userguy ;

if(job = "doctor"){
    userguy = { doctorman: true }
}
else{
    let userguy = { doctorman: false }
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
                
            </div>
        </div>
        </div>
{/if}
<!-- {#if job != "doctor" || "person"}
<div></div>
{/if} -->
<Footer></Footer>
<!-- <div class="container">
    <div class="accountContainer">
        <img src="{job}.svg" id="iconLogo" alt="doctor" style= "float: right">

        <div class="infoDash">
            <p><strong>Email: {email}</strong></p>
            <p><strong>Role : {job}</strong></p>
            <p><strong>Reward Level : {awards}</strong></p>
            <p><strong>PPE Donated : {ppeDonated}</strong></p>
        </div>
    </div>

</div> -->


