<script>
  import { ready, url, params } from "@roxi/routify";
  let product = {};

  $: updateShow($params.showId);

  function updateShow(id) {
    fetch(`http://localhost:1337/products/${id}`)
      .then(response => response.json())
      .then(json => {
        product = json;
        $ready();
      });
  }
</script>

<div class="container" id="product">
  <h4>
    <a href={$url('./')}>Go back</a>
  </h4>

  {#if product.id}
    <img src="http://localhost:1337{product.img[0].url}" class="img-fluid" alt="product_image">
    <h1>{product.name}</h1>
    <p>
      {@html product.description}
    </p>
    <a href={product.url}>Read more on TVMaze</a>
  {/if}
</div>