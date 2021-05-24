import firebase from './firebase-config';

const gitHubAuth = () => {
  return  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GithubAuthProvider())
};


export default gitHubAuth;
