import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAZ4Gc9zzwyqXf9PHS_surchC17YVhXVA4",
  authDomain: "biblioteca2-796f3.firebaseapp.com",
  projectId: "biblioteca2-796f3",
  storageBucket: "biblioteca2-796f3.appspot.com",
  messagingSenderId: "1000784496913",
  appId: "1:1000784496913:web:25e50dfb1e3d84c614e4b0"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
