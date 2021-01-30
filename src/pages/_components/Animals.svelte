<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
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
        font-size: 1.4rem;
        font-family: 'Indie Flower', cursive;
        color: #636870;
    }
    li:hover{
        cursor: pointer;
    }
    p{
        color: #7587A3;
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
                        {#each animal.product_types as type}
                            <p>{type.name}</p>
                        {/each}
                    </div>
                </div>
            {/each}
        </ul>
    {/if}
</main>