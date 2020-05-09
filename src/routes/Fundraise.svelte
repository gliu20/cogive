
<script>
	import Responsive from "../components/Responsive.svelte";
	import Footer from "../components/Footer.svelte";
	import NavBar from "../components/NavBar.svelte";
	import HospitalLocator from "../components/HospitalLocator.svelte";
    import FrontPageBody from "../components/FrontPageBody.svelte"

</script>
<style>

.button-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>

<NavBar></NavBar>

<Responsive>
<div class="container">
    <h1 class="title">Fundraising for COVID-19</h1>
    <div class = "fundraise-text">
        <h1>Cogive recognizes one main problem: </h1>
        <p>The large barrier to many student initiatives is the amount of planning needed. Many schools require detailed proposal forms and well-thought out plans from students who want to carry out fundraisers. The amount of effort required can be a major deterrent for students who want to run events.</p>
        <p>That is why we have prepared a series of materials and guides to assist students to successfully carry out fundraisers, encourage volunteers, and utilize the materials in their communities to increase their efforts and produce quality Personal Protective Equipment (PPE) for those in need.</p>

        <h1 class="subtitle">Recruiting Volunteers</h1>
        <ul>
            <li>
                <h3> Ask </h3>
                <p>This may seem obvious, but it is often overlooked. Many people in the community are looking for opportunities to help out. Extend your invitation to different platforms, spread the word through people, and remember to ask one-on-one. Prospective volunteers are all around you. </p>
            </li>
            <li>
                <h3>Social Media</h3>
                <p>One of the biggest tools in this day and age is social media. Create flyers, recrutional videos and develop a Linkedin to recruit members. Other social media platforms include Instagram, Twitter, or Facebook.</p> 
            </li>
            <li>
                <h3>Consider Community Partnerships</h3>
                <p>Members of churches, fitness centers, and even local book clubs (just to name a few) offer plenty of people who would love to help your project. Try to partner with groups that “fit” your cause. Work to establish an ongoing relationship with these communities.</p> 
            </li>
        </ul>

        <h1 class="subtitle">Fundraising Ideas!</h1>
        <p>With schools closing and restrictions on large gatherings, our team has provided many ways students can organize and carry out fundraisers.</p> 
        <ul>
            <li>
                <h3>Movie Nights</h3>
                <p>Through online platforms, students can organize a virtual movie night. Through ticket sales, students can gather funds for building PPE.</p>
            </li>
            <li>
                <h3>Karaoke Nights</h3>
                <p>Once again, like movie nights, students can host a karaoke night, where singers and musicians can share their talents and raise money for the cause.</p>
            </li>
            <li>
                <h3>Game Tournaments</h3>
                <p>Students can create a series of challenges and games for teams to compete in. Teams can register to compete in the challenges with top scorers winning a prize. We recommend getting local businesses involved for prize sponsorships.</p> 
            </li>
            <li>
                <h3>Online Classes</h3>
                <p>Students have many talents! Lead classes to teach your community different skills, such as painting, coding, knitting, etc. These events can be adapted to fit your community’s needs and goals.</p> 
            </li>
            <li>
                <h3>Donation Matching Drive</h3>
                <p>Partner with local companies or a major donor. Many donors love to know that their donation was leveraged.</p>
            </li>
        </ul>

        <h1 class="subtitle">Proposal Templates</h1>
        <p>Many schools require proposal forms and detailed plans before administrators can approve fundraising events. Your fundraising plan also needs a sense of direction. Here we have provided some templates to help you get started.</p>
        <div class="button-menu">
            <button>General proposal form</button>
            <button>Suggested timeline</button>
            <button>Getting people to sign up</button>
            <button>How to run a fundraiser</button>
        </div>
        
        <h1 class="subtitle">Charities to donate money to</h1>
        <h1>TODO: add links to reputable charities.</h1>
    </div>
</div>
</Responsive>

<Footer></Footer>