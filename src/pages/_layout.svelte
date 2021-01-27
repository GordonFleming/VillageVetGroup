<script>
    import Search from './_components/Search.svelte';
    let val;
</script>

<div class="container">
    <img src="https://res.cloudinary.com/splyce/image/upload/v1611420203/logos/cropped-new-banner12_wfnaip.png" alt="" class="text-center img-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
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
                    <form class="d-flex">
                        <Search val={val}/>
                    </form>
                </ul>
                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <span>Quantity:</span>
                        <span class="snipcart-items-count"></span>
                    </div>
                    <div class="col-12">
                        <span>Total:</span>
                        <span class="snipcart-total-price"></span>
                    </div>
                </form>
                <button class="snipcart-checkout btn btn-link  nav-item d-flex">
                    <img src="https://res.cloudinary.com/splyce/image/upload/c_scale,h_40/v1611664806/logos/dog-food_umda72.png" alt="icon-cart"/>
                    <h6>View bowl</h6>
                </button>
            </div>
        </div>
    </nav>
</div>

<div class="container mt-5" id="slot">
    <slot />
</div>

<footer class="bg-light text-center text-lg-start mt-5">
    <div class="container p-4">
        <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Footer Content</h5>
    
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
            </p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
    
            <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 4</a>
            </li>
            </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Links</h5>
    
            <ul class="list-unstyled">
            <li>
                <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Link 4</a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright:
        <a class="text-dark" href="https://splyce.dev/">Splyce</a>
    </div>
</footer>
