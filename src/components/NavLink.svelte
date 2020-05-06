<script>

    import { Link } from "svelte-routing";
    export let to = "";

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
        // The object returned here is spread on the anchor element's attributes
        if (isActive) {
        return { class: "active" };
        }
        return {};
    }
    </script>

    <Link to="{to}" getProps="{getProps}">
        <slot />
    </Link>
<style>
  :global(a) {
    margin-right: 3vw;
        font-size: 1.2em;
        font-weight: 500;
        color: #1155cc;
  }
  :global(a:hover) {
    color: #ff0056;
        text-decoration: none;
  }
  :global(a.active) {
    margin-right: 3vw;
        font-size: 1.2em;
        font-weight: 500;
        color: #1155cc;
  }
</style>