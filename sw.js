

self.addEventListener('install', evt =>{
    console.log('service worker has been installed');

});



self.addEventListener('activate', evt =>{
    console.log('service worker has been activated');

});

// fetch event
self.addEventListener('fetch', evt =>{
    console.log('fetch event', evt);

});





//codigo para notificaciones push

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCgwnTdAGACqHh3fT8JWkxIczHaNXTuwo4",
    authDomain: "entel-38eed.firebaseapp.com",
    databaseURL: "https://entel-38eed.firebaseio.com",
    projectId: "entel-38eed",
    storageBucket: "entel-38eed.appspot.com",
    messagingSenderId: "556000700712",
    appId: "1:556000700712:web:4ccd9844b7713c0baa881d"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   let messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){

    let title ='titulo de la notificacion';

      let options ={
        body:'mensaje'
    }

    self.registration.showNotification(title, options);


});