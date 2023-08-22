import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpMiYxsVLCxPVEC1T4X59qoubbz_E32Cc",
    authDomain: "auth-firebasedapp.firebaseapp.com",
    projectId: "auth-firebasedapp",
    storageBucket: "auth-firebasedapp.appspot.com",
    messagingSenderId: "366500994964",
    appId: "1:366500994964:web:1fc80f926e1f969889f981"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebaseApp.auth();
  const googleProvider=new firebase.auth.GoogleAuthProvider();
  const githubProvider=new firebase.auth.GithubAuthProvider();
  export  {auth,googleProvider,githubProvider};