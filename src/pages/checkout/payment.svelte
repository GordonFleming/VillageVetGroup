<script>
    import { totalAmount } from '../store.js';
    import { functions } from '../firebase';

    let obj = localStorage.getItem("delivery");
    let deliveryDeets = JSON.parse(obj);
    let total = parseInt(localStorage.getItem("total"));

    console.log("This is the delivery details on the payment page:" + $totalAmount)

    const pfHost = 'www.payfast.co.za'; //sandbox. or www.
    var value;
    let id = Math.floor(Math.random() * 999999).toString()
    localStorage.setItem("id",id)
    let itemName = `#${Math.floor(Math.random() * 9999)}`.toString()
    localStorage.setItem("itemName",itemName)
    let name = "NA"
    let email = "NA"

    if(deliveryDeets){
        if(deliveryDeets.deliver){
            total += 55;
            $totalAmount = total;
        }
        name = deliveryDeets.name
        email = deliveryDeets.email
    }

    const myData = [];
    // Merchant details
    myData["merchant_id"] = "17441814"; // Sandbox 10022266 - Live 17441814
    myData["merchant_key"] = "2tnq3f1im49r8"; //Sandbox gjscontynwqxz - Live 2tnq3f1im49r8
    myData["return_url"] = "https://villagevetshop.com/checkout/confirmation/"; // Sandbox use Ngrok https://....ngrok.io - Live https://villagevetshop.com
    myData["cancel_url"] = "https://villagevetshop.com/checkout/cancel/"; // Sandbox use Ngrok https://....ngrok.io - Live https://villagevetshop.com
    // Buyer details
    myData["name_first"] = name;
    myData["email_address"] = email;
    // Transaction details
    myData["m_payment_id"] = id;
    myData["amount"] = total.toString();
    myData["item_name"] = itemName;
    myData["passphrase"] = "jY6,28hji382ha7/"; //Sandbox ea212wrsffgvD - Live jY6,28hji382ha7/

    // Live

    function generateSignature() {
		const callable = functions.httpsCallable('genSig');
		return callable({
            merchant_id: myData["merchant_id"],
            merchant_key: myData["merchant_key"],
            return_url: myData["return_url"],
            cancel_url: myData["cancel_url"],
            // notify_url: myData["notify_url"],
            name_first: myData["name_first"],
            email_address: myData["email_address"],
            m_payment_id: myData["m_payment_id"],
            amount: myData["amount"],
            item_name: myData["item_name"]
        }).then(result => {
            console.log("this is the result: " + result.data)
            // Generate signature
            myData["signature"] = result.data
        })
	}

    generateSignature()

    let form = `<form action="https://${pfHost}/eng/process" method="post">`;
    for (let key in myData) {
        if(myData.hasOwnProperty(key)){
            value = myData[key];
            if (value !== "") {
            form +=`<input name="${key}" type="hidden" value="${value.trim()}" />`;
            }
        }
    }

    form += '<button type="submit" class="btn btn-outline-secondary btn-lg"><img class="img-fluid test" src="https://res.cloudinary.com/splyce/image/upload/v1616693707/PayFast-Logo-Black-Small_lxt7uo.png" alt="payfast" width="130px"></button></form>'
</script>

<div class="container text-center">
    {#await myData["signature"]}
        <h2>Loading...</h2>
    {:then} 
        {#if total && deliveryDeets}
            <h2 class="mb-5 pb-5">Continue with payment through PayFast's secure gateway</h2>
            {@html form}
            <h6 class="mt-5 pt-5">More payment options will become available in the future...</h6>
            <small>The website is still relatively new, and we would appreciate if you experienced any bugs to please report them: <a href="/bugs">Report a bug</a></small>
        {:else if !total && !deliveryDeets}
            <h1>Sorry, you need to select a product first!</h1>
        {/if}
    {/await}
</div>