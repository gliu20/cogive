<script>
    import { auth, provider } from '../firebase.js';
    import { navigate } from 'svelte-routing';
    import { user } from '../store.js';
    import NavBar from "../components/NavBar.svelte";
    import NavLink from "../components/NavLink.svelte";
    import Register from "./Register.svelte"
    import { Router, Link, Route } from "svelte-routing";
    export let url = "";

    let email = '';
    let password = '';
    const handleGoogleLogin = () => {
      auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var firebaseuser = result.user;
        if(firebaseuser) {
            let {email} = firebaseuser;
            console.log('Google first', $user);
            user.set({...$user, loggedIn: true, email});
            console.log('Google then', $user);
            navigate('/dashboard');
        }
        // ...
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
    };
    // Destructuring to obtain email and password from form via Event
    const handleLoginForm = () => {
        auth.signInWithEmailAndPassword(email, password).then(function(result) {
        let firebaseUser = auth.currentUser;
        if(firebaseUser) {
            let {email} = firebaseUser;
            console.log('first', $user);
            user.set({...$user, loggedIn: true, email});
            console.log('then', $user);
            navigate('/dashboard');
        }
        }).catch(error => alert(error.message));
        
    };
    const register = () => {
        
    }
</script>

<style>
    .field {
        color: black;
        font-weight: bold;
        font-size: 20px;
        width: 30vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3vh;
    }
    input[type=email], input[type=password] {
        color: #1155cc;
        width: 20vw;
        height: 35px;
        border: 1px solid #c7d0d2;
        border-bottom: 2px solid black;
        border-radius: 2px;
        -webkit-transition: all .4s ease;
        -moz-transition: all .4s ease;
        transition: all .4s ease;
    }
    #lower {
        width: 30vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5vh;
        padding-top: 3vh;
        border-top: 2px dashed #ff0056;
    }
</style>
<NavBar></NavBar>

<div id="userContainer">
    <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" bind:value={email}>
    </div>
    <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password}>
    </div>
    <div id="lower">
        <button class="userButton" on:click={handleLoginForm}>Login</button>
        <button class="userButton" on:click={handleGoogleLogin}>Google</button>
        <button class="userButton" on:click={register}>Register</button>
        <!-- <nav class="nav">
        <ul class="navbar">
            <NavLink to = "/Register">Register</NavLink>
        </ul>
        </nav> -->
    <Router url="{url}">
        <div>
        <Route path="Register" component="{Register}"></Route>
    </Router>
    </div>
</div>  
