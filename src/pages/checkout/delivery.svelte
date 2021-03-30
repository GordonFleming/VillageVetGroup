<script>
    import { deliveryDetails } from '../store.js';

    let deliver = false;
    let email
    let name
    let addressOne , addressTwo 
    let code

    $: if(email){
        $deliveryDetails = {
                            email: email,
                            name: name,
                            addressOne: addressOne,
                            addressTwo: addressTwo,
                            suburb: "Sandton",
                            zip: code
                        }
        console.log($deliveryDetails)
    }else{
        $deliveryDetails = {
                            email: "NA",
                            name: "NA",
                            addressOne: "NA",
                            addressTwo: "NA",
                            suburb: "NA",
                            zip: "NA"
                        }
    }

    function submitAddress(){
        $deliveryDetails = $deliveryDetails
        console.log("Clicked")
    }
</script>

<div class="container">
    <h1>Delivery</h1>
    <h4>Collect</h4>
    <a href="/checkout/payment"><button type="button" class="btn btn-outline-secondary btn-lg" on:click={() => deliver=false}>Collect</button></a>
    <button type="button" class="btn btn-outline-secondary btn-lg" on:click={() => deliver ? deliver=false : deliver=true}>Delivery</button>
    {#if deliver}
    <h4 class="mt-5">Deliver</h4>
        <form>
            <div class="row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input bind:value={email} type="email" class="form-control" id="inputEmail4" placeholder="email address">
                </div>
                <div class="form-group col">
                    <label for="name">Name</label>
                    <input bind:value={name} type="text" class="form-control" id="name" placeholder="your name">
                </div>
            </div>
            <div class="form-group">
                <label for="autocomplete">Address 1 - <strong>Sandton Area Only</strong></label>
                <input bind:value={addressOne} type="text" class="form-control" id="autocomplete" placeholder="Enter your address">
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input bind:value={addressTwo} type="text" class="form-control" id="inputAddress2">
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Suburb</label>
                    <input type="text" class="form-control" id="inputCity" value="Sandton" readonly>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input bind:value={code} type="text" class="form-control" id="inputZip">
                </div>
            </div>
            <a href="/checkout/payment"><button on:click={submitAddress} type="submit" class="form-group btn btn-secondary">Proceed</button></a>
        </form>
    {/if}
</div>

<style>
    .form-group{
        margin: 1rem;
    }
</style>