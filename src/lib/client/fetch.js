export const fetchHandler = async (url, token = null) => {
	await fetch(
		url,
		token && {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(token)
		}
	);

	return;
};
