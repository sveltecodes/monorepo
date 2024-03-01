<script lang="ts">
  import { Form, FormContainer, FormTextField, email, minLength } from '@svelte.codes/form-manager';
  import { Dialog } from 'bits-ui';
  import '../../../../../packages/form-manager/public/styles/app.css';
  import ModalsManager from './modals-manager.svelte';

  const form = new Form({
    name: 'test',
    fields: {
      email: {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        validators: [email]
      },
      firstName: {
        name: 'firstName',
        label: 'firstName',
        placeholder: 'firstName',
        validators: [minLength(3)]
      },
      lastName: {
        name: 'lastName',
        label: 'lastName',
        placeholder: 'lastName'
      },
      password: {
        name: 'password',
        label: 'password',
        placeholder: 'password',
        validators: [minLength(3)],
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

<FormContainer
  onSubmit={(e) => {
    e.preventDefault();
    console.log('values', form.submit());
  }}
  {form}
  classes="flex flex-col gap-2">
  <FormTextField name="email" manager={form} placeholder="Email" value="initial@value.com" />
  <button
    on:click={() => {
      console.log('errors', $errors);
    }}>Submit</button>
</FormContainer>

<Dialog.Root>
  <Dialog.Trigger
    class="rounded-input shadow-mini hover:bg-dark/95 focus-visible:ring-foreground
  focus-visible:ring-offset-background active:scale-98 inline-flex h-12 items-center
  justify-center whitespace-nowrap bg-black px-[21px] text-[15px] font-semibold text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
    New API key
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay transitionConfig={{ duration: 150 }} class="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm" />
    <Dialog.Content class="rounded-card-lg bg-background shadow-popover fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] border p-5 outline-none sm:max-w-[490px] md:w-full">
      <Dialog.Title class="flex w-full items-center justify-center text-lg font-semibold tracking-tight">Create API key</Dialog.Title>
      <Dialog.Description class="text-foreground-alt text-sm">Create and manage API keys. You can create multiple keys to organize your applications.</Dialog.Description>
      <div class="flex w-full justify-end">
        <Dialog.Close class="h-input rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 focus-visible:ring-dark focus-visible:ring-offset-background active:scale-98 inline-flex items-center justify-center px-[50px] text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">Save</Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
<ModalsManager />
