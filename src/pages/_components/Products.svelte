<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    let products = [];
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
            const res = await fetch("https://villagevet.herokuapp.com/products", { 'x-routify-valid-for': 3600}, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            products = res
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
        {#await fetch("https://villagevet.herokuapp.com/products/")}
            <div class="d-flex justify-content-center mt-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        {:then}
            <div class="container">
                <div class="row align-items-center justify-content-center mb-5">
                    {#each products as product}
                        {#if product.img !== null}
                            <div class="col-lg-3 col-md-3 col-sm-12 align-self-center">
                                <div class="card" style="width: auto;">
                                    <a href="/products/{product.id}"><img src="{product.img[0].name}" class="card-img-top" alt="product_image"></a>
                                    <div class="card-body">
                                        <!-- <a href="use:prefetch={options} href={$url('./:showId', { showId })"></a> -->
                                        <h5 class="card-title">{product.name.toLowerCase()}</h5> 
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
                                            <a href="/" class="btn btn-secondary snipcart-add-item mt-4 mb-3"
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
                                </div>
                            </div>
                        {:else}
                            {console.log("Error")}
                        {/if}
                    {/each}
                </div>
            </div>
        {/await}
    {/if}
</main>