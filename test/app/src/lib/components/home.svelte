<!-- <script lang="ts">
  import { Form, maxLength, minLength } from '@svelte.codes/forms';
  import { onMount } from 'svelte';
  import { DrawerManager } from './../../../../../packages/drawer/src/lib';
  import DrawerExample from './drawer-example.svelte';

  const drawerManager = new DrawerManager();

  onMount(() => {
    drawerManager.open({
      id: 'test',
      component: DrawerExample,
      placement: 'bottom',
      data: {
        foo: 'bar'
      }
    });
  });

  const form = new Form({
    controls: [
      {
        name: 'name',
        placeholder: 'Enter your email address..',
        validators: [minLength(1)],
        value: 123
      },
      {
        name: 'email',
        placeholder: 'Enter your email address..',
        validators: [minLength(3), maxLength(5)]
      },
      {
        name: 'switch',
        placeholder: 'Switch me..'
      }
    ]
  });

  // form.addControl({
  //   name: 'description',
  //   placeholder: 'Enter your description..'
  // });

  const options = [
    {
      label: 'Option 2',
      value: {
        foo: 'bar',
        me: 'option 2'
      }
    },
    { label: 'Option disabled', value: 'option1', disabled: true },

    {
      label: 'Option 3',
      value: 'option 3'
    }
  ];

  form.addControl({
    name: 'options',
    placeholder: 'Select an option..',
    data: options
  });

  let valid = $derived(form.valid);
  let pristine = $derived(form.pristine);
  let changed = $derived(form.changed);

  form.valid.subscribe((valid) => {
    console.log(valid);
  });
</script> -->

<!-- <div class="flex w-96 flex-col gap-2 p-4">
  <ControlContainer label="Name" description="Name all the things.">
    <Input control={form.getControl('name')} />
  </ControlContainer>
  <ControlContainer label="Name">
    <Input control={form.getControl('email')} />
  </ControlContainer>

  <Select control={form.getControl('options')} selected={options[1]} class="w-96" />
  <Switch control={form.getControl('switch')} />
</div>
<button
  class="rounded-md bg-blue-500 px-4 py-1 text-white disabled:bg-slate-500"
  disabled={!$valid}
  onclick={() => {
    form
      .getValues()
      .subscribe((values) => {
        console.log(values);
      })
      .unsubscribe();
  }}>Submit</button>

<div>changed: {JSON.stringify($changed)}</div> -->
