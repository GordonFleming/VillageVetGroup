<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
    import Search from './pages/_components/Search.svelte';
    let val;
</script>

<style  global>
  @import "../assets/global.css";
</style>

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
                    <form class="d-flex">
                        <Search val={val}/>
                    </form>
                </ul>
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

<Router {routes} />

<footer class="text-center text-lg-start mt-5">
    <div class="container p-4">
        <div class="row text-center">
            <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Contact us</h5>

                <a href="https://www.facebook.com/The-Village-Vetshop-Village-Vet-Group-217533161649727/" class="text-dark"><i class="fab fa-facebook-square fa-3x"></i></a>
                <a href="tel:0118830004" class="text-dark"><i class="fas fa-phone-alt fa-3x"></i></a>
                <a href="mailto:villagevetshop@yebo.co.za" class="text-dark"><i class="far fa-envelope fa-3x"></i></a>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Online Shop</h5>
        
                <ul class="list-unstyled mt-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://villagevetgroup.co.za/about-us/">About Us</a>
                    </li>
                    <li>
                        <a class="snipcart-checkout" href="/">View Bowl</a>
                    </li>
                    <li>
                        <a href="/policies/refund-policy">Returns Policy</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Address</h5>
        
                <ul class="list-unstyled mt-4">
                    <li>
                        <p>Shop 22, The Wedge Shopping Centre,</p>
                    </li>
                    <li>
                        <p>255 Rivonia Road</p>
                    </li>
                    <li>
                        <p>Morningside</p>
                    </li>
                    <li>
                        <p>South Africa</p>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Shop Hours</h5>
        
                <ul class="list-unstyled mt-4">
                    <li>
                        <p>Monday - Friday: 9h00 - 19h30</p>
                    </li>
                    <li>
                        <p>Saturday: 9h00 - 17h00</p>
                    </li>
                    <li>
                        <p>Sunday and Public Holidays: 9h00 - 14h00</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="text-center" style="background-color: rgba(0, 0, 0, 0.2)">
        <div class="container-fluid">
            <div class="row">
                <div class="col align-self-center">
                    © 2021 Copyright:
                    <a class="text-dark" href="https://splyce.dev/">Splyce</a>
                </div>
                <div class="col align-self-center">
                    <i class="fab fa-cc-mastercard fa-2x"></i>
                    <i class="fab fa-cc-visa fa-2x"></i>
                    <i><strong>EFT</strong></i>
                </div>
            </div>
        </div>
    </div>
</footer> 