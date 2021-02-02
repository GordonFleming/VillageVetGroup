<script>
    import { goto } from '@roxi/routify';

    let search = "";

</script>

<div class="container-fluid">
    <div class="text-center"><img src="https://res.cloudinary.com/splyce/image/upload/v1612031206/logos/cropped-new-banner12_latest_evsfwj.png" alt="Banner" class="img-fluid"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent mt-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Village Vet Group</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://villagevetgroup.co.za/about-us/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://villagevetgroup.co.za/about/">Services</a>
                    </li>
                </ul>

                <form class="row row-cols-lg-auto g-3 align-items-center d-md-flex d-block flex-row mx-md-auto mx-0" on:submit|preventDefault={$goto('./search?'+search)}>
                    <div class="col-12">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" bind:value={search}>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </form>

                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <span class="snipcart-total-price"></span>
                    </div>
                    <div class="col-12">
                        <span class="snipcart-items-count"></span>
                    </div>
                </form>
                <button class="snipcart-checkout btn btn-link  nav-item d-flex">
                    <img src="https://res.cloudinary.com/splyce/image/upload/c_scale,h_40/v1611664806/logos/dog-food_umda72.png" alt="icon-cart"/>
                    <h6>View Bowl</h6>
                </button>
            </div>
        </div>
    </nav>
</div>