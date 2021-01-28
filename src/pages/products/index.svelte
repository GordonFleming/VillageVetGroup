<script>
  import { url } from "@roxi/routify";
  import Products from '../_components/Products.svelte'
  export let scoped;
  const { products } = scoped;
  // console.log(products)
</script>

<Products />