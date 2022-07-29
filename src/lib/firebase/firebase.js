// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_CLIENT_CONFIG } from '$env/static/private';
import { browser } from '$app/env';
import { userStore } from '../stores/user';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export let app;
export let db;
export let auth;

export const initializeFirebase = () => {
	if (!app) {
		app = initializeApp(JSON.parse(FIREBASE_CLIENT_CONFIG));
		db = getFirestore(app);
		auth = getAuth(app);
	}
};

export const saveDocument = async (docId, docData) => {
	await setDoc(doc(db, 'Users', docId), docData);

	doc._id = docId;

	return doc;
};

export const getDocument = async (docId) => {
	let docRef = doc(db, 'Users', docId);
	let docSnap = await getDoc(docRef);

	let docData = { _id: docSnap.id, ...docSnap.data() };

	return docData;
};

export const signUp = async (email, password) => {
	if (!browser) return;
	let userCredentials = await createUserWithEmailAndPassword(auth, email, password);

	let user = {
		email: email,
		approved: false,
		createdAt: serverTimestamp()
	};

	user = await saveDocument(userCredentials.user.uid, user);

	userStore.set(user);

	return user;
};

export const signIn = async (email, password) => {
	let userCredentials = await signInWithEmailAndPassword(auth, email, password);

	let user = await getDocument(userCredentials.user.uid);

	userStore.set(user);
	return user;
};
