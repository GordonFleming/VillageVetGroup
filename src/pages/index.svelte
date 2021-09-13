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
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/bonnie-kittle-MUcxe_wDurE-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvYm9ubmllLWtpdHRsZS1NVWN4ZV93RHVyRS11bnNwbGFzaC53ZWJwIiwiaWF0IjoxNjI1MjM5NzA0LCJleHAiOjE5NDA1OTk3MDR9.-kxLtthc40WXz9TPXRoMxNsJXKIHwf_zv7zuhckMGxs" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/Canine_Perfect_Weight_Small___Mini_604255_604257_BUTT_szmpio.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvQ2FuaW5lX1BlcmZlY3RfV2VpZ2h0X1NtYWxsX19fTWluaV82MDQyNTVfNjA0MjU3X0JVVFRfc3ptcGlvLndlYnAiLCJpYXQiOjE2MjUyMzk3NjMsImV4cCI6MTk0MDU5OTc2M30.KIZv-ygR-yS7rSTMVsHSJ3klKQZHl1Hti-sHr5pYPmA" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/kyle-smith-SIZ66vF4FKA-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMva3lsZS1zbWl0aC1TSVo2NnZGNEZLQS11bnNwbGFzaC53ZWJwIiwiaWF0IjoxNjI1MjM5NzQ5LCJleHAiOjE5NDA1OTk3NDl9.pDpareCr-YLs-yAqu8RETmQr1s1FNBsne7XfIlrWHf8" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/frontline_combination_all_BI_nnalok.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvZnJvbnRsaW5lX2NvbWJpbmF0aW9uX2FsbF9CSV9ubmFsb2sud2VicCIsImlhdCI6MTYyNTIzOTE3OSwiZXhwIjoxOTQwNTk5MTc5fQ.u_E2YmqikV4bqyUK9BwWyDY6GqVd7K0xGdfDDPJNm9I" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/amy-baugess-MNju0A6EeE0-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvYW15LWJhdWdlc3MtTU5qdTBBNkVlRTAtdW5zcGxhc2gud2VicCIsImlhdCI6MTYyNTIzOTcwMywiZXhwIjoxOTQwNTk5NzAzfQ.TjKKqC22fLjXB3tdd6BXpYURjpiuiICpRQcUEEXCJ7k" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/004_packshot_cjxebz.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvMDA0X3BhY2tzaG90X2NqeGViei53ZWJwIiwiaWF0IjoxNjI1MjM5Njk4LCJleHAiOjE5NDA1OTk2OTh9.s3W8tIEapxvAEOeNTxFuBG4nGJQv_BNlz_N2vGG-VsU" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/dog1_n0yarw.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvZG9nMV9uMHlhcncud2VicCIsImlhdCI6MTYyNTIzOTkyMSwiZXhwIjoxOTQwNTk5OTIxfQ.wWQnC2vp4e-WXqI87S0-sUu9MDlqQrTwSfVmLolHVP0" alt="banner_img"/>
            </div>
            <!-- <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/Ultrum_Range_jwg8mc.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvVWx0cnVtX1JhbmdlX2p3ZzhtYy53ZWJwIiwiaWF0IjoxNjI1MjM5Mjk3LCJleHAiOjE5NDA1OTkyOTd9.ieov1d1h4TExmRzGOBUd4SF3QQtG_p6814wB_ZHT-V0" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/cat1_loyurj.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvY2F0MV9sb3l1cmoud2VicCIsImlhdCI6MTYyNTI0MDAxNSwiZXhwIjoxOTQwNjAwMDE1fQ.ajnnkajOh7HmmUTpGnrlVIYmjXqSgDvBZCcqj-j9v-g" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/ACANA_heritage-banner01-350_nmziq5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvQUNBTkFfaGVyaXRhZ2UtYmFubmVyMDEtMzUwX25temlxNS53ZWJwIiwiaWF0IjoxNjI1MjM5ODkyLCJleHAiOjE5NDA1OTk4OTJ9.mlj1vTQ44VMK3mbXPbASVLor1slAvbhmnaq-l0YVSEo" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/jack-catalano-6aY_0S-epZQ-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvamFjay1jYXRhbGFuby02YVlfMFMtZXBaUS11bnNwbGFzaC53ZWJwIiwiaWF0IjoxNjI1MjM5ODAwLCJleHAiOjE5NDA1OTk4MDB9.Pg6EDU5KrUqAulxXv4cra8UIrxbmQwWUnGnk7uiv9ws" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/Petdent_Range_dentabio_jwsbfe.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvUGV0ZGVudF9SYW5nZV9kZW50YWJpb19qd3NiZmUud2VicCIsImlhdCI6MTYyNTIzOTc2MiwiZXhwIjoxOTQwNTk5NzYyfQ.8hLaaci1OVXL2wwFM3k-D_4wle7oMHAQegkqjO_qF6Y" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/rachel-hisko-rEM3cK8F1pk-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvcmFjaGVsLWhpc2tvLXJFTTNjSzhGMXBrLXVuc3BsYXNoLndlYnAiLCJpYXQiOjE2MjUyMzk3NTAsImV4cCI6MTk0MDU5OTc1MH0._JOXllv0aDgLF3yMuq_wO5HlYtQ9AuQRCOZIDuOClgw" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/Purl_Range_gmacm5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvUHVybF9SYW5nZV9nbWFjbTUud2VicCIsImlhdCI6MTYyNTIzOTc2MiwiZXhwIjoxOTQwNTk5NzYyfQ.l5xO5b1mxXn_K1YL-eic1vXKrSHTPMtqtiw2CYJlwh0" alt="banner_img"/>
            </div>
            <div class="slide-content">
                <img class="img-fluid" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/banners/aaron-katz-s5zL-YuasvM-unsplash.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2Jhbm5lcnMvYWFyb24ta2F0ei1zNXpMLVl1YXN2TS11bnNwbGFzaC53ZWJwIiwiaWF0IjoxNjI1MjM5NzAxLCJleHAiOjE5NDA1OTk3MDF9.jbj2a6ZVe5b3HkiNM1mM11vz50Efkg3QQegGAMiwYqo" alt="banner_img"/>
            </div> -->
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
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/Orijen_logo_bvxkqf.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL09yaWplbl9sb2dvX2J2eGtxZi53ZWJwIiwiaWF0IjoxNjI1MjQxODE4LCJleHAiOjE5NDA2MDE4MTh9.wB3RLln7ptxLjaroBWJT_TPaJx-aRM6kLbN-4TIuZOw" alt="vets choice"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/acana_frxcjj.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL2FjYW5hX2ZyeGNqai53ZWJwIiwiaWF0IjoxNjI1MjQxODI2LCJleHAiOjE5NDA2MDE4MjZ9.KReXE0u9lGuE_ghG8xkfgJYqRpULdxfK94GSr-DEEDo" alt="montego"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/eukanuba_kzfgww.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL2V1a2FudWJhX2t6Zmd3dy53ZWJwIiwiaWF0IjoxNjI1MjQxODM1LCJleHAiOjE5NDA2MDE4MzV9.1EaoPWlHamldc0saHEJSP5xh6fB7wX3-n3Y_EMgnmPo" alt="weruva"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/hills_cjzyug.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL2hpbGxzX2Nqenl1Zy53ZWJwIiwiaWF0IjoxNjI1MjQxODQ3LCJleHAiOjE5NDA2MDE4NDd9.izKQI1BFw3N_w8M2hy9pwwaZL1cAUM4clMJu3DeiMv8" alt="Eukanuba"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/iams_rhpjvp.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL2lhbXNfcmhwanZwLndlYnAiLCJpYXQiOjE2MjUyNDE4NTksImV4cCI6MTk0MDYwMTg1OX0.BMcOvmIMAAxagetpF06jWEMW2yVm61rXViH_uWeTlms" alt="acana"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/montego_nooweq.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL21vbnRlZ29fbm9vd2VxLndlYnAiLCJpYXQiOjE2MjUyNDE4NjgsImV4cCI6MTk0MDYwMTg2OH0.Dbp6qu2oJCbIKuw1c4SljIWrmVUBAniQJpHUjacynuQ" alt="nexgaurd"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/nexgaurd_jkqais.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL25leGdhdXJkX2prcWFpcy53ZWJwIiwiaWF0IjoxNjI1MjQxODc1LCJleHAiOjE5NDA2MDE4NzV9.hWfXgYsZM1nUX4Ezf8u-ZLKpPXjer-UoG-9FnIJ2uSs" alt="royalcanin"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/royalcanin_jrk3gw.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL3JveWFsY2FuaW5fanJrM2d3LndlYnAiLCJpYXQiOjE2MjUyNDE4ODMsImV4cCI6MTk0MDYwMTg4M30.RnsXlodx48TBgdIJpyRJJlF8VYfRvAzSIptAWoY_y9A" alt="hills"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/ultra_pet_uwt7mc.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL3VsdHJhX3BldF91d3Q3bWMud2VicCIsImlhdCI6MTYyNTI0MTg5MiwiZXhwIjoxOTQwNjAxODkyfQ.rUY2OADrNQ42Vo4Nf73l9S6-tyaEiriGW1MdZTDdPSI" alt="Orijen"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/vetschoice_shur9o.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL3ZldHNjaG9pY2Vfc2h1cjlvLndlYnAiLCJpYXQiOjE2MjUyNDE5MDAsImV4cCI6MTk0MDYwMTkwMH0.xF6gDZU4Q4z3B9Azg8KRE5v9Wl2T-I0y_St2sbceZh4" alt="UltraPet"/>
        </div>
        <div class="slide-content">
            <img id="brand" src="https://tirqswyaxhrjnlhdstky.supabase.co/storage/v1/object/sign/villagevet/logos/weruva_ie2iep.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWxsYWdldmV0L2xvZ29zL3dlcnV2YV9pZTJpZXAud2VicCIsImlhdCI6MTYyNTI0MTkwNywiZXhwIjoxOTQwNjAxOTA3fQ.QsgChJPJB_e_KSYtDIP4vxbB_-qrsy9OAYV_FmQABj8" alt="IAMS"/>
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