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

<script>
	import { signOut } from '$lib/client/firebase';
	import { goto } from '$app/navigation';

	async function logOut() {
		await signOut();

		goto('/login');
		console.log('logged out');
	}
</script>

<h1>Welcome to the protected page</h1>

<button on:click={logOut}>Signout</button>

<style>
	h1 {
		color: white;
		font-size: 24px;
		box-shadow: none;
		width: max-content;
	}
</style>
