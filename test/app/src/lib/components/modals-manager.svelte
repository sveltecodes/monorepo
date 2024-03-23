<script lang="ts">
  import { ModalManager } from '@svelte.codes/modal-manager';
  import TestComponent from './test-component.svelte';

  const manager = new ModalManager();

  manager.open({
    component: TestComponent,
    classes: 'bg-slate-300/50 p-10',
    id: 'test',
    closeIcon: true
  });

  manager.hide('test');
  setTimeout(() => {
    manager.show('test');
  }, 3000);
</script>

I'm inside a modal via modal manager!
