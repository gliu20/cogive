
<script>
	import Responsive from "../components/Responsive.svelte";
	import Footer from "../components/Footer.svelte";
	import NavBar from "../components/NavBar.svelte";
	import HospitalLocator from "../components/HospitalLocator.svelte";
    import FrontPageBody from "../components/FrontPageBody.svelte"

</script>
<style>
.fundraise-text h1{
	color: rgb(31, 31, 31);
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.5em;
	letter-spacing: 2px;
	text-decoration: underline;
}
.fundraise-text h5{
	position:relative;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1em;	
	left:30px;
}
.fundraise-text h2 {
	position:relative;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.25em;	
	left:30px;
	text-emphasis: initial;
	text-decoration: underline;
}
.fundraise-text h3{
	text-emphasis: unset;
	position:relative;
	left:60px;
	font-size: 1em;
}

</style>
<NavBar></NavBar>
<div class="container">
		<div class = "fundraise-text">
			<h1>CoGive recognizes one main problem: </h1>
			<h5>The large barrier to many student initiatives is the amount of planning needed. Many schools require detailed proposal forms and well-thought out plans from students who want to carry out fundraisers. The amount of effort required can be a major deterrent for students who want to run events.</h5>
			<h5>That is why we have prepared a series of materials and guides to assist students to successfully carry out fundraisers, encourage volunteers, and utilize the materials in their communities to increase their efforts and produce quality Personal Protective Equipment (PPE) for those in need.</h5>

			<h1>Recruiting Volunteers</h1>
			<h2> Ask </h2>
				<h3>-This may seem obvious, but it is often overlooked. Many people in the community are looking for opportunities to help out. Extend your invitation to different platforms, spread the word through people, and remember to ask one-on-one. Prospective volunteers are all around you. </h3>
			<h2>Social Media</h2>
				<h3>-One of the biggest tools in this day and age is social media. Create flyers, recrutional videos and develop a Linkedin to recruit members. Other social media platforms include Instagram, Twitter, or Facebook.</h3> 
			<h2>Consider Community Partnerships</h2>
				<h3>-Members of churches, fitness centers, and even local book clubs (just to name a few) offer plenty of people who would love to help your project. Try to partner with groups that “fit” your cause. Work to establish an ongoing relationship with these communities.</h3> 

			<h1>Fundraising!</h1>
				<h3>-With schools closing and restrictions on large gatherings, our team has provided many ways students can organize and carry out fundraisers.</h3> 
			<h2>Movie Nights</h2>
				<h3>-Through online platforms, students can organize a virtual movie night. Through ticket sales, students can gather funds for building PPE.</h3>
			<h2>Karaoke Nights</h2>
				<h3>-Once again, like movie nights, students can host a karaoke night, where singers and musicians can share their talents and raise money for the cause.</h3>
			<h2>Game Tournaments</h2>
				<h3>-Students can create a series of challenges and games for teams to compete in. Teams can register to compete in the challenges with top scorers winning a prize. We recommend getting local businesses involved for prize sponsorships.</h3> 
			<h2>Online Classes</h2>
				<h3>-Students have many talents! Lead classes to teach your community different skills, such as painting, coding, knitting, etc. These events can be adapted to fit your community’s needs and goals.</h3> 
			<h2>Donation Matching Drive</h2>
				<h3>-Partner with local companies or a major donor. Many donors love to know that their donation was leveraged.</h3>
</div>

		</div>
<Footer></Footer>