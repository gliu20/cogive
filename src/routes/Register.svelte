<script>
    import { auth, provider } from '../firebase.js';
    import firebase from 'firebase/app';
    import { navigate } from 'svelte-routing';
    import { user } from '../store.js';
    import NavBar from "../components/NavBar.svelte";
        import Footer from "../components/Footer.svelte";

    const database = firebase.database()

    let email = '';
    let password = '';
    let job = '';

    const handleRegisterForm = () => {
        auth.createUserWithEmailAndPassword(email, password).then(function (result) {
        let firebaseUser = auth.currentUser;
        if(firebaseUser) {
            let {email} = firebaseUser;
            console.log('first', $user);
            user.set({...$user, loggedIn: true, email});
            console.log('then', $user);
            navigate('/dashboard');
            const database = database()
            writeUserData(user.userID, 'who cares', user.email)
            
        }
        }).catch(error => console.log(error));
        
    };
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            function writeUserData(jobs) {
                  firebase.database().ref('users/' + user.uid).set({
                      job:"person",
                      ppeDonated: "0",
                      rewardLevel: "0"
                  });
                  
            }
            writeUserData();
            
            
        }
    });
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
        justify-content: center;
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
        <button class="userButton" on:click={handleRegisterForm}>Register</button>
        <div>
        
    </div>
    </div>
</div>  
<Footer></Footer>