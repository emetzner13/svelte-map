<script context="module">
	import { browser } from '$app/env';
	import { initializeFirebase } from '$lib/client/firebase';
	import { protectedPages } from '$lib/client/constants';

	export const load = async ({ session, url }) => {
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

		return {};
	};
</script>

<script>
	import './style.css';
	import Layout from '$components/Layout.svelte';
</script>

<Layout>
	<slot />
</Layout>
