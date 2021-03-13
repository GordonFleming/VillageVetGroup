<script>
    import { ready, url, params } from "@roxi/routify";
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown'

    let product = {};
    let selected;
    let colour;
    let source;
    let visible = false;
    let img;
    let sizeWeight;
    let loaded = false;

    $: updateShow($params.showId);
    async function updateShow(id) {
        fetch(`https://villagevet.herokuapp.com/products/${id}`, { 'x-routify-valid-for': 3600})
        .then(response => response.json())
            .then(json => {
                product = json;
                setTimeout($ready, 500)
                if(product.description !== null){
                    source = product.description;
                }
                // Checks for various buttons
                loaded = true;
                if(product.img[0] === undefined){
                    img = "https://res.cloudinary.com/splyce/image/upload/v1611859484/petfood/samples/download_2_gzv0sh.jpg";
                }else{
                    img = product.img[0].name;
                }
        });
    }

    $: if(selected){
            if(selected.size !== null){
                sizeWeight = selected.size;
            }else{
                sizeWeight = selected.weight+selected.symbol;
            }
        }

    function backFalse(){
        visible = false;
    }
    function handleClick(){
        visible = true;
        setTimeout(backFalse, 2000)
    }

</script>

<i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>

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
    {#await loaded}
        <div class="d-flex justify-content-center">
            <SyncLoader size="300" color="#FDD177" unit="px" duration="0.6s" />
        </div>
    {:then} 
        {#if product.id}
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 p-md-3">
                    <div class="text-center">
                        <img style="height: 45vh; width: auto;" src={img} class="img-fluid" alt="product_image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>{product.name.toLowerCase()}</h2>
                    {#if product.description !== null}
                        <SvelteMarkdown { source } />
                    {/if}

                    {#if product.ColoursOptions.length > 0}
                        <div class="input-group mt-4">
                            <select class="custom-select" id="colours" bind:value={colour}>
                                {#each product.ColoursOptions as colour}
                                    <option style="text-transform: capitalize;" value={colour}>
                                        {colour.name}
                                    </option>
                                {/each}
                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">Colours</label>
                            </div>
                        </div>
                    {/if}

                    {#if product.options === true}
                        <div class="row mt-4"> 
                            {#each product.additional as add}
                                <div class="col">
                                    {#if add.weight !== null}
                                        {add.weight}{add.symbol}
                                    {:else}
                                        {add.size}
                                    {/if}
                                </div>
                            {/each}
                        </div>
                        <div class="row"> 
                            {#each product.additional as add}
                            <div class="col mt-3 snipcart-add-item" data-item-name="{product.name}" data-item-id="{product.id+add.price}" data-item-price="{add.price}" data-item-url="/products/{product.id}">
                                R{add.price}.00
                            </div>
                            {/each}
                        </div>

                        <div class="input-group mt-4">
                            <select class="custom-select" id="selected" bind:value={selected}>
                                {#each product.additional as add}
                                    <option value={add}>
                                        {#if add.weight !== null}
                                            {add.weight}{add.symbol}
                                        {:else}
                                            {add.size}
                                        {/if}
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

                    <!-- Colour: True, Options: False -->
                    {#if product.ColoursOptions.length > 0 && product.options === false && colour}
                        <button on:click={handleClick} class="btn btn-secondary snipcart-add-item mt-4"
                            data-item-id="{product.id+product.price}"
                            data-item-price="{product.price}"
                            data-item-url="/products/{product.id}"   
                            data-item-name="{product.name}"
                            data-item-description="{product.description}"
                            data-item-image="{img}"
                            data-item-custom1-name="Weight / Size:"
                            data-item-custom1-type="readonly"
                            data-item-custom1-value="{product.singleweight}{product.symbol}"
                            data-item-custom3-name="Colour"
                            data-item-custom3-type="readonly"
                            data-item-custom3-value="{colour.name}"
                            data-item-custom2-name="Any additional information?"
                            data-item-custom2-type="textarea">
                            Add to bowl
                        </button>
                        {#if visible}
                            <p transition:fade={{ duration:800 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                        {/if}
                    <!-- Colour: False, Options: True -->
                    {:else if selected && product.options === true && product.ColoursOptions.length === 0}
                        <button in:fade on:click={handleClick} class="btn btn-secondary snipcart-add-item mt-4"
                            data-item-id="{product.id+selected.price}"
                            data-item-price="{selected.price}"
                            data-item-url="/products/{product.id}"   
                            data-item-name="{product.name}"
                            data-item-description="{product.description}"
                            data-item-image="{img}"
                            data-item-custom1-name="Weight / Size"
                            data-item-custom1-type="readonly"
                            data-item-custom1-value="{sizeWeight}"
                            data-item-custom2-name="Any additional information?"
                            data-item-custom2-type="textarea">
                            Add to bowl: {sizeWeight} option
                        </button>
                        {#if visible}
                            <p transition:fade={{ duration:1000 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                        {/if}
                    <!-- Colour: True, Options: True -->
                    {:else if product.ColoursOptions.length > 0 && selected && product.options === true && colour}
                        <button in:fade on:click={handleClick} class="btn btn-secondary snipcart-add-item mt-4"
                            data-item-id="{product.id+selected.price}"
                            data-item-price="{selected.price}"
                            data-item-url="/products/{product.id}"   
                            data-item-name="{product.name}"
                            data-item-description="{product.description}"
                            data-item-image="{img}"
                            data-item-custom1-name="Weight / Size"
                            data-item-custom1-type="readonly"
                            data-item-custom1-value="{sizeWeight}"
                            data-item-custom3-name="Colour"
                            data-item-custom3-type="readonly"
                            data-item-custom3-value="{colour.name}"
                            data-item-custom2-name="Any additional information?"
                            data-item-custom2-type="textarea">
                            Add to bowl: {sizeWeight} option
                        </button>
                        {#if visible}
                            <p transition:fade={{ duration:1000 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                        {/if}
                    <!-- Default -->
                    {:else}
                        <button on:click={handleClick} class="btn btn-secondary snipcart-add-item mt-4"
                            data-item-id="{product.id+product.price}"
                            data-item-price="{product.price}"
                            data-item-url="/products/{product.id}"   
                            data-item-name="{product.name}"
                            data-item-description="{product.description}"
                            data-item-image="{img}"
                            data-item-custom1-name="Weight / Size:"
                            data-item-custom1-type="readonly"
                            data-item-custom1-value="{product.singleweight}{product.symbol}"
                            data-item-custom2-name="Any additional information?"
                            data-item-custom2-type="textarea">
                            Add to bowl
                        </button>
                        {#if visible}
                            <p transition:fade={{ duration:1000 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                        {/if}
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
        cursor: pointer;
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
    .btn-secondary{
        background-color: #FDD277;
        color: black;
    }
</style>