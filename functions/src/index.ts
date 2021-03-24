import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template_id;
sgMail.setApiKey(API_KEY);

export const sendAway = functions.https.onCall(async (data, context) =>{
  const msg = {
    to: "flemingrgordon@gmail.com",
    from: "sales@villagevetshop.com",
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      num: data.num,
      name: data.name,
    },
  };
  await sgMail.send(msg);

  // Handle errors here

  return {success: true};
});
