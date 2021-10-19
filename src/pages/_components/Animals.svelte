<script>
    import { onMount } from 'svelte';
    import { url } from '@roxi/routify'
    import axios from 'axios';

    

    let animals = [];
    let error = null

    onMount(async () => {
        try {
            await axios({
            url: 'https://villagevet.herokuapp.com/graphql',
            method: 'post',
            data: {
                query: `
                    query {
                        animals {
                            id,
                            type
                        }
                    }
                `
            }
            }).then((result) => {
                console.log(result.data)
                animals = result.data.data.animals
                console.log("animals:", animals)
            });
        } catch (e) {
            error = e
        }
    });
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
                {#if animal.id == 6 || animal.id == 14 || animal.id == 12 || animal.id == 4 || animal.id == 7 || animal.id == 13 || animal.id == 8 || animal.id == 15}
                    <a href="/furry-critters/{animal.type.toLowerCase()}"><li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#{animal.type}" aria-expanded="false" aria-controls="{animal.type}">{animal.type}</li></a>
                {:else}
                    <a href="/{animal.type.toLowerCase()}"><li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#{animal.type}" aria-expanded="false" aria-controls="{animal.type}">{animal.type}</li></a>
                {/if}
                <div class="collapse" id="{animal.type}">
                    <!-- <div class="card card-body">
                        {#each animal.product_types as type}
                            <p>{type.name}</p>
                        {/each}
                    </div> -->
                </div>
            {/each}
        </ul>
    {/if}
</main>