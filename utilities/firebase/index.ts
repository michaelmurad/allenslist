import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCxhkOqf2JvZ3ArwuR4_BQajEDhU1PWKEQ',
  authDomain: 'allenslist-37020.firebaseapp.com',
  databaseURL: 'https://allenslist-37020.firebaseio.com',
  projectId: 'allenslist-37020',
  storageBucket: 'allenslist-37020.appspot.com',
  messagingSenderId: '827989495423',
  appId: '1:827989495423:web:4881a4551aac7fb144b94a',
  measurementId: 'G-T3N3VK2XTX',
};

const initializeFirebase = (): void => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default initializeFirebase;
