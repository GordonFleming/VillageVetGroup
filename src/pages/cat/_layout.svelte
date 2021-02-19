<script>
    import Animals from '../_components/Animals.svelte'
</script>

<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
            <Animals />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12">
            <h1>Cats Whiskas</h1>
            <div class="row mb-5">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/cat"><strong>Cat</strong></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/cat/eating">Eating</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/cat/playing">Playing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cat/care">Care</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cat/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cat/walk">Walk</a>
                    </li>
                </ul>
            </div>
            <slot />
        </div>
    </div>
</div>