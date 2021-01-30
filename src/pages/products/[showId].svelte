<script>
    import { ready, url, params } from "@roxi/routify";
    import { SyncLoader } from 'svelte-loading-spinners';
    let product = {};

    $: updateShow($params.showId);

    function updateShow(id) {
        fetch(`https://villagevet.herokuapp.com/products/${id}`, { 'x-routify-valid-for': 3600})
        .then(response => response.json())
        .then(json => {
            product = json;
            $ready();
        });
    }
</script>

<style>
    p{
        font-size: 1.05rem;
    }
    .breadcrumb-item{
        text-transform: capitalize;
    }
    .card-text{
        text-align: left;
        font-size: 1.3rem;
    }
</style>

<a href={$url('./')}><i class="fas fa-arrow-left fa-2x"></i></a>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">
            {#await fetch("https://villagevet.herokuapp.com/products/")}
                loading...
            {:then} 
                {product.name.toLowerCase()}
            {/await}
        </li>
    </ol>
</nav>

<div class="container-fluid mt-5 pt-2" id="product">
    {#await fetch("https://villagevet.herokuapp.com/products/")}
        <div class="d-flex justify-content-center">
            <SyncLoader size="300" color="#FDD177" unit="px" duration="0.6s" />
        </div>
    {:then} 
        {#if product.id}
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 p-md-3">
                    <img src="{product.img[0].name}" class="img-fluid" alt="product_image">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>{product.name.toLowerCase()}</h2>
                    {#if product.description !== null}
                        <p>{product.description}</p>
                    {/if}
                    {#if product.options === true}
                        <h4 class="mt-4 mb-4">R{product.additional[0].price}</h4>
                        <div class="row"> 
                            {#each product.additional as add, i}
                            <div class="col">
                                {add.weight}{product.additional[i].symbol}
                            </div>
                            {/each}
                        </div>
                        <div class="row"> 
                            {#each product.additional as add}
                            <div class="col">
                                R{add.price}.00
                            </div>
                            {/each}
                        </div>
                    {:else}
                        <h4 class="mt-4 mb-4">R{product.price}</h4>
                        {#if product.singleweight !== null}
                            <p class="card-text">{product.singleweight} {product.symbol}</p>
                        {/if}
                    {/if}
                    <p class="mt-4"><strong>Delivery calculated at checkout.</strong></p>
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