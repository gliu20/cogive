<script>
    import Responsive from "./Responsive.svelte";
</script>


<style>
    .nav {
    margin: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
}

.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
}

#navLogo {
    height: 4vw;
    position: absolute;
    top: 1.5vh;
    right: 1.5vw;
}

.nav a {
    margin-right: 3vw;
    font-size: 1.2em;
    font-weight: 500;
    color: #1155cc;
}

.nav a:hover {
    color: #ff0056;
    text-decoration: none;
}

</style>

<Responsive>
    <nav class="nav">
        <ul class="navbar">
            <li class="nav-element"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-element"><a href="About.html" class="nav-link">About</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Donate PPE</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Build PPE</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Fundraise</a></li>
        </ul>
        <img src="logo.png" id="navLogo" alt="logo">
    </nav>
</Responsive>