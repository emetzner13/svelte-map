<script>
	export let type = 'text';
	export let name = 'name';
	export let placeholder = null;
	export let required = null;
</script>

<input {type} {placeholder} {name} {required} />

<style>
	input {
		color: var(--color-secondary);
		font-family: inherit;
		font-weight: 500;
		border: none;
		border-radius: 6px;
		padding: 10px 16px;
		font-size: 17px;
		background-color: var(--color-gray-1);
	}

	input:focus {
		outline: none;
	}
</style>
