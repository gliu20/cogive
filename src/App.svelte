<svelte:head>
	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

	<!-- TODO: Add SDKs for Firebase products that you want to use
		https://firebase.google.com/docs/web/setup#available-libraries -->
	<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

	<script>
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyDaKaJMlGgKFWG6cVLkD1gslEmCiGg1HKE",
		authDomain: "co-give.firebaseapp.com",
		databaseURL: "https://co-give.firebaseio.com",
		projectId: "co-give",
		storageBucket: "co-give.appspot.com",
		messagingSenderId: "27467077098",
		appId: "1:27467077098:web:461e156f11dea6043e0e93",
		measurementId: "G-2GNGLXNHGV"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	</script>
</svelte:head>


<script>
	import HospitalLocator from "./HospitalLocator.svelte";
</script>


<HospitalLocator></HospitalLocator>