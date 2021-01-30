<script>
    import Animals from './_components/Animals.svelte'
    import { isChangingPage } from '@roxi/routify'
    import { Jumper } from 'svelte-loading-spinners'
</script>

<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
            <Animals />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12">
            <slot />
        </div>
    </div>
</div>

{#if $isChangingPage}
  <Jumper />
{/if}