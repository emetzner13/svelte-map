<script context="module">
	import { browser } from '$app/env';
	import { initializeFirebase } from '$lib/firebase/firebase';

	export const load = async () => {
		if (browser) {
			await initializeFirebase();
		}

		return {
			props: {}
		};
	};
</script>

<script>
	import './style.css';
</script>

<slot />
