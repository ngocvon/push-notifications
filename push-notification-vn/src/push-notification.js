import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCfci93z4qo3_7P9HqYduI8jzd1wdlgOow",
  authDomain: "awesome-vigil-226613.firebaseapp.com",
  databaseURL: "https://awesome-vigil-226613.firebaseio.com",
  projectId: "awesome-vigil-226613",
  storageBucket: "awesome-vigil-226613.appspot.com",
  messagingSenderId: "19339836108"
};

const PUBLIC_KEY = 'BCNwtwqZ83siJv6FA2yIId3V419Yc8HAfp2Tlr1UIsteHiZjBInqBWyRNdTKsPaY6HT_hVjJ4U_sW0XI5KLmbVQ';

export const initializeFirebase = () => {
  firebase.initializeApp(config);
};

export const askPermissionUser = async () => {
  try {
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(PUBLIC_KEY);
    await messaging.requestPermission();
    const token = await messaging.getToken();

    return token;
  } catch (err) {
    console.error(err, 'err askPermissionUser');
  }
};
