import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZalJPJ5LFN0U0gYJsoWiOQxCHPj9bPi4",
  authDomain: "imessage-clone-92870.firebaseapp.com",
  databaseURL: "https://imessage-clone-92870.firebaseio.com",
  projectId: "imessage-clone-92870",
  storageBucket: "imessage-clone-92870.appspot.com",
  messagingSenderId: "1022979831174",
  appId: "1:1022979831174:web:ca21e0d56fae660ae52807",
  measurementId: "G-SB5EQZ748X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
