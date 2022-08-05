import cookie from 'cookie';
// import { decodeToken, getUser } from '../../lib/server/firebase';

export const POST = async ({ request }) => {
	const { token } = await request.json();

	// if (!token) {
	// 	return {
	// 		headers: {
	// 			'set-cookie': cookie.serialize('token', null, {
	// 				path: '/',
	// 				httpOnly: true
	// 			})
	// 		}
	// 	};
	// }

	return {
		headers: {
			'set-cookie': cookie.serialize('token', token, {
				path: '/',
				httpOnly: true
			})
		}
	};
};

// export const GET = async ({ request }) => {
// 	const cookies = cookie.parse(request.headers.get('cookie') || '');
// 	let token = cookies.token;
// 	if (!token) return { status: 401 };

// 	let decodedToken = await decodeToken(token);
// 	if (!decodedToken) return { status: 401 };
// 	if (decodedToken?.errorInfo?.code === 'auth/id-token-expired') return { status: 401 };

// 	let userData;
// 	try {
// 		userData = await getUser(decodedToken.uid);
// 	} catch (error) {
// 		return { status: 401 };
// 	}

// 	return {
// 		body: {
// 			user: userData
// 		}
// 	};
// };
