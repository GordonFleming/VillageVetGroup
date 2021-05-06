<script>
    import { ready, url, params } from "@roxi/routify";
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown'
    import { cart } from '../store.js';
    import axios from 'axios';
    import { prodName } from '../store.js';
    import { metatags } from '@roxi/routify'

    metatags.title = $prodName + ' | Village Vetshop'
    metatags.description = $prodName + ' item listing.'

    let product = {};
    let selected;
    let colour;
    let col;
    let source;
    let visible = false;
    let img;
    let sizeWeight;
    let sizeSingle;
    let loaded = false;
    let amount;
    let stock;

    window.scrollTo(0, 0);

    $: updateShow($params.id);
    async function updateShow(id) {
        axios.get(`https://villagevet.herokuapp.com/products/${id}`).then(response => {
            product = response.data;
            $ready;
            if(product.description !== null){
                source = product.description;
            }
            loaded = true;
            if(product.img[0] === undefined){
                img = "https://res.cloudinary.com/splyce/image/upload/v1611859484/petfood/samples/download_2_gzv0sh.jpg";
            }else{
                img = product.img[0].name;
            }
            if(product.AllStock[0] === undefined){
                stock = 0
            }else{
                stock = product.AllStock[0].quantity
            }
        });
    }

    $: if(selected){
            amount = selected.price
            stock = selected.stock
            if(selected.size !== null){
                sizeWeight = selected.size;
            }else{
                sizeWeight = selected.weight+selected.symbol;
            }
        }else{
            amount = product.price
            stock = stock
        }

    $: if(product.singleweight !== null){
            sizeSingle = product.singleweight + product.symbol;
        }else{
            sizeSingle = "standard";
        }

    $: if(product.ColoursOptions !== undefined && colour){
                    col = colour.name
                }else{
                    col = ""
                }

    function backFalse(){
        visible = false;
    }
          
    const handleClickNew = () => {
        for(let item of $cart){
            if((item.id+item.price) == (product.id+amount)){
                item.units++
                $cart = $cart
                return
            }
        }

        $cart.units = 1
        
        $cart.push({
            id: product.id,
            name: product.name,
            weight: sizeWeight,
            size: sizeSingle,
            price: amount,
            img: product.img[0].name,
            colour: col,
            stock: stock,
            units: 1
        })

        visible = true;
        setTimeout(backFalse, 2000)
        
        cart.subscribe(() => {
            localStorage.setItem("data", JSON.stringify($cart))
        });
    }
</script>

<i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="javascript:history.back()">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">
            {#await loaded}
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
                        <img style="display: block; height: auto; width: auto; max-width: auto; max-height: 46vh;" src={img} class="img-fluid" alt="product_image">
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
                            <small><strong>Please place one or two alternative colour options in the additional field at checkout</strong></small>
                        </div>
                    {/if}

                    {#if product.options === true}
                        <div class="row mt-4"> 
                            {#each product.additional as add}
                                <div class="col mt-3 mb-3">
                                    {#if add.weight !== null}
                                        {add.weight}{add.symbol} <br>
                                        R{add.price}.00
                                    {:else}
                                        {add.size} <br>
                                        R{add.price}.00
                                    {/if}
                                </div>
                            {/each}
                        </div>

                        <div class="input-group mt-4">
                            <select class="custom-select" id="selected" bind:value={selected}>
                                {#each product.additional as add, i}
                                    <option value={add}>
                                        {#if add.weight !== null}
                                            {add.weight}{add.symbol}
                                        {:else}
                                            {add.size}
                                        {/if}
                                    </option>
                                    {#if product.AllStock[i] === undefined}
                                        {add.stock=1}
                                    {:else}
                                        {add.stock=product.AllStock[i].quantity}
                                    {/if}
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

                    {#if selected && product.options === true && product.ColoursOptions.length === 0}
                        {#if selected.stock == 0}
                            <button class="btn btn-secondary mt-4" disabled>
                                Out of stock!
                            </button>
                            <br>
                            <a href="mailto:villagevetshop04@gmail.com" class="text-dark"><strong>Contact us to check availability or order this product</strong><i class="far fa-envelope fa-2x"></i></a>
                        {:else}
                            <button on:click={handleClickNew} class="btn btn-secondary mt-4">
                                Add to bowl {sizeWeight} option
                            </button>
                            {#if visible}
                                <p transition:fade={{ duration:1000 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                            {/if}
                        {/if}
                    <!-- Default -->
                    {:else}
                        {#if stock == 0}
                            <button class="btn btn-secondary mt-4" disabled>
                                Out of stock!
                            </button>
                            <br>
                            <a href="mailto:villagevetshop04@gmail.com" class="text-dark"><strong>Contact us to check availability or order this product</strong><i class="far fa-envelope fa-2x"></i></a>
                        {:else}
                            <button on:click={handleClickNew} class="btn btn-secondary mt-4">
                                Add to bowl
                            </button>
                            {#if visible}
                                <p transition:fade={{ duration:1000 }} style="color:green;">Added <i style="color:green;" class="fas fa-check"></i></p>
                            {/if}
                        {/if}
                    {/if}

                    <p class="mt-4"><strong>Delivery calculated at checkout.</strong></p>
                </div>
            </div>
        {:else if (product.id === null || product.id === undefined) && loaded === true}
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
</style>