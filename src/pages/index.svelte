<script>
    //import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import { metatags } from '@roxi/routify'
    import Carousel from '@beyonk/svelte-carousel'
    import AnimalBlocks from './_components/AnimalBlocks.svelte'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    metatags.title = 'Village Vet Shop'
    metatags.description = 'e-commerce store for the Village Vet Shop'
</script>

<div class="container text-center mt-5">
    <!-- Product's Banners -->
    <div class="row mb-5">
        <h2>Let us provide your pet with</h2>
        <h1>‘Total care, for life’</h1>
        <Carousel dots={false} autoplay={3000} perPage={{ 800: 1 }}>
            <span class="control" slot="left-control">
                <ChevronLeftIcon size="3x" />
            </span>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363937/Brands/Banners/Ultrum_Range_jwg8mc.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363936/Brands/Banners/dog1_n0yarw.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363936/Brands/Banners/Canine_Perfect_Weight_Small___Mini_604255_604257_BUTT_szmpio.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363937/Brands/Banners/frontline_combination_all_BI_nnalok.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363936/Brands/Banners/004_packshot_cjxebz.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612363936/Brands/Banners/cat1_loyurj.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612432540/Brands/Banners/Screenshot_59_y8qdzo.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612604395/Brands/Banners/Petdent_Range_dentabio_jwsbfe.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1612603590/Brands/Banners/Purl_Range_gmacm5.webp" alt="banner_img"/>
            </div>
            <span class="control" slot="right-control">
                <ChevronRightIcon size="3x" />
            </span>
        </Carousel>
    </div>

    <AnimalBlocks />

    <div class="row">
        <h5>We aim to exceed your expectations. This friendly, well-trained, experienced team will attend to your every need. We provide first class veterinary services along with a well stocked shop where premium, veterinary pet products and accessories are available in a wide assortment.</h5>
        <br>
        <h5>We look forward to meeting you and your pet and welcoming you into the Village Vet family. We invite you to come along and meet the team that only wants the very best for you and your pet.</h5>
    </div>

    <!-- Brands -->
    <div class="row mt-5">
        <Carousel autoplay={3600} perPage={{1300:4, 1000: 3, 500: 2 }}>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364565/Brands/Brands%20logo%27s/vetschoice_shur9o.webp" alt="vets choice"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364565/Brands/Brands%20logo%27s/montego_nooweq.webp" alt="montego"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364565/Brands/Brands%20logo%27s/weruva_ie2iep.webp" alt="weruva"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364564/Brands/Brands%20logo%27s/eukanuba_kzfgww.webp" alt="Eukanuba"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364564/Brands/Brands%20logo%27s/acana_frxcjj.webp" alt="acana"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364564/Brands/Brands%20logo%27s/nexgaurd_jkqais.webp" alt="nexgaurd"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364565/Brands/Brands%20logo%27s/royalcanin_jrk3gw.webp" alt="royalcanin"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612364564/Brands/Brands%20logo%27s/hills_cjzyug.webp" alt="hills"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612431649/Brands/Brands%20logo%27s/Orijen_logo_bvxkqf.webp" alt="Orijen"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612431539/Brands/Brands%20logo%27s/ultra_pet_uwt7mc.webp" alt="UltraPet"/>
            </div>
            <div class="slide-content">
                <img id="brand" src="https://res.cloudinary.com/splyce/image/upload/v1612431585/Brands/Brands%20logo%27s/Iams_yizhpc.webp" alt="IAMS"/>
            </div>
        </Carousel>
    </div>
</div>

<style>
    img{
        width: 800px;
        height: auto;
    }
    #brand{
        width: 200px;
        height: auto;
    }
    h1{
        color: #8BBF40;
        font-family: 'Maven Pro', sans-serif;
        margin-bottom: 3rem;
    }
    h2{
        font-family: 'Indie Flower', cursive;
    }
    .control :global(svg){
        z-index: -999;
    }

</style>