import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXiLe6eVJWrYo5lG6-ArChHkZ6NZz5nVM",
    authDomain: "clone-b6add.firebaseapp.com",
    projectId: "clone-b6add",
    storageBucket: "clone-b6add.appspot.com",
    messagingSenderId: "16212022336",
    appId: "1:16212022336:web:33f4e355cb58fa5d847ba5",
    measurementId: "G-WWBFK70TR0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};