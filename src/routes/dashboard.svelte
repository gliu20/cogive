<script>    
import NavBar from "../components/NavBar.svelte";
import NavLink from "../components/NavLink.svelte";
import { user } from '../store.js';
import firebase from 'firebase/app';
import {getInfo} from '../firebase.js'
// const database = firebase.database()
// const userInfo = database.ref("users/"+user.userid+"/rewards")
var occupation = user.awards;
console.log(occupation);
var email = getInfo()
</script>
<style>
#doctorLogo {
    width: 15vw;
}
</style>
<NavBar></NavBar>
<div id="accountContainer">
    <img src="doctor.svg" id="doctorLogo" alt="doctor">
    <p>Your email address is {email}</p>
    
</div>

