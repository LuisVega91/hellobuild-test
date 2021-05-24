import firebase from './firebase-config';

const socialMediaAuth = (provider: firebase.auth.AuthProvider) => {
  return  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => res.user)
    .catch((err)=> err)
};


export default socialMediaAuth;
