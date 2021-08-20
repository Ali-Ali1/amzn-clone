import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJoNBiMsKvmhRd5bxbeDHBAWEm0Hk_xbs",
    authDomain: "clone-599d9.firebaseapp.com",
    projectId: "clone-599d9",
    storageBucket: "clone-599d9.appspot.com",
    messagingSenderId: "42098888507",
    appId: "1:42098888507:web:3755b74164cfb12e96711e",
    measurementId: "G-NK6Y90R21R"
});


const auth = firebase.auth();

export { auth };