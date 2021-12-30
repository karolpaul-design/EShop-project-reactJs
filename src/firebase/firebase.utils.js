import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import { ProviderId } from "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAHkoAfMecT39wTerUFwCkpXbJakV_7hYw",
  authDomain: "crwn-db-e868d.firebaseapp.com",
  projectId: "crwn-db-e868d",
  storageBucket: "crwn-db-e868d.appspot.com",
  messagingSenderId: "102138251093",
  appId: "1:102138251093:web:ec61c8d7afe17b8b2691dc",
  measurementId: "G-N1RVWRKN23",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
