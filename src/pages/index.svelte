<script>
    import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
    
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
                </ul>
                <img src="http://localhost:1337/petfoods{petfood.pictures[0].url}" alt="">
            </div>
        {/each}
    {/if}
</main>

<footer class="footer">
    <div class="content has-text-centered">
        <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
    </div>
</footer>

<style>

</style>

<RoutifyIntro />