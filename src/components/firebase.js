import firebase from 'firebase/app'
import "firebase/firestore" 


const config = {
    apiKey: "AIzaSyBg5fdoSQNSAlK-xNtc1yB-M3VNwAxvYIA",
    authDomain: "hit-creation-d4f96.firebaseapp.com",
    projectId: "hit-creation-d4f96",
    storageBucket: "hit-creation-d4f96.appspot.com",
    messagingSenderId: "292260517539",
    appId: "1:292260517539:web:5e4eb34791774629c29116",
    measurementId: "G-VT7855ET0E"
  };

  firebase.initializeApp(config)



  export const firestore = firebase.firestore()
  export default firebase