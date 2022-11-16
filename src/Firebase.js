
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCRMyyDJgxQg8hj-eNp1Q0sHkEdykAP1E",
    authDomain: "manage-408a1.firebaseapp.com",
    projectId: "manage-408a1",
    storageBucket: "manage-408a1.appspot.com",
    messagingSenderId: "766402547661",
    appId: "1:766402547661:web:a41e8bddfa5f736ef5fe84",
    measurementId: "G-Z316LX9TYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}



