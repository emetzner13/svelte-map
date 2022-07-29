<script context="module">
	import { userStore } from '$lib/stores/user';

	export const load = async () => {
		let user = null;

		userStore.subscribe((currentUser) => (user = currentUser));

		if (user === null) {
			return {
				status: 307,
				redirect: '/not-allowed'
			};
		}

		return {
			props: {
				user: user
			}
		};
	};
</script>

<script>
	export let user;

	console.log(user);
</script>

<h1>Welcome to the protected page</h1>

<style>
	h1 {
		color: white;
		font-size: 24px;
		box-shadow: none;
		width: max-content;
	}
</style>
