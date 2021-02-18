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
    ul li{
        border: none;
    }

</style>

<main>
    {#if error !== null}
        {error}
    {:else}
        <ul class="list-group-flush flex-column sidenav text-center">
                <a href={$url('../products')}><li class="list-group-item" data-bs-toggle="collapse">All</li></a>
            {#each animals as animal}
                {#if animal.id == 6 || animal.id == 14 || animal.id == 12 || animal.id == 4 || animal.id == 7 || animal.id == 13 || animal.id == 8}
                    <a href="/animals/furry-critters/"><li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#{animal.type}" aria-expanded="false" aria-controls="{animal.type}">{animal.type}</li></a>
                {:else}
                    <a href="/animals/{animal.type.toLowerCase()}"><li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#{animal.type}" aria-expanded="false" aria-controls="{animal.type}">{animal.type}</li></a>
                {/if}
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