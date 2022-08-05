import * as cookie from 'cookie';
import { decodeToken } from '$lib/server/firebase';

export const getSession = async (event) => {
	let locals = event.locals;
	let decodedToken = locals.decodedToken;

	if (decodedToken) {
		let { uid, name, email } = decodedToken;
		return { user: { name, uid, email } };
	} else {
		return { user: null };
	}
};

export const handle = async ({ event, resolve }) => {
	let cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.decodedToken = await decodeToken(cookies.token);
	const response = await resolve(event);

	return response;
};
