// Your web app's Firebase configuration
import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyA_MZJCvI-LSYu_Na8soVO4Qph0shWi3h0",
    authDomain: "ninja-firebase-89a8e.firebaseapp.com",
    projectId: "ninja-firebase-89a8e",
    storageBucket: "ninja-firebase-89a8e.appspot.com",
    messagingSenderId: "168024552325",
    appId: "1:168024552325:web:4b602ba148866eaf398aec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }