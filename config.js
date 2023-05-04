import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

export const firebaseConfig={
    apiKey: "AIzaSyDQzFL7xFPgbrbVSbUKIDfdp04yQ3nzmvs",
    authDomain: "kota-auto-freelance-edab4.firebaseapp.com",
    projectId: "kota-auto-freelance-edab4",
    storageBucket: "kota-auto-freelance-edab4.appspot.com",
    messagingSenderId: "742321365098",
    appId: "1:742321365098:web:e69a907623166de202ea13",
    measurementId: "G-PTM59NP2NT"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
