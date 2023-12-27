<script lang="ts">
	import { Form, FormContainer, FormTextField, email, minLength, FormPasswordField } from "@svelte.codes/form-manager";

	const form = new Form({
		name: "test",
		fields: {
			email: {
				name: "email",
				label: "Email",
				placeholder: "Email",
				validators: [email]
			},
			firstName: {
				name: "firstName",
				label: "firstName",
				placeholder: "firstName",
				validators: [minLength(3)]
			},
			lastName: {
				name: "lastName",
				label: "lastName",
				placeholder: "lastName"
			},
			password: {
				name: "password",
				label: "password",
				placeholder: "password",
				validators: [minLength(3)]
			}
		}
	});

	$: errors = form.fields.email.errors;
	$: values = form.values;
</script>

<FormContainer {form} classes="flex">
	<FormTextField name="email" {form} />
	<FormTextField name="firstName" {form} />
	<FormTextField name="lastName" {form} />
	<FormPasswordField name="password" {form} placeholder="Enter your password" />
	<button
		on:click={() => {
			const result = form.submit();
			console.log(result);
		}}>Submit</button
	>
</FormContainer>

<div>
	values: {JSON.stringify($values)}
</div>
<div>
	errors: {$errors?.join(", ")}
</div>
<div />
