<script context="module">
	export const load = async ({ session }) => {
		let { user } = session;
		// if (!user) return { status: 401 };
		if (user?.approved) return { redirect: '/', status: 308 };

		return { props: {} };
	};
</script>

<script>
	import AlertPage from '$components/AlertPage.svelte';
	import { signOut } from '$lib/client/firebase';
	import { goto } from '$app/navigation';

	async function logOut() {
		signOut();

		goto('/login');
	}
</script>

<AlertPage>
	<h3 slot="phrase">It's Svelte Map</h3>
	<h1 slot="alert">
		{#each 'Sorry' as letter}
			<span>{letter}</span>
		{/each}
	</h1>
	<h2 slot="message">Kindly wait for us to approve your account</h2>
</AlertPage>
