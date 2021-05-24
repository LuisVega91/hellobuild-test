import { environment } from '../../../environments/environment';
import firebase from 'firebase';
// Initialize Firebase
firebase.initializeApp(environment.firebaseConfig);
firebase.analytics();

export default firebase;
