<script>
    import Cart from '../_components/Cart.svelte';
    import { itemCount } from '../store.js';
</script>

<div class="row">
    <div class="col-md-9 col-sm-12">
        <Cart />
    </div>
    {#if $itemCount > 0}
        <div class="col-md-3 col-sm-12 text-center">
            <a href="/checkout/delivery"><button type="button" class="mt-5 btn btn-secondary btn-lg">Continue to Checkout</button></a>
        </div>
    {:else}
        <center><h1>Nothing is in your cart yet.</h1></center>
    {/if}
</div>