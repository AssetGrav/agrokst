import * as firebase from "firebase";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgiHX7hZcPbMXjnGj0oyAPRNPhMyV65l0",
    authDomain: "agroshop-770a9.firebaseapp.com",
    databaseURL: "https://agroshop-770a9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agroshop-770a9",
    storageBucket: "agroshop-770a9.appspot.com",
    messagingSenderId: "1022474102642",
    appId: "1:1022474102642:web:9fc748bb0cee869c645feb"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const db = app.database();

export { auth, db, firebase }