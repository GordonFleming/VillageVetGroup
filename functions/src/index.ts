import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template_id;
sgMail.setApiKey(API_KEY);

export const sendAway = functions.https.onCall(async (data, context) =>{
  const msg = {
    to: data.mail,
    from: "noreply@villagevetshop.com",
    cc: data.ccMail,
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      num: data.num,
      name: data.name,
      date: data.date,
      html: data.html,
      deliveryFee: data.deliveryFee,
      total: data.total
    },
  };
  await sgMail.send(msg);

  // Handle errors here

  return {success: true};
});

import * as crypto from "crypto";

const PASSPHRASE = functions.config().passphrase.value;

export const genSig = functions.https.onCall(async (data, context) =>{
    const myData: {[key: string]: string} = {
        merchant_id: data.merchant_id,
        merchant_key: data.merchant_key,
        return_url: data.return_url,
        cancel_url: data.cancel_url,
        // notify_url: data.notify_url,
        name_first: data.name_first,
        email_address: data.email_address,
        m_payment_id: data.m_payment_id,
        amount: data.amount,
        item_name: data.item_name
    }
    console.log("This is myData merchant id from this actual function: " + myData.merchant_id);
    console.log("This is myData name: " + data.name_first);
    console.log("This is the passphrase: " + PASSPHRASE);
  // Create parameter string
  let pfOutput = "";
  for (let key in myData) {
    if (myData.hasOwnProperty(key)){
      if (myData[key] !== "") {
        pfOutput +=`${key}=${encodeURIComponent(myData[key].trim()).replace(/%20/g, "+")}&`
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (PASSPHRASE !== null) {
    getString +=`&passphrase=${encodeURIComponent(PASSPHRASE.trim()).replace(/%20/g, "+")}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
});