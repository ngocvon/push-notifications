importScripts('https://www.gstatic.com/firebasejs/5.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.1/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyCfci93z4qo3_7P9HqYduI8jzd1wdlgOow",
    authDomain: "awesome-vigil-226613.firebaseapp.com",
    databaseURL: "https://awesome-vigil-226613.firebaseio.com",
    projectId: "awesome-vigil-226613",
    storageBucket: "awesome-vigil-226613.appspot.com",
    messagingSenderId: "19339836108"
};

firebase.initializeApp({
    messagingSenderId: "19339836108"
});

const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(() => {
    const title = 'Demo Firebase Success !';
    const options = {
        body: 'Merry Christmas 2019!',
        icon: 'icon.png'
    };
    return self.registration.showNotification(title, options);
});
