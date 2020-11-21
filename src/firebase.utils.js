import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCa3TMhvRTWvJ8D40LNYUiWpZrXZgJcc1c",
	authDomain: "ecommerce-app-845ec.firebaseapp.com",
	databaseURL: "https://ecommerce-app-845ec.firebaseio.com",
	projectId: "ecommerce-app-845ec",
	storageBucket: "ecommerce-app-845ec.appspot.com",
	messagingSenderId: "218051526881",
	appId: "1:218051526881:web:8e8a3d590de9a4602ef7a0",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
