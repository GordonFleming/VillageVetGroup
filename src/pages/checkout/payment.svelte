<script>
    import { totalAmount, deliveryDetails } from '../store.js';
    import { functions } from '../firebase';

    console.log("This is the delivery details on the payment page:" + $deliveryDetails.addressOne)

    const pfHost = 'sandbox.payfast.co.za';
    var value;

    function generateSignature() {
		const callable = functions.httpsCallable('genSig');
		return callable().then(console.log)
	}

    const myData = [];
    // Merchant details
    myData["merchant_id"] = "10000100";
    myData["merchant_key"] = "46f0cd694581a";
    myData["return_url"] = "https://2d7b863341ba.ngrok.io/checkout/confirmation";
    myData["cancel_url"] = "https://2d7b863341ba.ngrok.io/checkout/cancel";
    myData["notify_url"] = "https://2d7b863341ba.ngrok.io/checkout/notify";
    // Buyer details
    myData["name_first"] = "Gordon";
    myData["email_address"] = "flemingrgordon@gmail.com";
    // Transaction details
    myData["m_payment_id"] = "1234";
    myData["amount"] = "20";
    myData["item_name"] = "Order#123";

    // Generate signature
    myData["signature"] = generateSignature(myData);
    console.log("The gensig:" + myData["signature"])
    console.log("dattaaa:" + dattaaa)

    let form = `<form action="https://${pfHost}/eng/process" method="post">`;
    for (let key in myData) {
        if(myData.hasOwnProperty(key)){
            value = myData[key];
            if (value !== "") {
            form +=`<input name="${key}" type="hidden" value="${value}" />`;
            }
        }
    }

    form += '<button type="submit" class="btn btn-outline-secondary btn-lg"><img class="img-fluid test" src="https://res.cloudinary.com/splyce/image/upload/v1616693707/PayFast-Logo-Black-Small_lxt7uo.png" alt="payfast" width="100px"></button></form>'
</script>

<div class="container">
    <h1 class="mb-5">Select payment type</h1>
    <!-- <form action="https://sandbox.payfast.co.za​/eng/process" method="post">
        <input type="hidden" name="merchant_id" value="10000100">
        <input type="hidden" name="merchant_key" value="46f0cd694581a">
        <input type="hidden" name="return_url" value="https://2d7b863341ba.ngrok.io/checkout/confirmation">
        <input type="hidden" name="cancel_url" value="https://2d7b863341ba.ngrok.io/checkout/cancel">
        <input type="hidden" name="notify_url" value="https://2d7b863341ba.ngrok.io/checkout/notify">
        <input type="hidden" name="amount" value={$totalAmount}>
        <input type="hidden" name="item_name" value="#000001"> -->
    {@html form}
</div>