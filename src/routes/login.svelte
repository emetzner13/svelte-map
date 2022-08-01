<script context="module">
	export const load = async ({ stuff }) => {
		let { user } = stuff;

		if (user) {
			return {
				redirect: '/',
				status: 302
			};
		}

		return {
			props: {}
		};
	};
</script>

<script>
	import Input from '$components/form/Input.svelte';
	import Button from '../components/form/Button.svelte';
	import Form from '../components/form/Form.svelte';
	import { signIn } from '$lib/client/firebase';
	import { goto } from '$app/navigation';

	let email = '',
		password = '',
		loading = false;

	let errorMsg = {
		'auth/user-not-found': "Email doesn't exist",
		'auth/wrong-password': 'Password is incorrect'
	};

	async function onSubmit() {
		loading = true;

		if (!email.includes('@') || password.trim().length === '' || password.trim().length < 6) {
			alert('Invalid fields');
			loading = false;

			return;
		}

		try {
			await signIn(email, password);
		} catch (error) {
			console.log(error);
			alert(errorMsg[error.code] || 'Something went wrong');

			loading = false;
			return;
		}

		goto('/');

		loading = false;
	}
</script>

<Form on:submit={onSubmit} title="Login">
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
	<Button type="submit">Log in</Button>
</Form>
