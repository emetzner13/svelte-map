<script context="module">
	export const load = async ({ session }) => {
		let { user } = session;
		if (user?.approved) return { redirect: '/', status: 308 };

		return { props: {} };
	};
</script>

<script>
	import AlertPage from '$components/AlertPage.svelte';
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
