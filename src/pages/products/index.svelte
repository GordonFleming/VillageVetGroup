<script>
  import { url } from "@roxi/routify";
  import Products from '../_components/Products.svelte'
  export let scoped;
  const { products } = scoped;
  const options = {
    validFor: 200 * 24, // don't refresh assets on the page for a month
    writeHeaders: true // useful for debugging
  };
  // console.log(products)
</script>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Products</li>
    </ol>
</nav>
<Products />