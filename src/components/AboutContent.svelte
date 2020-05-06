<script>
    import Responsive from "./Responsive.svelte";
</script>

<style>
    .title {
        font-size: 4vw;
        text-decoration-line: underline;
        text-decoration-thickness: 10px;
    }
    .subtitle {
        font-size: 2vw;
        color: #1155cc;
    }
    p, li {
        font-size: 18px;
        line-height: 1.5;
    }
    h3 {
        color: #ff0056;
    }
</style>

<Responsive>
    <div class="container">
        <div class="about-content">
            <h1 class="title">About Cogive</h1>
            <div class="problem-text">
                <h1 class="subtitle">The Problem</h1>
                <p>Medical PPE (Personal Protective Equipment) include gowns, gloves, face shields, goggles, facemasks, hoods, and respirators. But according to Rowan & Laffey (2020), most PPE is not intended for re-processing. However, PPE is vital for enabling medical workers to operate safely at their full potential; therefore, making PPE as failsafe as possible for frontline healthcare workers fighting COVID-19 is an absolute priority.<p>
                <strong>Unfortunately, the influx of hospital patients during COVID-19 requiring treatment has caused a critical shortage of PPE.</strong>
                <p>In many countries, including Italy, the UK and the US, hospitals have reported shortages of PPE needed to care for critically ill patients (Ranney et al, 2020). While there have been efforts to help, the unequal distribution of equipment to hospitals and the lack of a centralized PPE donation system for students are among the leading causes for the PPE shortage and the lack of help provided by students.</p>
            </div>
            <div class="solution-text">
                <h1 class="subtitle">The Solution</h1>
                <h3>In response to this issue threatening the lives of our most valuable healthcare workers and possibly more patients, we have developed an initiative, Cogive, that provides students with achievable and concrete methods of aiding local hospitals and medical facilities.</h3>
                <ul>
                    <li>
                        <strong>Cogive will streamline communication between hospitals and users by displaying nearby hospitals in need of help and the exact amount of PPE needed for each hospital.</strong>
                        Users can select hospitals that they wish to donate PPE to, and the hospital will be automatically informed of the pending donation. Once a user clicks “donate”, he/she will be provided with clear instructions about the hospital’s logistics and policies regarding donations. The hospital will also automatically be informed about who will be donating and how much PPE to expect.
                    </li>
                    <li>
                        <strong>Cogive supports students in using 3D printers at school to manufacture PPE.</strong>
                        Despite their shortcomings compared to FDA-cleared equipment, any piece of 3D printed PPE that could reduce the risk of transmission is in high demand. Therefore, we have provided instructions on how to print and sanitise PPE as well as the most effective open-access 3D models, such as the ones developed by Copper3D or Kitronik.
                    </li>
                    <li>
                        <strong>Cogive assists students with hosting fundraisers and other activities that aim to alleviate the stress on hospitals due to the pandemic.</strong>
                        Usually to host those events, students are required to go through a lot of cumbersome paperwork, planning, and proposal-writing so that the school administration gives approval to host such events. However, we will provide students with prepared documents and templates that can cut down a lot of the work needed and therefore encourage students to host these events. To streamline and clarify the fundraising process for confused students, we also provide links to reputable charity/donation platforms.
                    </li>
                    <li>
                        A reward system and precautions to keep volunteers safe will be in place to encourage people to donate and participate safely.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</Responsive>