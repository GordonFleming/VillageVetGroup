<script>
	import { functions } from '../firebase';
    import { metatags } from '@roxi/routify'
    metatags.title = 'Confirmation | Village Vetshop'
    metatags.description = 'Confirmation of your purchase'

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let date = cDay + "/" + cMonth + "/" + cYear;

    let obj = localStorage.getItem("delivery");
    let deliveryDeets = JSON.parse(obj);

    let deliveryHTML;
    let colour;

    let objItems = localStorage.getItem("data");
    let cartItems = JSON.parse(objItems);

    let num = localStorage.getItem("itemName").toString();
    let name
    let mail
    let extra
    let total = parseInt(localStorage.getItem("total"));
    let deliveryFee = 0
    if(deliveryDeets){
        if(deliveryDeets.deliver){
            deliveryFee = 55
            total += 55;
            name = deliveryDeets.name
            mail = deliveryDeets.email
            deliveryHTML = `<p>${deliveryDeets.email}</p>
                            <p>${deliveryDeets.phone}</p>
                            <p>${deliveryDeets.addressOne}</p>
                            <p>${deliveryDeets.addressTwo}</p>
                            <p>${deliveryDeets.suburb}</p>
                            <p>${deliveryDeets.zip}</p>`;
            extra = deliveryDeets.extra
        }else{
            name = deliveryDeets.name
            mail = deliveryDeets.email
            extra = deliveryDeets.extra
            deliveryHTML = "<p>No delivery</p>"
        }
    }

    let html = `<table style='table-layout: fixed; width: 600px; border-collapse: collapse;'><colgroup><col style='width: 60px'><col style='width: 350px'>
                    <col style='width: 120px'>
                    <col style='width: 70px'>
                    </colgroup>
                    <thead style="font-size: 1.08em;"><th style="text-align: left; padding-bottom: 0.5rem; border-bottom: 1px solid black;">ID</th> <th style="text-align: left; padding-bottom: 0.5rem; border-bottom: 1px solid black;">Name</th> <th style="text-align: left; padding-bottom: 0.5rem; border-bottom: 1px solid black;">Units</th> <th style="text-align: left; padding-bottom: 0.5rem; border-bottom: 1px solid black;">Price</th></thead>
                    <tr><td style="padding-top: 1em;"></td></tr>`;

    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].colour){
            colour = cartItems[i].colour;
        }else{
            colour = "";
        }
        if (cartItems[i].weight){
            html += `<tr>
                <td valign="top">${cartItems[i].id}</td>
                <td>${cartItems[i].name}<br>${cartItems[i].weight}<br>${colour}</td>
                <td>${cartItems[i].units}</td>
                <td style="text-align: right;">${cartItems[i].price}</td>
                </tr>`;
        }else if (cartItems[i].size && cartItems[i].size != "standard"){
            html += `<tr>
                <td valign="top">${cartItems[i].id}</td>
                <td>${cartItems[i].name}<br>${cartItems[i].size}<br>${colour}</td>
                <td>${cartItems[i].units}</td>
                <td style="text-align: right;">${cartItems[i].price}</td>
                </tr>`;
        }else {
            html += `<tr>
                <td valign="top">${cartItems[i].id}</td>
                <td>${cartItems[i].name}<br>${colour}</td>
                <td>${cartItems[i].units}</td>
                <td style="text-align: right;">${cartItems[i].price}</td>
                </tr>`;
        }
    }              

    html += '</table>';
    function sendEmail() {
        const callable = functions.httpsCallable('sendAway');
        return callable({mail: mail, ccMail: 'villagevetshop04@gmail.com', num: num, name: name, date: date, html: html, deliveryHTML: deliveryHTML, extra: extra, deliveryFee: deliveryFee, total: total}).then(console.log);
    }

    sendEmail()
    setTimeout(localStorage.clear(), 200);
</script>

<div class="container text-center">
    <h1>Success, your order is complete!</h1>
    <h4>You will receive confirmation about your order via email. If there are any problems with you order we will be sure to contact you.</h4>
    <br>
    <i style="color: green;" class="far fa-check-circle fa-8x"></i>
</div>