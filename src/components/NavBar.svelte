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
            <li class="nav-element"><a href="#" class="nav-link">About</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Donate PPE</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Build PPE</a></li>
            <li class="nav-element"><a href="#" class="nav-link">Fundraise</a></li>
        </ul>
    </nav>
    <img src="logo.png" alt="logo">
</Responsive>