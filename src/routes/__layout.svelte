<script context="module">
	import { browser } from '$app/env';
	import { initializeFirebase } from '$lib/client/firebase';
	import { protectedPages } from '$lib/client/constants';

	export const load = async ({ session, url }) => {
		// let response = await fetch('/api/token');
		// let { user } = await response.json();
		if (!session.user && protectedPages.has(url.pathname)) {
			return { redirect: '/login', status: 302 };
		}

		if (browser) {
			try {
				initializeFirebase();
			} catch (ex) {
				console.error(ex);
			}
		}
		return {
			// stuff: { user },
			// props: { user }
		};
	};
</script>

<script>
	import './style.css';
	import Layout from '$components/Layout.svelte';
</script>

<Layout>
	<slot />
</Layout>
