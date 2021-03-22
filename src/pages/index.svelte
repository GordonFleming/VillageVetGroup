<script>
    //import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import { metatags } from '@roxi/routify'
    import Carousel from '@beyonk/svelte-carousel'
    import AnimalBlocks from './_components/AnimalBlocks.svelte'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    metatags.title = 'Village Vetshop'
    metatags.description = 'E-commerce store for the Village Vetshop, The Wedge Shopping Centre'
</script>

<div class="container mt-5 text-center">
    <AnimalBlocks max={260} />
    <h1 style="color:red;">Website in development, watch this space!</h1><br><br>
    <h2>Let us provide your pet with</h2>
    <h1>‘Total Care, for Life’</h1>
    <h4>We aim to personalise your online shopping experience with us, especially as we will miss seeing you and your pets in our store! Our friendly, well trained and experienced team aim to provide advice, as well as premium veterinary products and accessories to suit your requirements.</h4>
</div>

<div class="container text-center mt-5">
    <!-- Product's Banners -->
    <div class="row mb-3">
        <Carousel dots={false} autoplay={3000} perPage={{ 800: 1 }}>
            <span class="control" slot="left-control">
                <ChevronLeftIcon size="3x" />
            </span>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2Fdog1_n0yarw.webp?alt=media&token=a04eaa78-79ae-490e-b642-3370d940df9e" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FCanine_Perfect_Weight_Small___Mini_604255_604257_BUTT_szmpio.webp?alt=media&token=3b5bc1c2-e308-4c91-8ab5-22689eb7dea3" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2Ffrontline_combination_all_BI_nnalok.webp?alt=media&token=22220b61-a8fa-49bc-8773-3680f144a400" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2F004_packshot_cjxebz.webp?alt=media&token=46f8d735-9a1d-4cba-a95f-db19f4a6ff08" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FUltrum_Range_jwg8mc.webp?alt=media&token=f063c07b-7393-4193-8af7-14c44a731208" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2Fcat1_loyurj.webp?alt=media&token=c4853304-f52a-49db-8b03-76530d508f67" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FScreenshot_59_y8qdzo.webp?alt=media&token=bd937a83-c542-4711-b4a6-cb8391350b76" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FPetdent_Range_dentabio_jwsbfe.webp?alt=media&token=6e3a1691-78c9-4e4d-bab6-aaa1997d8e5a" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FPurl_Range_gmacm5.webp?alt=media&token=be0d4f22-7bfe-4cfa-9813-c6e45fffc9cf" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Banners%2FACANA_heritage-banner01-350_nmziq5.webp?alt=media&token=d6e52226-e469-48c0-a0be-98e78085c5ce" alt="banner_img"/>
            </div>
            <span class="control" slot="right-control">
                <ChevronRightIcon size="3x" />
            </span>
        </Carousel>
    </div>

    <div id="main-txt">
        <h4>We aim to exceed your expectations. This friendly, well-trained, experienced team will attend to your every need. We provide first class veterinary services along with a well stocked shop where premium, veterinary pet products and accessories are available in a wide assortment.</h4>
        <h4>We look forward to meeting you and your pet and welcoming you into the Village Vet family. We invite you to come along and meet the team that only wants the very best for you and your pet.</h4>
    </div>

    <!-- Brands -->
    <div id="brands"><Carousel autoplay={3600} perPage={{1300:4, 1000: 3, 500: 2 }}>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fvetschoice_shur9o.webp?alt=media&token=ea09a985-056b-4e81-b8c7-62d5f3044a0d" alt="vets choice"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fmontego_nooweq.webp?alt=media&token=f72ecffd-0ca4-4691-984a-b066e196a2ca" alt="montego"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fweruva_ie2iep.webp?alt=media&token=dc1a05ef-f132-4aea-863b-4858063b9fef" alt="weruva"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Feukanuba_kzfgww.webp?alt=media&token=bbb6cd5c-1d37-4378-a312-e0774600d659" alt="Eukanuba"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Facana_frxcjj.webp?alt=media&token=5d9435d7-273e-49d9-80a5-2c5bd2ec0851" alt="acana"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fnexgaurd_jkqais.webp?alt=media&token=e53a6a65-d768-48d7-acce-3092c33abcee" alt="nexgaurd"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Froyalcanin_jrk3gw.webp?alt=media&token=4b1016a4-48cf-4e99-a490-9429d52c32db" alt="royalcanin"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fhills_cjzyug.webp?alt=media&token=045faaa7-31d3-4669-8417-52176c0d522b" alt="hills"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2FOrijen_logo_bvxkqf.webp?alt=media&token=ff888566-ab8a-429a-a6b1-9efd17959657" alt="Orijen"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fultra_pet_uwt7mc.webp?alt=media&token=dd27ae55-0ef8-47ce-9188-4b197bb5d49a" alt="UltraPet"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://firebasestorage.googleapis.com/v0/b/villagevetshop-e2f38.appspot.com/o/Logos%2Fiams_rhpjvp.webp?alt=media&token=3a626f22-9e4e-4b3a-9bee-6d3427af44da" alt="IAMS"/>
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