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
</script>

<main class="container">
	<h1>Hello {user}!</h1>

    {#if error !== null}
        {error}
    {:else}
        {#each petfoods as petfood}
            <div class="tile is-2">
                <ul>
                    <li>{petfood.name}</li>
                    <li>R{petfood.price}</li>
                    <li>{petfood.pictures[0].url}</li>
                    <li>{petfood.rating}</li>
                    <li>{petfood.description}</li>
                    <li></li>
                </ul>
                <img src="http://localhost:1337{petfood.pictures[0].url}" alt="">
            </div>
        {/each}
    {/if}
</main>