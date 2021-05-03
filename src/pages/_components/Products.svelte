<script>
    import { onMount } from 'svelte';
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fly } from 'svelte/transition';
    import { paginate, LightPaginationNav } from 'svelte-paginate';
    import { currentNumPage, scrollProduct } from '../store.js';

    let scrollPosID = "";
    scrollProduct.subscribe(value => {
        scrollPosID = value;
    }) 

    function waitforme(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }

    onMount(async () => {
        await waitforme(1400);
        try{
            var productScroll = document.getElementById(scrollPosID);
            if(scrollPosID && productScroll.scrollIntoView !== null && productScroll.scrollIntoView !== undefined && productScroll != null){
                productScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }catch(e){
            console.log(e)
        }
	});

    // currentNumPage.subscribe(value => {
    //     currentPage = value;
    // })
    export let currentPage;

    export let items = [];
    let pageSize = 16;
    $: paginatedItems = paginate({ items, pageSize, currentPage });

    function updatePageNum(){
        currentNumPage.set(currentPage);
    }

    let error = null;
</script>

<main>
    {#if error !== null}
        {error}
    {:else}
        <div class="container">
            <div class="row align-items-center justify-content-center mb-5">
                {#each paginatedItems as product}
                    {#if product.name}
                        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 align-self-center">
                            <div class="card" id="{product.id}" style="width: auto;" transition:fly="{{ y: 100, duration: 200 }}">
                                <div class="align-self-center">
                                    <a on:click={scrollPosID = product.id, scrollProduct.set(scrollPosID)} href="/products/{product.id}">
                                        {#if product.img[0] === undefined}
                                            <img src="https://res.cloudinary.com/splyce/image/upload/v1611859484/petfood/samples/download_2_gzv0sh.jpg" class="card-img-top" alt="product_image">
                                        {:else}
                                            <img style="display: block; height: auto; width: auto; max-width: 235px; max-height: 265px;" src="{product.img[0].name}" class="card-img-top" alt="product_image">
                                        {/if}
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{product.name.toLowerCase().replace(" and ", "&")}</h5> 
                                    {#if product.options === true}
                                        <p class="card-price pt-2">R {product.additional[0].price}.00</p>
                                        <ul id="weights">
                                            {#each product.additional as add}
                                                {#if add.weight !== null}
                                                    <li style="display: inline-block;">{add.weight}{add.symbol}</li>
                                                {:else}
                                                    <li style="display: inline-block;">{add.size}</li>
                                                {/if}
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
                <!-- This block is true while items are 0, in other words while svelte loops through the numerous products -->
                {:else} 
                    <div class="d-flex justify-content-center mt-5">
                        <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
                    </div>
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
                on:setPage="{updatePageNum}"
                on:setPage="{() => window.scrollTo(0, 250)}"
                />
            </div>               
        </div>
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
        .pagination :global(.pagination-nav){
            margin-left: 1rem;
        }
    }
    .pagination :global(.option.number){
        padding-right: 0;
    }
</style>