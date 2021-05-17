import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7847IvOdVvOsTSDBhgCvybcqTHjIp9d0",
    authDomain: "cloth-store-40a07.firebaseapp.com",
    databaseURL: "https://cloth-store-40a07.firebaseio.com",
    projectId: "cloth-store-40a07",
    storageBucket: "cloth-store-40a07.appspot.com",
    messagingSenderId: "268420250697",
    appId: "1:268420250697:web:4461cf2990761d84fa9398",
    measurementId: "G-X0061GNN1N"
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;