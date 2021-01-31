<script>
    //import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import Products from './_components/Products.svelte'
    import Search from './_components/Search.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'Village Vet Group'
    metatags.description = 'e-commerce store for the Village Vet Group'

    let hits;
</script>

<!-- Product names -->
<!-- Dogs Busniz, Cats Whiskers, Fishy Fin, Birds of a Feather and then we need to think of something clever for the mice, rats, rabbits, hamsters, guinea pigs etc (small animals). -->

<!-- <Products /> -->

<Search {hits}>
    {#each hits as hit}
        <img src={hit.name} alt={hit.name}>
        <section>
            <h3>{hit.name} {hit.description}</h3>
        </section>
    {/each}
</Search>