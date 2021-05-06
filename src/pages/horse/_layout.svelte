<script>
    import Animals from '../_components/Animals.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'Horse | Village Vetshop'
    metatags.description = 'Horse products'
</script>

<div class="container-fluid mt-5">
    <i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>
    <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-12">
            <h1 class="mb-5">Horse</h1>
            <slot />
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
            <Animals />
        </div>
    </div>
</div>