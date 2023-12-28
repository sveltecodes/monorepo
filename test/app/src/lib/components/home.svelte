<script lang="ts">
	import "../../../../../packages/form-manager/public/styles/app.css";
	import { Form, FormContainer, FormPasswordField, FormSelect, FormSwitch, FormTextField, email, minLength, FormTextarea } from "@svelte.codes/form-manager";

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
				validators: [minLength(3)],
				required: true
			},
			select: {
				name: "select"
			},
			switch: {
				name: "switch"
			},
			textarea: {
				name: "textarea"
			}
		}
	});

	$: errors = form.errors;
	$: values = form.values;
</script>

<FormContainer {form} classes="flex">
	<FormTextField name="email" manager={form} />
	<FormTextField name="firstName" manager={form} />
	<FormTextField name="lastName" manager={form} />
	<FormPasswordField name="password" manager={form} placeholder="Enter your password" />
	<FormSelect
		name="select"
		manager={form}
		placeholder="Select something"
		options={[
			{
				value: "FOO",
				label: "FOO"
			}
		]}
	/>
	<FormSwitch manager={form} name="switch" class="data-[state=checked]:bg-blue-600" />
	<FormTextarea manager={form} name="textarea" placeholder="Enter some text" />
	<button
		on:click={() => {
			form.submit();
			console.log("Errorrs", $errors);
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
