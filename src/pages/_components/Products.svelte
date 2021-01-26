<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    let petfoods = [];
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
            const res = await fetch("http://localhost:1337/petfoods", { //https://villagevet.herokuapp.com/petfoods
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            petfoods = res
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
                {#each petfoods as petfood}
                    <div class="col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div class="card" style="width: auto;">
                            <img src="http://localhost:1337{petfood.pictures[0].url}" class="card-img-top" alt="product_image">
                            <div class="card-body">
                                <h5 class="card-title">{petfood.name}</h5>
                                <p class="card-text">R{petfood.price}</p>
                                <p class="card-text">{petfood.rating}</p>
                                <p class="card-text">{petfood.description}</p> 
                                <p class="card-text">{$url()}</p> 
                                <!-- SnipCart buy btn --> <!-- $url() -->
                                <a href="/" class="btn btn-secondary snipcart-add-item"
                                    data-item-id="{petfood.id}"
                                    data-item-price="{petfood.price}"
                                    data-item-url="/"   
                                    data-item-name="{petfood.name}"
                                    data-item-description="{petfood.description}"
                                    data-item-image="https://villagevet.herokuapp.com/petfoods{petfood.pictures[0].url}"
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