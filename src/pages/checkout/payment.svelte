<script>
    import { totalAmount, deliveryDetails } from '../store.js';
    import { functions } from '../firebase';

    // console.log("This is the delivery details on the payment page:" + $deliveryDetails.addressOne)

    const pfHost = 'sandbox.payfast.co.za';
    var value;
    let sig;

    const myData = [];
    // Merchant details
    myData["merchant_id"] = "10000100";
    myData["merchant_key"] = "46f0cd694581a";
    myData["return_url"] = "https://074528fc3fd2.ngrok.io/return.php";
    myData["cancel_url"] = "https://074528fc3fd2.ngrok.io/cancel.php";
    myData["notify_url"] = "https://074528fc3fd2.ngrok.io/notify.php";
    // Buyer details
    myData["name_first"] = "Gordon";
    myData["name_last"] = "Fleming";
    myData["email_address"] = "test@test.com";
    // Transaction details
    myData["m_payment_id"] = "000001";
    myData["amount"] = "200.0";
    myData["item_name"] = "#000001";
    //myData["passphrase"] = "jY6,28hji382ha7/";

    // function generateSignature() {
	// 	const callable = functions.httpsCallable('genSig');
	// 	return callable({
    //         merchant_id: myData["merchant_id"],
    //         merchant_key: myData["merchant_key"],
    //         return_url: myData["return_url"],
    //         cancel_url: myData["cancel_url"],
    //         notify_url: myData["notify_url"],
    //         name_first: myData["name_first"],
    //         email_address: myData["email_address"],
    //         m_payment_id: myData["m_payment_id"],
    //         amount: myData["amount"],
    //         item_name: myData["item_name"],
    //         passphrase: myData["passphrase"]
    //     }).then(result => {
    //         sig = result.data
    //         console.log("this is the result: " + result.data)
    //     }).then(console.log)
	// }

    //generateSignature()
    // myData["signature"] = generateSignature(myData);

    // Generate signature
    console.log("This is sig: " + sig)
    myData["signature"] = "df036bc0caa74c793a270f86ede8039e";
    // console.log("This is my data sig: " + myData["signature"])

    let form = `<form action="https://${pfHost}/eng/process" method="post">`;
    for (let key in myData) {
        if(myData.hasOwnProperty(key)){
            value = myData[key];
            if (value !== "") {
            form +=`<input name="${key}" type="hidden" value="${value.trim()}" />`;
            console.log("these are the keys " + key)
            console.log("these are the values " + value.trim())
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
        <input type="hidden" name="return_url" value="https://41acb2d8a6e1.ngrok.io/checkout/confirmation">
        <input type="hidden" name="cancel_url" value="https://41acb2d8a6e1.ngrok.io/checkout/cancel">
        <input type="hidden" name="notify_url" value="https://41acb2d8a6e1.ngrok.io/checkout/notify">
        <input type="hidden" name="amount" value={$totalAmount}>
        <input type="hidden" name="item_name" value="#000001"> -->
    {@html form}
</div>