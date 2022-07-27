<form on:submit|preventDefault>
	<h1>Request Access</h1>
	<slot />
</form>

<style>
	form {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 370px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 10px 40px;
		border-radius: 8px;
		background-color: var(--color-gray-2);
	}

	form h1 {
		color: #eee;
		font-size: 30px;
		font-weight: 600;
		margin: 20px 0;
	}

	@media only screen and (max-width: 414px) {
		form {
			width: 95%;
			padding: 8px 30px;
		}
	}
</style>
