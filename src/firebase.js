import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQwPwAG4j5ZhlKiaKmbaNKntJm-_JlZf4",
    authDomain: "corredor-de-propiedades.firebaseapp.com",
    projectId: "corredor-de-propiedades",
    storageBucket: "corredor-de-propiedades.appspot.com",
    messagingSenderId: "767911396482",
    appId: "1:767911396482:web:721bd9d49efe34c49ea09b"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = db.doc(`users/${user.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email } = user;
        const { displayName } = additionalData;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt: new Date(),
            });
        } catch (error) {
            console.log('Error in creating user', error);
        }
    }
};