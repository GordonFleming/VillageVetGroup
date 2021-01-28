<script>
    import { ready, url, params } from "@roxi/routify";
    let product = {};

    $: updateShow($params.showId);

    function updateShow(id) {
        fetch(`https://villagevet.herokuapp.com/products/${id}`)
        .then(response => response.json())
        .then(json => {
            product = json;
            $ready();
        });
    }
</script>
<a href={$url('./')}><i class="fas fa-arrow-left fa-2x"></i></a>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">{product.name}</li>
    </ol>
</nav>
<div class="container" id="product">
    {#await fetch("https://villagevet.herokuapp.com/products/")}
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    {:then} 
        {#if product.id}
            <div class="row">
                <div class="col">
                    <img src="{product.img[0].name}" class="img-fluid" alt="product_image">
                </div>
                <div class="col">
                    <h1>{product.name}</h1>
                    <h5>{product.description}</h5>
                    <h4>R{product.price}</h4>
                    <p>Shipping calculated at checkout.</p>
                    <a href="/" class="btn btn-secondary snipcart-add-item mt-4"
                                        data-item-id="{product.id}"
                                        data-item-price="{product.price}"
                                        data-item-url="/"   
                                        data-item-name="{product.name}"
                                        data-item-description="{product.description}"
                                        data-item-image="{product.img[0].name}"
                                        data-item-custom1-name="Weight"
                                        data-item-custom1-options="3KG|6KG|12KG[+50.00]">
                                        Add to bowl
                    </a>
                </div>
            </div>
        {:else}
            <h2 class="mt-5 text-center">No matching product. Go <a href={$url('./')}>back</a></h2>
        {/if}
    {/await}
</div>