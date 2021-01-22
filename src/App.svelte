<script>
	export let user = "Gordon";

    import { onMount } from 'svelte';

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
            const res = await fetch("http://localhost:1337/pet-foods", {
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
</script>

<main class="container">
	<h1>Hello {user}!</h1>

    {#if error !== null}
        {error}
    {:else}
        {#each petfoods as petfood}
            <div class="tile is-2">
                <img src="http://localhost:1337{petfood.img[0].url}" alt=""> 
                <ul>
                    <li>{petfood.price}</li>
                </ul>
            </div>
        {/each}
    {/if}
</main>

<style>

</style>