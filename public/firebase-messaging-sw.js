/* eslint-disable no-undef */
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyBbdfnFTbZzsFz6u5pYZspJAWVRlTwUGG4",
  authDomain: "gamerwait.firebaseapp.com",
  projectId: "gamerwait",
  messagingSenderId: "822135151280",
  appId: "1:822135151280:web:ad6aff08eba2bb18893975",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[SW] Background message", payload);

  const notificationTitle = payload.notification?.title || "GamerWait";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/icon-192.png", // opcional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
