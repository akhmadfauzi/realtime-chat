import React from 'react';
import './app.scss';
import * as firebase from 'firebase/app';
import 'firebase/firebase-messaging';
import { FIREBASE, VAPID_KEY } from './config';
// import * as admin from 'firebase-admin';

// Initialize Firebase
firebase.initializeApp(FIREBASE);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(VAPID_KEY);

Notification.requestPermission()
  .then(function (permission) {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      messaging.getToken().then(function (currentToken) {
        if (currentToken) {
          console.log(currentToken)
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
      });
    } else {
      console.log('Unable to get permission to notify.');
    }


  }).catch((err) => {
    console.log('Error occured');
  });

function App() {
  return (
    <div className="app">
      App
    </div>
  );
}

export default App;
