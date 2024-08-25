importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDNEnkVPNBS7b6-Alb9th_fY587KVv8z3s",
  authDomain: "blog-sebastian.firebaseapp.com",
  projectId: "blog-sebastian",
  storageBucket: "blog-sebastian.appspot.com",
  messagingSenderId: "1057291695155",
  appId: "1:1057291695155:web:409022fc35287c4ea85f46",
  measurementId: "G-72B18B9RKG"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje en segundo plano recibido:', payload);
  self.registration.showNotification('Título de la notificación', {
    body: payload.notification.body,
    icon: '/path/to/icon.png'
  });
});