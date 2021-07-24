import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA_0QGtqRHUMaxZriAOOvYWy33xPSnBUY4",
    authDomain: "social-media-182c4.firebaseapp.com",
    projectId: "social-media-182c4",
    storageBucket: "social-media-182c4.appspot.com",
    messagingSenderId: "422027623633",
    appId: "1:422027623633:web:6e436d507e5bf97672d9f0",
    measurementId: "G-VET2S11RBD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();