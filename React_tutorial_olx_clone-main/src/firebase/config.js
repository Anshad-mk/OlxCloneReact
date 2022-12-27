import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9RhDcIe9mzuGI_MVJ7i01h8pDRlmr_G8",
  authDomain: "olxclone-49204.firebaseapp.com",
  projectId: "olxclone-49204",
  storageBucket: "olxclone-49204.appspot.com",
  messagingSenderId: "140960923258",
  appId: "1:140960923258:web:ec3cdc86ff6cf8dcfbc5c3",
  measurementId: "G-C9HHQQ1E6T"
};




  export default firebase.initializeApp(firebaseConfig);

