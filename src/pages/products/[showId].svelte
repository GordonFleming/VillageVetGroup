<script>
    import { ready, url, params } from "@roxi/routify";
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade } from 'svelte/transition';
    let product = {};
    let selected;

    $: updateShow($params.showId);
    async function updateShow(id) {
        fetch(`https://villagevet.herokuapp.com/products/${id}`, { 'x-routify-valid-for': 3600})
        .then(response => response.json())
        .then(json => {
            product = json;
            setTimeout($ready, 500)
        });
    }
</script>

<style>
    h2{
        font-family: 'Indie Flower', cursive;
        font-size: 2.5rem;
    }
    select{
        width: 8rem;
    }
    i{
        padding: 1rem;
    }
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
    @media only screen and (max-width: 600px) {
        .product_block{
            width: 90vw;
            height: auto;
            display:block;
            margin:auto;
        }
    }
    @media only screen and (min-width: 600px) {
        .product_block{
            width: 25vw;
            height: auto;
            display:block;
            margin:auto;
        }
    }
</style>

<a href={$url('./')}><i class="fas fa-arrow-left fa-2x"></i></a>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href={$url('./')}>Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">
            {#await fetch("https://villagevet.herokuapp.com/products/")}
                loading...
            {:then} 
                {#if product.name}
                    {product.name.toLowerCase()}
                {/if}
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
                    <div class="product_block">
                        <img src="{product.img[0].name}" class="img-fluid" alt="product_image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>{product.name.toLowerCase()}</h2>
                    {#if product.description !== null}
                        <p>{product.description}</p>
                    {/if}
                    {#if product.options === true}
                        <div class="row mt-4"> 
                            {#each product.additional as add, i}
                            <div class="col">
                                {add.weight}{product.additional[i].symbol}
                            </div>
                            {/each}
                        </div>
                        <div class="row"> 
                            {#each product.additional as add}
                            <div class="col mt-3" data-item-name="{product.name}" data-item-id="{product.id+add.price}" data-item-price="{add.price}" data-item-url="/products/{product.id}">
                                R{add.price}.00
                            </div>
                            {/each}
                        </div>

                        <div class="input-group mt-4">
                            <select class="custom-select" id="selected" bind:value={selected}>
                                {#each product.additional as add, i}
                                <option value={add}>
                                    {add.weight}{product.additional[i].symbol}
                                </option>
                                {/each}
                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">Options</label>
                            </div>
                        </div>
                    {#if selected}
                        <h1 class="mt-4">R{selected.price}</h1>
                    {/if}
                    {:else}
                        <h4 class="mt-4 mb-4">R{product.price}</h4>
                        {#if product.singleweight !== null}
                            <p class="card-text">{product.singleweight} {product.symbol}</p>
                        {/if}
                    {/if}
                    <!-- data-item-custom1-type="readonly"
                    data-item-custom1-value=" -->
                    <!-- {product.additional[0].weight}{product.additional[0].symbol}|{product.additional[1].weight}{product.additional[1].symbol}[+{product.additional[1].price-product.additional[0].price}] -->
                    {#if selected && product.options === true}
                        {#key selected}
                        <a in:fade href="/" class="btn btn-secondary snipcart-add-item mt-4"
                            data-item-id="{product.id+selected.price}"
                            data-item-price="{selected.price}"
                            data-item-url="/products/{product.id}"   
                            data-item-name="{product.name}"
                            data-item-description="{product.description}"
                            data-item-image="{product.img[0].name}"
                            data-item-custom1-name="Weight"
                            data-item-custom1-type="readonly"
                            data-item-custom1-value="{selected.weight+selected.symbol}"> 
                            Add to bowl: {selected.weight}{selected.symbol} option
                        </a>
                        {/key}
                    {:else}
                        <a href="/" class="btn btn-secondary snipcart-add-item mt-4"
                        data-item-id="{product.id}"
                        data-item-price="{product.price}"
                        data-item-url="/products/{product.id}"   
                        data-item-name="{product.name}"
                        data-item-description="{product.description}"
                        data-item-image="{product.img[0].name}"
                        data-item-custom1-name="Weight:"
                        data-item-custom1-type="readonly"
                        data-item-custom1-value="{product.singleweight}{product.symbol}">
                        Add to bowl
                        </a>
                    {/if}
                    <p class="mt-4"><strong>Delivery calculated at checkout.</strong></p>
                </div>
            </div>
        {:else}
            <h2 class="mt-5 text-center">No matching product. Go <a href={$url('./')}>back</a></h2>
        {/if}
    {:catch error}
        <p>Please reload page, or go back to the <a href="/">home page</a> error:{error.message}</p>
    {/await}
</div>