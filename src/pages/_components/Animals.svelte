<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    import ProductTypes from './ProductTypes.svelte'
    let animals = [];
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
            const res = await fetch("https://villagevet.herokuapp.com/animals", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            animals = res
        } catch (e) {
            error = e
        }
    });
    console.log($url())
</script>

<style>
    .sidenav {
        width: 156px;
        position: relative;
        z-index: 1;
        overflow-x: hidden;
        margin-top: 10vh;
    }
    li{
        font-size: 1.2rem;
        /* border-bottom: solid 1px black; */
    }
    li:hover{
        cursor: pointer;
    }
</style>

<main>
    {#if error !== null}
        {error}
    {:else}
        <ul class="list-group-flush flex-column sidenav text-center">
            {#each animals as animal}
                <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#{animal.type}" aria-expanded="false" aria-controls="{animal.type}">{animal.type}</li>
                <div class="collapse" id="{animal.type}">
                    <div class="card card-body">
                        <ProductTypes {animal} />
                    </div>
                </div>
            {/each}
        </ul>
    {/if}
</main>