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
            const res = await fetch("https://villagevet.herokuapp.com/products", {
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
        <div class="container">
            <div class="row align-items-center justify-content-center">
                {#each products as product}
                    <div class="col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div class="card" style="width: auto;">
                            <a href="/products/{product.id}"><img src="{product.img[0].name}" class="card-img-top" alt="product_image"></a>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">R{product.price}</p>
                                {#if product.options === true}
                                    <div class="row"> 
                                        {#each product.additional as add}
                                        <div class="col">
                                            {add.weight}KG
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
                                    <p class="card-text">{product.name}</p>
                                {/if}
                                    
                                <!-- SnipCart buy btn --> <!-- $url()  <p class="card-text">{$url()}</p> -->

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
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</main>