import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBd60-uwes3-qQCx3XI0KjN4AXl0NsVp1s",
  authDomain: "technicaltests-b3a1a.firebaseapp.com",
  projectId: "technicaltests-b3a1a",
  storageBucket: "technicaltests-b3a1a.appspot.com",
  messagingSenderId: "4308301183",
  appId: "1:4308301183:web:2df1c3e5cc99d55ee2964a",
  measurementId: "G-X3ZFQLSDJR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;