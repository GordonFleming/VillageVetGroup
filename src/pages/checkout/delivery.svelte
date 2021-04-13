<script>
    import { deliveryDetails } from '../store.js';

    let deliver
    let email
    let name
    let addressOne , addressTwo 
    let code
    let phone
    let extra
    let total

    let deliveryDeets;
    let obj = localStorage.getItem("delivery");
    deliveryDetails.subscribe(() => {
        if(obj !== null && obj !== undefined){
            deliveryDeets = JSON.parse(obj);
        }else{
            localStorage.removeItem("delivery");
        }
    });

    $: if(deliver){
        $deliveryDetails = {
                            email: email,
                            name: name,
                            phone: phone,
                            addressOne: addressOne,
                            addressTwo: addressTwo,
                            suburb: "Sandton",
                            zip: code,
                            extra: extra,
                            deliver: true
                        }
        if(deliveryDeets && email == ""){
            email = deliveryDeets.email;
            name = deliveryDeets.name;
            phone = deliveryDeets.phone;
            addressOne = deliveryDeets.addressOne;
            addressTwo = deliveryDeets.addressTwo;
            code = deliveryDeets.zip;
            extra = deliveryDeets.extra;
        }
    }else{
        $deliveryDetails = {
                            email: email,
                            phone: phone,
                            name: name,
                            extra: extra,
                            deliver: false
                        }
        if(deliveryDeets && email == ""){
            email = deliveryDeets.email;
            name = deliveryDeets.name;
            phone = deliveryDeets.phone;
            extra = deliveryDeets.extra;
        }
    }

    function submitAddress(){
        deliveryDetails.subscribe(() => {
            localStorage.setItem("delivery", JSON.stringify($deliveryDetails))
        });
    }
</script>

<div class="container">
    <h1 class="mb-4">Collection / Delivery</h1>
    <button type="button" class="btn btn-outline-secondary btn-lg" on:click={() => deliver=false}>Collect</button>
    <button type="button" style="margin-left: 1rem;" class="btn btn-outline-secondary btn-lg" on:click={() => deliver=true}>Delivery</button>
    {#if deliver}
        <h4 class="mt-5">Deliver</h4>
        <form action="/checkout/payment">
            <div class="row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input bind:value={email} type="email" class="form-control" id="inputEmail4" placeholder="email address" required>
                </div>
                <div class="form-group col">
                    <label for="name">Name</label>
                    <input bind:value={name} type="text" class="form-control" id="name" placeholder="your name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="autocomplete">Phone number</label>
                <input style="width:200px" bind:value={phone} type="tel" class="form-control" id="autocomplete" placeholder="Phone num" required>
            </div>
            <div class="form-group">
                <label for="inputAddress1">Address 1 - <strong>Sandton Area Only</strong></label>
                <input bind:value={addressOne} type="text" class="form-control" id="inputAddress1" placeholder="Enter your address" required>
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input bind:value={addressTwo} type="text" class="form-control" id="inputAddress2" required>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Suburb</label>
                    <input type="text" class="form-control" id="inputCity" value="Sandton" readonly>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input bind:value={code} type="text" class="form-control" id="inputZip" required>
                </div>
            </div>
            <div class="form-group">
                <label for="msg">Important extra details about your order?</label>
                <textarea style="width:600px" bind:value={extra} id="msg" name="message" class="form-control" rows="4" placeholder="Other possible colour options..."></textarea>
            </div>
            <button on:click={submitAddress} type="submit" class="form-group btn btn-secondary">Proceed</button>
            <p>This will add an additional <strong>R55</strong> to your total.</p>
        </form>
    {:else}
        <h4 class="mt-5">Collect</h4>
        <form action="/checkout/payment">
            <div class="row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input bind:value={email} type="email" class="form-control" id="inputEmail4" placeholder="email address" required>
                </div>
                <div class="form-group col">
                    <label for="name">Name</label>
                    <input bind:value={name} type="text" class="form-control" id="name" placeholder="your name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="autocomplete">Phone number</label>
                <input style="width:200px" bind:value={phone} type="tel" class="form-control" id="autocomplete" placeholder="Phone num" required>
            </div>
            <div class="form-group">
                <label for="msg">Please tell us what time you plan to collect your order</label>
                <input style="width:600px" bind:value={extra} id="msg" name="message" type="text" class="form-control" required>
            </div>
            <button on:click={submitAddress} type="submit" class="form-group btn btn-secondary">Proceed</button>
        </form>
    {/if}
</div>

<style>
    .form-group{
        margin: 1rem;
    }
</style>