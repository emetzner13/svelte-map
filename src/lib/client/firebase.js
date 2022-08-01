// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as _signOut
} from 'firebase/auth';
import { FIREBASE_CLIENT_CONFIG } from '$env/static/private';
import { browser } from '$app/env';
import { userStore } from '../stores/user';
import { fetchHandler } from './fetch';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export let app;
export let db;
export let auth;

export const initializeFirebase = () => {
	if (getApps().length !== 0) return;
	app = initializeApp(JSON.parse(FIREBASE_CLIENT_CONFIG));
	db = getFirestore(app);
	auth = getAuth(app);
};

export const saveDocument = async (docId, docData) => {
	await setDoc(doc(db, 'Users', docId), docData);

	docData._id = docId;

	return docData;
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

	await fetchHandler('/api/token', { token: userCredentials._tokenResponse.idToken });

	userStore.set(user);

	return user;
};

export const signIn = async (email, password) => {
	let userCredentials = await signInWithEmailAndPassword(auth, email, password);

	let user = await getDocument(userCredentials.user.uid);

	await fetchHandler('/api/token', { token: userCredentials._tokenResponse.idToken });
	userStore.set(user);

	return user;
};

export async function signOut() {
	const auth = getAuth(app);
	await _signOut(auth);
	await fetchHandler('/api/logout', { token: null });
}
