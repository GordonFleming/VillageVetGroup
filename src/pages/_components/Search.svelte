<script>
    import { onMount } from 'svelte';
    import algoliasearch from 'algoliasearch/lite';
    
    let searchClient;
    let index;
    
    export let val;
    let hits = "";
    
    onMount(() => {
    
        searchClient = algoliasearch(
            'QQ2N9NVCDU',
            'd3e3f4fa8d768648533712f7629c2242'
        );
    
        index = searchClient.initIndex('products');
    
        // Warm up search
        index.search(val).then(console.log)
    
    });
    
    // Fires on each keyup in form
    async function search() {
        const result = await index.search(val);
        hits = result.hits;
        console.log(hits)
    }
</script>

<div id="search">
	<input type="text" placeholder="Instant search" class="form-control me-2" bind:value={val} on:keyup={search}>
</div>

{#each hits as hit}
	<img src={hit.name} alt={hit.name}>
	<section>
		<h3>{hit.name} {hit.description}</h3>
	</section>
{/each}