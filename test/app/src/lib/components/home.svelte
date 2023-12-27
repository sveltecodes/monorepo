<script lang="ts">
	import { Form, FormContainer, FormPasswordField, FormSelect, FormTextField, email, minLength } from "@svelte.codes/form-manager";
	import "../../../../../packages/form-manager/public/styles/app.css";
	import type { ModalInstance } from "../../../../../packages/modal-manager/src/lib/modal-instance";

	export let instance: ModalInstance<any>;

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
			},
			selectCamera: {
				name: "select-camera",
				label: "select-camera"
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
	<FormPasswordField name="password" placeholder="Enter your password" manager={form} />
	<FormSelect
		options={[
			{
				label: "Camera 1",
				value: "Camera"
			},
			{
				label: "Camera 2",
				value: "Camera"
			}
		]}
		manager={form}
		name="selectCamera"
		placeholder="Select Camera"
	/>

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

<button on:click={() => instance.manager.close(instance.config.id)}>close</button>
