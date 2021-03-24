import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
    apiKey: 'AAAAnzV6oYI:APA91bHwxT1URDCbKkH1tdisgnNsYo1oAlzjMUkc3Jsiu-JkVR_VEGQptIWsBCbHpHgXIXCvQt7wFgQQp-tTvxqOko8p7ePqyDuP4YqVUlpeSJanc71lmf4TFBaCZMhqAB_twSGkM3fq',
    projectId: 'villagevetshop-e2f38',
}

firebase.initializeApp(config);

export const functions = firebase.functions();