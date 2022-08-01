import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

function initializeFirebase() {
	if (admin.apps.length === 0) {
		admin.initializeApp({
			credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)),
			databaseURL: 'https://svelte-9ebdc.firebaseio.com'
		});
	}
}

export async function decodeToken(token) {
	if (!token || token === 'null' || token === 'undefined') return null;
	try {
		initializeFirebase();

		const decodedToken = await admin.auth().verifyIdToken(token);

		return decodedToken;
	} catch (err) {
		return err;
	}
}

export async function getUser(uid) {
	let userSnap = await admin.firestore().collection('Users').doc(uid).get();
	return userSnap.data();
}
