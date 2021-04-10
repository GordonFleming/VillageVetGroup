<script>
    import { fly } from 'svelte/transition';
    import { cart, itemCount, totalAmount } from '../store.js';

    let cartItems;
    let obj = localStorage.getItem("data");
    let cartLength;
    cart.subscribe(() => {
        if(obj !== null && obj !== undefined){
            cartItems = JSON.parse(obj);
            cartLength = cartItems.length;
        }else{
            cartLength = 0;
        }
    });

    $:{ $itemCount = cartLength;}

    var i;
    $:{
        $totalAmount = 0;
        for(i = 0; i < cartLength; i++){
            if(cartLength > 0){
                $totalAmount += cartItems[i].price*cartItems[i].units
            }else{
                $totalAmount = 0;
            }
        }
        localStorage.setItem("total", $totalAmount);
    }

    let disabled = false

    const removeItemAll = (id) => {
        if(cartLength == 1){
            cartItems = []
            cart.set(cartItems)
            console.log(cartItems)
            localStorage.removeItem("data");
            cartLength = 0
        }else{
            var i = 0;
            for(let item of cartItems){
                if ((item.id+item.price) === id) {
                    cart.set(cartItems)
                    cart.subscribe(() => {
                        localStorage.setItem("data", JSON.stringify(cartItems.splice(i, 1)))
                    });
                    cartLength--;
                }
                i++;
            }
        }
    }

    const addOne = (id) => {
        for(let item of cartItems){
            if(item.units >= 2) disabled = false
            if((item.id+item.price) == id){
                item.units++
                cartItems = cartItems
                cart.subscribe(() => {
                    localStorage.setItem("data", JSON.stringify(cartItems))
                });
                $totalAmount = $totalAmount
                return
            }
        }
    }
    const subtractOne = (id) => {
        for(let item of cartItems){
            if((item.id+item.price) == id){
                if(item.units <= 0) disabled = true
                if(item.units >= 2){
                    item.units--
                }
                cart.subscribe(() => {
                    localStorage.setItem("data", JSON.stringify(cartItems))
                });
                cartItems = cartItems
                return
            }
        }
    }
</script>

<main>
    {#if cartLength > 0 && $itemCount > 0}
        <div class="container">
            <div class="row align-items-center justify-content-center mb-3">
                <h4>Your cart total: R {$totalAmount}.00</h4>
                {#each cartItems as product}
                    {#if product.name}
                        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 align-self-center">
                            <div class="card mt-4" id="{product.id}" style="width: auto;" transition:fly="{{ y: -100, duration: 400 }}">
                                <div class="align-self-center">
                                    <a href="/products/{product.id}">
                                        {#if product.img === undefined || product.img === null}
                                            <img src="https://res.cloudinary.com/splyce/image/upload/v1611859484/petfood/samples/download_2_gzv0sh.jpg" class="card-img-top" alt="product_image">
                                        {:else}
                                            <img style="display: block; height: auto; width: auto; max-width: 150px; max-height: 150px;" src="{product.img}" class="card-img-top" alt="product_image">
                                        {/if}
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{product.name.toLowerCase().replace(" and ", "&")}</h5> 
                                        <p class="card-price pt-2">R {product.price}.00</p>
                                        {#if product.weight !== undefined}
                                            <p class="card-text">{product.weight}</p>
                                        {:else}
                                            <p class="card-text">{product.size}</p>
                                        {/if}
                                        <p class="card-text">{product.units} units</p>
                                        {#if product.colour}
                                            <p class="card-text">{product.colour}</p>
                                        {/if}
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <button on:click={() => removeItemAll((product.id+product.price))} class="btn btn-outline-secondary shadow-none">
                                    Remove
                                </button>
                                <button on:click={subtractOne(product.id+product.price)} {disabled} class="btn btn-outline-secondary shadow-none">
                                    -
                                </button>
                                <button on:click={addOne(product.id+product.price)} class="btn btn-outline-secondary shadow-none">
                                    +
                                </button>
                            </div>
                        </div>
                    {:else}
                        {console.log("Error")}
                    {/if}                     
                <!-- This block is true while items are 0, in other words while svelte loops through the numerous products -->
                {:else} 
                    <center><h2>loading...</h2></center>
                {/each}
            </div>
        </div>
    {/if}
</main>