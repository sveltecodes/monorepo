<script lang="ts">
	import "../../../../../packages/form-manager/public/styles/app.css";
	import { Form, FormContainer, FormPasswordField, FormSelect, FormSwitch, FormTextField, email, minLength, FormTextarea } from "@svelte.codes/form-manager";
	import ModalsManager from "./modals-manager.svelte";
	import { Dialog } from "bits-ui";

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
			},
			some: {
				name: "some",
				required: true
			}
		}
	});

	$: errors = form.errors;
	$: values = form.values;
</script>

<div>
	values: {JSON.stringify($values)}
</div>
<div>
	errors: {JSON.stringify($errors)}
</div>
<div />

<Dialog.Root>
	<Dialog.Trigger
		class="inline-flex h-12 items-center text-black
  justify-center whitespace-nowrap rounded-input bg-black px-[21px]
  text-[15px] font-semibold shadow-mini transition-colors hover:bg-dark/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
	>
		New API key
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay transitionConfig={{ duration: 150 }} class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
		<Dialog.Content class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-card-lg border bg-background p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full">
			<Dialog.Title class="flex w-full items-center justify-center text-lg font-semibold tracking-tight">Create API key</Dialog.Title>
			<Dialog.Description class="text-sm text-foreground-alt">Create and manage API keys. You can create multiple keys to organize your applications.</Dialog.Description>
			<FormContainer {form} classes="flex flex-col gap-2">
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

			<div class="flex w-full justify-end">
				<Dialog.Close
					class="inline-flex h-input items-center justify-center rounded-input bg-dark px-[50px] text-[15px] font-semibold text-background shadow-mini hover:bg-dark/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
				>
					Save
				</Dialog.Close>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
<ModalsManager />
