 <script>
    import { auth, provider } from '../firebase.js';
    import { navigate } from 'svelte-routing';
    import { user } from '../store.js';
    import NavBar from "../components/NavBar.svelte";
    let email = '';
    let password = '';
    const handleRegisterForm = () => {
        auth.createUserWithEmailAndPassword(email, password).then(function(result) {
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
</script>
<style>
.Register {
        float: right;
        margin-right: 20px;
        margin-top: 20px;
        width: 80px;
        height: 30px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        background-color: #acd6ef;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#acd6ef), to(#6ec2e8));
        background-image: -moz-linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
        background-image: linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
        border-radius: 30px;
        border: 1px solid #66add6;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255, 255, 255, .5);
        cursor: pointer;
    }
    </style>
<div id="userContainer">
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" bind:value={email}>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password}>
    </div>
    <div id="lower">
        <button class="Register" on:click={handleRegisterForm}>Login</button>
        
    </div>
    
</div> 