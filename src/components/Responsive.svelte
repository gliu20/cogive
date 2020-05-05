<!-- just a container helper -->

<script>
    export let background = "#ffffff";
    export let color = "#333333";
</script>

<style>
    .container {
        margin:auto;
    }
    @media (min-width: 700px) { .container {width:650px;} }
    @media (min-width: 1000px) { .container {width:900px;} }
    @media (min-width: 1200px) { .container {width:1100px;} }
</style>

<div class="container" style="{`background-color:${background};`} {`color:${color};`}">
    <slot></slot>
</div>