<script>
    export let max = 250;
</script>

<style>
    img{
        width: auto;
        height: auto;
        transition: all .2s ease-out;
    }
    img:hover{
        opacity: 0.7;
        transform: scale(1.1);
        transition: 0.4s;
    }
    a{
        color: black;
        text-decoration: none;
    }
</style>

<div class="row row-cols-3 row-cols-sm-3 row-cols-md-5 justify-content-center mt-3 mb-4">
    <div class="col d-flex justify-content-center">
        <a href="/dog">
            <!-- <h1>Dogs Busniz</h1> -->
            <img style="width: {max}px;" class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1619643107/logos/Revised_Dogs_Busniz_uk0kej.webp" alt="">
        </a>
    </div>
    <div class="col d-flex justify-content-center">
        <a href="/cat">
            <!-- <h1>Cats Whiskers</h1> -->
            <img style="width: {max}px;" class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1619643107/logos/Revised_Cats_Whiskas_a1bjdo.webp" alt="">
        </a>
    </div>
    <div class="col d-flex justify-content-center">
        <a href="/fish">
            <!-- <h1>Fishy Fin</h1> -->
            <img style="width: {max}px;" class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1619643107/logos/Revised_Fishy_Fin_dbeuxa.webp" alt="">
        </a>
    </div>
    <div class="col d-flex justify-content-center">
        <a href="/bird">
            <!-- <h1>Birds of a Feather</h1> -->
            <img style="width: {max}px;" class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1619643107/logos/Revised_Birds_of_a_Feather_hxh8bp.webp" alt="">
        </a>
    </div>
    <div class="col d-flex justify-content-center">
        <a href="/furry-critters">
            <!-- <h1>Hairy Critters</h1> -->
            <img style="width: {max}px;" class="img-fluid" src="https://res.cloudinary.com/splyce/image/upload/v1619643107/logos/Revised_Furry_Critters_ixl0d1.webp" alt="">
        </a>
    </div>
</div>