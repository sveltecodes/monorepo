<script lang="ts">
	import { Form, FormContainer, FormTextField } from "@svelte.codes/form-manager";

	const form = new Form({
		name: "test",
		fields: {
			email: {
				name: "email",
				type: "email",
				label: "Email",
				placeholder: "Email"
			}
		}
	});
</script>

<FormContainer {form}>
	<FormTextField name="email" {form} />
	<FormTextField name="firstName" {form} />
	<FormTextField name="lastName" {form} />
	<button on:click={() => form.submit()}>Submit</button>
</FormContainer>
