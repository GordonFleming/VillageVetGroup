<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade} from 'svelte/transition'

    // Pagination

    import { paginate, LightPaginationNav } from 'svelte-paginate'
    let items = []
    let currentPage = 1
    let pageSize = 12
    $: paginatedItems = paginate({ items, pageSize, currentPage })

    //let products = [];
    let error = null

    onMount(async () => {
        const parseJSON = (resp) => (resp.json ? resp.json() : resp);
        const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
        return resp;
        }
        return parseJSON(resp).then((resp) => {
        throw resp;
        });
    };
    const headers = {
        'Content-Type': 'application/json',
    };

        try {
            const res = await fetch("https://villagevet.herokuapp.com/products?_sort=name:ASC&_limit=400", { 'x-routify-valid-for': 3600}, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            items = res
        } catch (e) {
            error = e
        }
    });
    console.log($url())
</script>

<main>
    {#if error !== null}
        {error}
    {:else}
        {#await fetch("https://villagevet.herokuapp.com/products?_sort=name:ASC&_limit=400")}
            <div class="d-flex justify-content-center mt-5">
                <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
            </div>
        {:then}
            <div class="container">
                <div class="row align-items-center justify-content-center mb-5">
                    {#each paginatedItems as product}
                        {#if product.img !== null}
                            <div class="col-lg-3 col-md-3 col-sm-12 align-self-center" out:fade="{{duration: 200}}" in:fade="{{ delay: 200}}">
                                <div class="card" style="width: auto;">
                                    <div class="product_block align-self-center">
                                        <a href="/products/{product.id}"><img src="{product.img[0].name}" class="card-img-top" alt="product_image"></a>
                                    </div>
                                    <div class="card-body">
                                        <!-- <a href="use:prefetch={options} href={$url('./:showId', { showId })"></a> -->
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
                                            
                                        <!-- SnipCart buy btn --> <!-- $url()  <p class="card-text">{$url()}</p> -->
                                        <div class="text-center">
                                            {#if product.options !== true}
                                                <a href="/" class="btn btn-secondary snipcart-add-item mt-4 mb-3"
                                                    data-item-id="{product.id}"
                                                    data-item-price="{product.price}"
                                                    data-item-url="/"   
                                                    data-item-name="{product.name}"
                                                    data-item-description="{product.description}"
                                                    data-item-image="{product.img[0].name}"
                                                    data-item-custom1-name="Weight:"
                                                    data-item-custom1-type="readonly"
                                                    data-item-custom1-value="{product.singleweight}{product.symbol}">
                                                    Add to bowl
                                                </a>
                                            {:else if product.options}
                                                <a href="/" class="btn btn-secondary snipcart-add-item mt-4 mb-3"
                                                    data-item-id="{product.id}"
                                                    data-item-price="{product.price}"
                                                    data-item-url="/"   
                                                    data-item-name="{product.name}"
                                                    data-item-description="{product.description}"
                                                    data-item-image="{product.img[0].name}"
                                                    data-item-custom1-name="Weight"
                                                    data-item-custom1-options="{product.additional[0].weight}KG|6KG|12KG[+50.00]">
                                                    Add to bowl
                                                </a>
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {:else}
                            {console.log("Error")}
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