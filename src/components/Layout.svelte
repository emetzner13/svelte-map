<script>
	import { signOut } from '$lib/client/firebase';
	export let user = null;
</script>

<header class="header">
	<nav class="header_navigation">
		<ul class="header_navigation-list">
			{#if !user}
				<li><a href="/signup">Request access</a></li>
				<li><a href="/password-reset">Forgot pasword</a></li>
			{/if}
			<li><a href="/signup">Account holders</a></li>
			{#if user}
				<li on:click={signOut}>Log out</li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<style>
	.header {
		width: 100%;
		height: 4rem;
		display: flex;
		align-items: center;
		padding: 0 1.5rem;
	}

	.header_navigation {
		flex-grow: 1;
	}

	.header_navigation-list {
		display: flex;
		gap: 2rem;
		justify-content: flex-end;
		list-style-type: none;
	}

	.header_navigation-list > li {
		color: #eee;
		font-size: 1.5rem;
		text-transform: uppercase;
		cursor: pointer;
	}

	.header_navigation-list > li > a {
		color: inherit;
		text-decoration: none;
	}

	@media only screen and (max-width: 480px) {
		.header_navigation-list {
			justify-content: center;
		}
	}
</style>
