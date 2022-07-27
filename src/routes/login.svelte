<script>
	import Input from '$components/form/Input.svelte';
	import Button from '../components/form/Button.svelte';
	import Form from '../components/form/Form.svelte';
</script>

<Form on:submit title="Login">
	<Input type="email" name="email" placeholder="Email Address" required />
	<Input type="password" name="password" placeholder="Password" required />
	<Button type="submit">Log in</Button>
</Form>
