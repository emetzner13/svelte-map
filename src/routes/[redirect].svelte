<script context="module">
	import { userStore } from '$lib/stores/user';

	export const load = async ({ params }) => {
		const { redirect } = params;
		if (redirect === 'thanks' || redirect === 'not-allowed') {
			return {};
		}

		return {
			status: 401,
			error: 'You are not authorized to access this page until your account approval'
		};
	};
</script>

<script>
	import { goto } from '$app/navigation';
</script>

<h1>Access Denied</h1>

<p>
	Please sign in to access this page or if you are signed in, please for the account to be approved
</p>
<button
	on:click={() => {
		goto('/');
	}}>Home page</button
>

<style>
	h1 {
		color: white;
		font-size: 2em;
		font-weight: bold;
		margin-bottom: 0.5em;
	}
	p {
		margin-bottom: 1em;
	}
</style>
