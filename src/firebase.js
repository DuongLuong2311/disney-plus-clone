import firebase from "firebase"; //input firebase

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
}; //firebaseConfig file : get access to database

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize firebase app
const db = firebaseApp.firestore();//database
const auth = firebase.auth();//login-logout
const provider = new firebase.auth.GoogleAuthProvider(); //goolle authourity
const storage = firebase.storage(); //firebase storage

export { auth, provider, storage };
export default db;
