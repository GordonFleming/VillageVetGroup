<script>
    import Animals from './_components/Animals.svelte'
</script>

<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-2">
            <Animals />
        </div>
        <div class="col-10">
            <slot />
        </div>
    </div>
</div>