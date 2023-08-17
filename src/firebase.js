import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3m0yi7j2iod63qeu0W93t3zFIJWrMw2M",
  authDomain: "test-91ffd.firebaseapp.com",
  projectId: "test-91ffd",
  storageBucket: "test-91ffd.appspot.com",
  messagingSenderId: "102365524881",
  appId: "1:102365524881:web:82b615eeee3bac6c13a030",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
