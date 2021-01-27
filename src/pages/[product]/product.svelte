<script>
    export let product;

    const url = "http://0179d9c8ba4d.ngrok.io/products" + product;
</script>

{product}

{#await fetch(url).then(res => res.json())}
    loading {product}...
{:then response} 
    <h2>{response.name}</h2>
{/await}