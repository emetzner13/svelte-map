import cookie from 'cookie';

export const POST = async () => {
	// const decodedToken = await decodeToken(token);

	return {
		headers: {
			'set-cookie': cookie.serialize('token', null, {
				path: '/',
				httpOnly: true
			})
			// location: '/login',
			// status: 303
		}
	};
};
