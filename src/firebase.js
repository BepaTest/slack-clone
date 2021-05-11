import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAKGPJcQ5tSAMeGEEWMqT8gjNihEiID7uU',
  authDomain: 'slack-clone-vt.firebaseapp.com',
  projectId: 'slack-clone-vt',
  storageBucket: 'slack-clone-vt.appspot.com',
  messagingSenderId: '715133902073',
  appId: '1:715133902073:web:7d0e5dd815284406ee9628',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
