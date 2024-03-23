<script lang="ts">
  import { Form, FormContainer, FormSwitch, FormTextField, email, minLength } from '@svelte.codes/form-manager';
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
      switch: {
        name: 'switch',
        label: 'switch',
        placeholder: 'switch'
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
  <FormSwitch name="switch" manager={form} class="bg-gray-100"></FormSwitch>

  <button
    on:click={() => {
      console.log('errors', $errors);
    }}>Submit</button>
</FormContainer>

<ModalsManager />
