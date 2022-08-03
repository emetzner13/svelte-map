<script context="module">
	export const load = async ({ stuff }) => {
		let { user } = stuff;
		if (!user.approved) {
			return { redirect: '/access-denied', status: 302 };
		}

		return {
			props: {
				user: user
			}
		};
	};
</script>

<h1>Welcome to the protected page</h1>

<style>
	h1 {
		color: white;
		font-size: 2rem;
		text-transform: uppercase;
		box-shadow: none;
		width: max-content;
		margin: 0 auto;
	}
</style>
