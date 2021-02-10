<script>
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fly } from 'svelte/transition';
    
    import { paginate, LightPaginationNav } from 'svelte-paginate'
    export let items = [];

    let currentPage = 1
    let pageSize = 12
    $: paginatedItems = paginate({ items, pageSize, currentPage })

    let error = null
</script>

<main>
    {#if error !== null}
        {error}
    {:else}
        {#await fetch("https://villagevet.herokuapp.com/products?_limit=700")}
            <div class="d-flex justify-content-center mt-5">
                <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
            </div>
        {:then}
            <div class="container">
                <div class="row align-items-center justify-content-center mb-5">
                    {#each paginatedItems as product}
                    <!-- {paginatedItems=[]} -->
                        {#if product.name}
                            {#if product.img !== null}
                                <div class="col-lg-3 col-md-3 col-sm-12 align-self-center">
                                    <div class="card" style="width: auto;" transition:fly="{{ y: 100, duration: 200 }}">
                                        <div class="product_block align-self-center">
                                            <a href="/products/{product.id}"><img src="{product.img[0].name}" class="card-img-top" alt="product_image"></a>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name.toLowerCase().replace("and", "&")}</h5> 
                                            {#if product.options === true}
                                                <p class="card-price pt-2">R {product.additional[0].price}.00</p>
                                                <ul id="weights">
                                                    {#each product.additional as add}
                                                        <li>{add.weight}{add.symbol}</li>
                                                    {/each}
                                                </ul>
                                            {:else}
                                                <p class="card-price pt-2">R {product.price}.00</p>
                                                {#if product.singleweight !== null}
                                                    <p class="card-text">{product.singleweight} {product.symbol}</p>
                                                {/if}
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                            {:else}
                                {console.log("Error")}
                            {/if}
                        {/if}
                    {/each}
                </div>

                <div class="container pagination d-flex justify-content-center">
                    <LightPaginationNav
                    totalItems="{items.length}"
                    pageSize="{pageSize}"
                    currentPage="{currentPage}"
                    limit="{1}"
                    showStepOptions="{true}"
                    on:setPage="{(e) => currentPage = e.detail.page}"
                    />
                </div>
                
            </div>
        {:catch error}
            <p>Please reload page, or go back to the <a href="/">home page</a> error:{error.message}</p>
        {/await}
    {/if}
</main>

<style>
    .pagination :global(.option.active){
        color: #c59127;
    }
    @media only screen and (max-width: 600px) {
        .pagination :global(.option.number){
            padding: 0;
            margin-left: 0;
        }
        .product_block{
            width: 30vw;
            height: auto;
        }
        .pagination :global(.pagination-nav){
            margin-left: 1rem;
        }
    }
    @media only screen and (min-width: 600px) {
        .product_block{
            width: 8vw;
            height: auto;
        }
    }
    .pagination :global(.option.number){
        padding-right: 0;
    }
</style>