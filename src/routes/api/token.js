import cookie from 'cookie';

export const POST = async ({ request }) => {
	const { token } = await request.json();

	return {
		headers: {
			'set-cookie': cookie.serialize('token', token, {
				path: '/',
				httpOnly: true
			})
		}
	};
};
