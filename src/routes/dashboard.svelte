<script>    
import NavBar from "../components/NavBar.svelte";
import NavLink from "../components/NavLink.svelte";
import { user } from '../store.js';
import firebase from 'firebase/app';
import {getInfo} from '../firebase.js'
// const database = firebase.database()
// const userInfo = database.ref("users/"+user.userid+"/rewards")
var job = ''
var userId = firebase.auth().currentUser.uid;
firebase.database().ref('/users/' + userId + "/rewards").once('value').then(function(snapshot) {
   job = (snapshot.val() && snapshot.val().occupation);
  // ...
});
var userOccupation = firebase.database().ref('/users/' + userId)
userOccupation.on('value', function(snapshot) {
  updateUserOccupation(postElement, snapshot.val());
});


var occupation = user.awards;
console.log(occupation);
var email;
firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
    			// User is signed in.
            	email = user.email;
  			} 
			else {
    		// User is signed out.
            // ...
            // window.location.replace("https://cogive.now.sh/")
  			}
		});
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
    <p>your job is {userOccupation}</p>
    
</div>

