import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAJZgRLXNu6aRUYvIrE0csP11dtycg_1Bg",
    authDomain: "eride-f45ae.firebaseapp.com",
    databaseURL: "https://eride-f45ae-default-rtdb.firebaseio.com",
    projectId: "eride-f45ae",
    storageBucket: "eride-f45ae.appspot.com",
    messagingSenderId: "1041313621112",
    appId: "1:1041313621112:web:a2e34efeb32f023e45b98d"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


