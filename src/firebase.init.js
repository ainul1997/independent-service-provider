// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdUHuy4s81EbHFA5HsaqPU7hQ4TnSSQSM",
    authDomain: "picman-assginment-10.firebaseapp.com",
    projectId: "picman-assginment-10",
    storageBucket: "picman-assginment-10.appspot.com",
    messagingSenderId: "724123193129",
    appId: "1:724123193129:web:39f814c8293b4ab71db138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getApps(app);

export default auth;