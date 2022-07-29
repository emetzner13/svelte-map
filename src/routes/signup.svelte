<script>
	import Input from '$components/form/Input.svelte';
	import Button from '../components/form/Button.svelte';
	import Form from '../components/form/Form.svelte';
	import { signUp } from '$lib/firebase/firebase';
	import { goto } from '$app/navigation';

	let email = '',
		password = '',
		confirmPassword = '',
		loading = false;

	let errorMsg = {
		'auth/email-already-in-use': 'Email already in use.'
	};

	async function onSubmit() {
		loading = true;
		if (!email.includes('@') || password.trim().length === '' || password.trim().length < 6) {
			alert('Please fill in all fields');
			loading = false;

			return;
		}

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			loading = false;

			return;
		}

		try {
			await signUp(email, password);
		} catch (error) {
			alert(errorMsg[error.code] || 'Something went wrong');

			loading = false;
			return;
		}

		goto('/');
		loading = false;
	}
</script>

<Form on:submit={onSubmit} title="Request Access">
	<Input
		type="email"
		name="email"
		placeholder="Email Address"
		bind:value={email}
		disabled={loading}
		required
	/>
	<Input
		type="password"
		name="password"
		placeholder="Password"
		bind:value={password}
		disabled={loading}
		required
	/>
	<Input
		type="password"
		name="password"
		placeholder="Confirm Password"
		bind:value={confirmPassword}
		disabled={loading}
		required
	/>
	<Button type="submit" disabled={loading}>Request Access</Button>
</Form>
