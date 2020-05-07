<script>    
import NavBar from "../components/NavBar.svelte";
import NavLink from "../components/NavLink.svelte";
import { user } from '../store.js';
import firebase from 'firebase/app';
// const database = firebase.database()
// const userInfo = database.ref("users/"+user.userid+"/rewards")
var occupation = user.awards;
console.log(occupation);
</script>
<style>
#doctorLogo {
    width: 15vw;
}
</style>
<NavBar></NavBar>
<div id="accountContainer">
    <img src="doctor.svg" id="doctorLogo" alt="doctor">
    <p>Your email address is {$user.email}</p>
    
</div>

