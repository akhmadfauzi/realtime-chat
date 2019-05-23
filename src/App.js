import React from 'react';
import './app.scss';
import * as firebase from 'firebase/app';
import 'firebase/firebase-messaging';
import { firebaseConfig } from './config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="app">

    </div>
  );
}

export default App;
