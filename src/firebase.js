import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmKE8GjPTDRgeaaqiM5JfT1Tz0QJqHFRk",
  authDomain: "cab-services-7c5fb.firebaseapp.com",
  projectId: "cab-services-7c5fb",
  storageBucket: "cab-services-7c5fb.appspot.com",
  messagingSenderId: "1032608701952",
  appId: "1:1032608701952:web:8760104d4904d76a6142e5",
  measurementId: "G-JH9LXPJ09E"
});

var db = firebaseApp.firestore();

export { db };
