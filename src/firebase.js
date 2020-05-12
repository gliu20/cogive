import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: "AIzaSyCb1TUr1VGeUWi2I1vTKxNS0brdmubDVgc",
	authDomain: "cogive-354a8.firebaseapp.com",
	databaseURL: "https://cogive-354a8.firebaseio.com",
	projectId: "cogive-354a8",
	storageBucket: "cogive-354a8.appspot.com",
	messagingSenderId: "377985639280",
	appId: "1:377985639280:web:7c6455ade45b32aa6625b5"
};

firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration

// Initialize Firebase
firebase.auth();
const signIn = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
}
const signUp = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
}

const getInfo = () => {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			return user.email;
		}
		else {
			// User is signed out.
			// ...
		}
	});
}
var user = firebase.auth().currentUser;
const verifyEmail = () => {

	user.sendEmailVerification().then(function () {
		// Email sent.
	}).catch(function (error) {
		// An error happened.
	});

}


export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export { getInfo }