<script>
    import { metatags } from '@roxi/routify'
    import Carousel from '@beyonk/svelte-carousel'
    import AnimalBlocks from './_components/AnimalBlocks.svelte'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    metatags.title = 'Village Vetshop'
    metatags.description = 'E-commerce store for the Village Vetshop. Located at The Wedge shopping centre. We deliver to areas within Sandton.'
</script>

<div class="container mt-5 text-center">
    <AnimalBlocks max={200} />
    <!-- <h1 style="color:red;">Website in development, watch this space!</h1><br><br> -->
    <h2>Let us provide your pet with</h2>
    <h1>‘Total Care, for Life’</h1>
</div>

<div class="container text-center mt-5">
    <!-- Product's Banners -->
    <div class="row mb-3">
        <Carousel dots={false} autoplay={3000} perPage={{ 800: 1 }}>
            <span class="control" slot="left-control">
                <ChevronLeftIcon size="3x" />
            </span>
            <div class="slide-content">
                <img class="img-fluid" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Banner/004_packshot_cjxebz.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Banner/amy-baugess-MNju0A6EeE0-unsplash.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Banner/ACANA_heritage-banner01-350_nmziq5.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Banner/Canine_Perfect_Weight_Small___Mini_604255_604257_BUTT_szmpio.webp" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Banner/kyle-smith-SIZ66vF4FKA-unsplash.webp" alt="banner_img"/>
            </div>
            <span class="control" slot="right-control">
                <ChevronRightIcon size="3x" />
            </span>
        </Carousel>
    </div>

    <div id="main-txt">
        <h4>We aim to personalise your online shopping experience with us, especially as we will miss seeing you and your pets in our store! Our friendly, well trained and experienced team aim to provide advice, as well as premium veterinary products and accessories to suit your requirements.</h4>
    </div>

    <!-- Brands -->
    <div id="brands"><Carousel autoplay={3600} perPage={{1300:4, 1000: 3, 500: 2 }}>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/Orijen_logo_bvxkqf.webp" alt="vets choice"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/acana_frxcjj.webp" alt="montego"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/eukanuba_kzfgww.webp" alt="weruva"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/iams_rhpjvp.webp" alt="Eukanuba"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/nexgaurd_jkqais.webp" alt="acana"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://dmtrzpwsgsztkyucmxbx.supabase.in/storage/v1/object/public/temp/VillageVetShopTemp/Brands/vetschoice_shur9o.webp" alt="nexgaurd"/>
        </div>
    </Carousel></div>
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
    }
    h2{
        font-family: 'Maven Pro', sans-serif;
    }
    h4{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-family: 'Maven Pro', sans-serif;
    }
    #brands{
        margin-top: 5rem;
    }
    #main-txt{
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
    .control :global(svg){
        z-index: -999;
    }

</style>