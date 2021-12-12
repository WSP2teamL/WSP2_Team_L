// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/storage';

// Your web app's Firebase configuration
const oFirebase = firebase.initializeApp({
  databaseURL: "https://wsp-transport-applicaton-default-rtdb.firebaseio.com",
  storageBucket: "wsp-transport-applicaton.appspot.com",
  apiKey: "AIzaSyCQggJry1eVnfVJs3F-OXHaatYeFLXs4dg",
  authDomain: "wsp-transport-applicaton.firebaseapp.com",
}).database();

const oDB = oFirebase.database();
export const oPicturesinDB = oDB.ref('position');
export const oStorage = oFirebase.storage();