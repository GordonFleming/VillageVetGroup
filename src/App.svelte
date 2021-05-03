<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
    import Footer from "../src/pages/_components/Footer.svelte"
    import Nav from "../src/pages/_components/Nav.svelte"
</script>

<style  global>
  @import "../assets/global.css";
</style>

<Nav />

<Router {routes} />

<Footer />