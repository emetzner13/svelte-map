import * as cookie from 'cookie';
import { decodeToken, getUser } from '$lib/server/firebase';

export const getSession = async (event) => {
	const locals = event.locals;
	const decodedToken = locals.decodedToken;

	if (decodedToken) {
		const { uid, email, approved } = decodedToken;
		return { user: { email: email || null, uid, approved } };
	} else {
		return { user: null };
	}
};

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.decodedToken = await decodeToken(cookies.token);

	if (event.locals.decodedToken)
		event.locals.decodedToken.approved = (await getUser(event.locals.decodedToken.uid)).approved;

	event.locals.decodedToken;
	const response = await resolve(event);

	return response;
};
