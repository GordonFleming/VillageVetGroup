<script>
	import { functions } from '../firebase';

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
    let total = parseInt(localStorage.getItem("total"));
    let deliveryFee = 0
    if(deliveryDeets){
        if(deliveryDeets.deliver){
            deliveryFee = 55
            total += 55;
            name = deliveryDeets.name
            mail = deliveryDeets.email
            deliveryHTML = `<p>${deliveryDeets.email}</p>
                            <p>${deliveryDeets.addressOne}</p>
                            <p>${deliveryDeets.addressTwo}</p>
                            <p>${deliveryDeets.suburb}</p>
                            <p>${deliveryDeets.zip}</p>`;
        }else{
            name = deliveryDeets.name
            mail = deliveryDeets.email
            deliveryHTML = "<p>No delivery</p>"
        }
    }

    let html = `<table class='tg' style='undefined;table-layout: fixed; width: 800px'><colgroup><col style='width: 200px'><col style='width: 200px'>
                    <col style='width: 200px'>
                    <col style='width: 200px'>
                    </colgroup>`;

    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].colour){
            colour = cartItems[i].colour;
        }else{
            colour = "";
        }
        if (cartItems[i].weight){
            html += `<thead> <tr>
                <td class='tg-0lax'>${cartItems[i].id}</td>
                <td class='tg-0lax'>${cartItems[i].name}<br>${cartItems[i].weight}<br>${colour}</td>
                <td class='tg-0lax'>${cartItems[i].units}</td>
                <td class='tg-0lax'>${cartItems[i].price}</td>
                </tr></thead>`;
        }else if (cartItems[i].size && cartItems[i].size != "standard"){
            html += `<thead> <tr>
                <td class='tg-0lax'>${cartItems[i].id}</td>
                <td class='tg-0lax'>${cartItems[i].name}<br>${cartItems[i].size}<br>${colour}</td>
                <td class='tg-0lax'>${cartItems[i].units}</td>
                <td class='tg-0lax'>${cartItems[i].price}</td>
                </tr></thead>`;
        }else {
            html += `<thead> <tr>
                <td class='tg-0lax'>${cartItems[i].id}</td>
                <td class='tg-0lax'>${cartItems[i].name}<br>${colour}</td>
                <td class='tg-0lax'>${cartItems[i].units}</td>
                <td class='tg-0lax'>${cartItems[i].price}</td>
                </tr></thead>`;
        }
    }              

    html += '</table>';

    function sendEmail() {
        const callable = functions.httpsCallable('sendAway');
        return callable({mail: mail, ccMail: 'gordonfleming@pm.me', num: num, name: name, date: date, html: html, deliveryHTML: deliveryHTML, deliveryFee: deliveryFee, total: total}).then(console.log);
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