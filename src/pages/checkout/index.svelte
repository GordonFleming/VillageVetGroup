<script>
    import Cart from '../_components/Cart.svelte';
    import { itemCount } from '../store.js';
    import { metatags } from '@roxi/routify'
    metatags.title = 'Bowl | Village Vetshop'
    metatags.description = 'Bowl full of your products!'

    function waitforme(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }
</script>

<div class="row">
    <div class="col-md-9 col-sm-12">
        <Cart />
    </div>
    {#await waitforme(200)}
        <h2>Loading...</h2>
    {:then} 
        {#if $itemCount > 0}
            <div class="col-md-3 col-sm-12 text-center">
                <a href="/checkout/delivery"><button type="button" class="mt-5 btn btn-secondary btn-lg">Continue to Checkout</button></a>
            </div>
        {:else if $itemCount == 0}
            <center><h1>Nothing is in your bowl yet.</h1></center>
            <center><h3>__________</h3></center>
            <center id="padd"><h2>Why don't you consider adding some yummy treats to your bowl ;)</h2></center>
        {/if}
    {/await}
</div>

<style>
    #padd{
        padding: 3rem;
    }
</style>