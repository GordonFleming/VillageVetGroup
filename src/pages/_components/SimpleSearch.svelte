<script>
	export let search = '';
	let loading = false;
	const API_URL = 'https://villagevet.herokuapp.com/products?name_contains=';
	let products = [];
	async function formSubmitted(event) {
		event.preventDefault();
		loading = true;
		products = [];
		const url = `${API_URL}${search}`;
		const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        products = json.map(product => product.name);
		loading = false;
	}
</script>

<style>
.results {
	column-count: 3;
}
</style>

{#if loading}
    <p>{products}</p>
{/if}

<div id="search">
	<input type="text" placeholder="Instant search" class="form-control me-2" bind:value={search} on:keyup={formSubmitted}>
</div>

<div class="results">
    {#each products as product}
        <p>{product}</p>
    {/each}
</div>