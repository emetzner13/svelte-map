<script>
	import AlertPage from '$components/AlertPage.svelte';
</script>

<AlertPage>
	<h3 slot="phrase">Oops! Page not found</h3>
	<h1 slot="alert"><span>4</span><span>0</span><span>4</span></h1>
	<h2 slot="message">we are sorry, but the page you requested was not found</h2>
</AlertPage>
