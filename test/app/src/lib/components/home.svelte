<script lang="ts">
	import { Form, FormContainer, FormPasswordField, FormTextField, email, minLength, FormSelect } from "@svelte.codes/form-manager";

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

	$: errors = form.errors;
	$: values = form.values;
</script>

<FormContainer {form} classes="flex flex-col gap-2 max-w-2xl">
	<FormTextField name="email" manager={form} placeholder="email" class="bg-blue-600" />
	<FormTextField name="firstName" manager={form} placeholder="First name" />
	<FormTextField placeholder="LAst name" name="lastName" manager={form} />
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
	errors: {JSON.stringify($errors)}
</div>
<div />
