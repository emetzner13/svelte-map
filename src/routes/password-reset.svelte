<script>
	import Input from '$components/form/Input.svelte';
	import Button from '../components/form/Button.svelte';
	import Form from '../components/form/Form.svelte';
	import { resetPassword } from '$lib/client/firebase';

	let email;
	let loading = false;

	async function onSubmit() {
		loading = true;

		if (!email.includes('@')) {
			alert('Invalid fields');
			loading = false;

			return;
		}

		let message = await resetPassword(email);

		alert(message);
	}
</script>

<Form on:submit={onSubmit} title="Password Reset">
	<Input
		type="email"
		name="email"
		placeholder="Email Address"
		bind:value={email}
		disabled={loading}
		required
	/>

	<Button type="submit">Log in</Button>
</Form>
