<script>
	export let type = 'button';
	export let disabled = false;
</script>

<button {type} {disabled}><slot /></button>

<style>
	button {
		background-color: var(--color-primary);
		color: var(--color-gray-3);
		font-family: inherit;
		font-weight: 700;
		border: none;
		border-radius: 6px;
		padding: 8px 16px 10px 16px;
		font-size: 17px;
		cursor: pointer;
		margin: 20px 0;
	}

	button:disabled {
		cursor: not-allowed;
	}
</style>
