// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const FIREBASE_CONFIG = {
	apiKey: "AIzaSyB4KyRyONOn-cTEHpEgBr8Vrx0pCuvOUh8",
	authDomain: "amartha-chat-app-test.firebaseapp.com",
	databaseURL: "https://amartha-chat-app-test.firebaseio.com",
	projectId: "amartha-chat-app-test",
	storageBucket: "amartha-chat-app-test.appspot.com",
	messagingSenderId: "438069375682",
	appId: "1:438069375682:web:a725f26ad25a6649"
};
firebase.initializeApp(FIREBASE_CONFIG);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload) {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	var notificationTitle = payload.data.name;
	var notificationOptions = {
	  body: payload.data.message,
	  icon: '/firebase-logo.png'
	};
  
	return window.self.registration.showNotification(notificationTitle,
	  notificationOptions);
  });

