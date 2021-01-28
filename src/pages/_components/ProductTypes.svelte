<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    let producttypes = [];
    let error = null

    export let animal;

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
            const res = await fetch("https://villagevet.herokuapp.com/product-types", { //https://villagevet.herokuapp.com/producttypes
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            producttypes = res
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
        {#each producttypes as producttype}
            {#if animal.type == producttype.animal.type}
                <p>{producttype.name}</p>
            {/if}
        {/each}
    {/if}
</main>