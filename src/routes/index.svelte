<script>
	import Input from '$components/form/Input.svelte';
	import Button from '../components/form/Button.svelte';
	import Form from '../components/form/Form.svelte';

	function onSubmit() {
		alert('submitted');
	}
</script>

<Form on:submit={onSubmit} title="Request Access">
	<Input type="email" name="email" placeholder="Email Address" required />
	<Input type="password" name="password" placeholder="Password" required />
	<Input type="password" name="password" placeholder="Confirm Password" required />
	<Button type="submit">Request Access</Button>
</Form>
