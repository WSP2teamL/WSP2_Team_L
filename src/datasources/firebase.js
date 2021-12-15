import firebase from 'firebase/app'
import 'firebase/firebase-database';

const oFirebase = firebase.initializeApp({
  databaseURL: "https://wsp-transport-applicaton-default-rtdb.firebaseio.com",
  storageBucket: "wsp-transport-applicaton.appspot.com",
});

const oDB = oFirebase.database();
export const locationStorage = oDB.ref('location');