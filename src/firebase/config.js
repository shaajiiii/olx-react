// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAwK4RQkyoarheAvYBioM8TRjgZ3gIUu9E",
//     authDomain: "test-9f093.firebaseapp.com",
//     projectId: "test-9f093",
//     storageBucket: "test-9f093.appspot.com",
//     messagingSenderId: "594016326432",
//     appId: "1:594016326432:web:c6de2db91b4fe71d6e7d45",
//     measurementId: "G-ZBSD9WZE3B"
//   };

 
// export const Firebase= firebase.initializeApp(firebaseConfig)


// console.log(Firebase)



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';//?

const firebaseConfig = {
    apiKey: "AIzaSyAwK4RQkyoarheAvYBioM8TRjgZ3gIUu9E",
    authDomain: "test-9f093.firebaseapp.com",
    projectId: "test-9f093",
    storageBucket: "test-9f093.appspot.com",
    messagingSenderId: "594016326432",
    appId: "1:594016326432:web:c6de2db91b4fe71d6e7d45",
    measurementId: "G-ZBSD9WZE3B"
  };


// Use this to initialize the firebase App
const Firebase = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
//const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { Firebase };


// this is making me nutssss!!!!!!!1