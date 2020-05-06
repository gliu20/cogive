<!-- just a container helper -->

<script>
    export let background = "#ffffff";
    export let color = "#333333";
</script>

<style>
    .wrapper  { padding:4px; }
    .container {
        margin: 5vh auto;
    }
    @media (min-width: 700px) { .container {width:650px;} }
    @media (min-width: 1000px) { .container {width:950px;} }
    @media (min-width: 1200px) { .container {width:1150px;} }
</style>

<section class="wrapper" style="{`background-color:${background};`} {`color:${color};`}">
    <div class="container">
        <slot></slot>
    </div>
</section>