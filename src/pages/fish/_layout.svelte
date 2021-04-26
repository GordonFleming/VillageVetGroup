<script>
    import Animals from '../_components/Animals.svelte'
</script>

<div class="container-fluid mt-5">
    <div class="row">
        <i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>
        <div class="col-lg-10 col-md-10 col-sm-12">
            <h1 class="mb-5">Fishy Fin</h1>
            <!-- <h1>Fishy Fin</h1>
            <div class="row mb-4">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/dog"><strong>Dog</strong></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/dog/eating">Eating</a>
                    </li>
                </ul>
            </div> -->
            <slot />
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
            <Animals />
        </div>
    </div>
</div>