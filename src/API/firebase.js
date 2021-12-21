import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, sign } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBCHpST0ZkC-Mmsh3tz8WXSg9PUPTxX3sw",
    authDomain: "diagrama-tecnicatura.firebaseapp.com",
    databaseURL: "https://diagrama-tecnicatura-default-rtdb.firebaseio.com",
    projectId: "diagrama-tecnicatura",
    storageBucket: "diagrama-tecnicatura.appspot.com",
    messagingSenderId: "222049940404",
    appId: "1:222049940404:web:6fd62c5900f371d8aa38e1",
    measurementId: "G-6P27NVMP2K"
    };
    
    // Initialize Firebase
const app = initializeApp(firebaseConfig, "diagrama-tecnicatura-config");
const analytics = getAnalytics(app, "diagrama-tecnicatura-analytics");
const auth = getAuth(app, "diagrama-tecnicatura-auth");

const firebase = {
    app,
    analytics,
    auth
};

export default firebase;