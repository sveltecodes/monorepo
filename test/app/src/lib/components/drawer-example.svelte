<script lang="ts">
  import { DrawerInstance } from './../../../../../packages/drawer/src/lib';

  interface Props {
    instance: DrawerInstance<any>;
    data: any;
  }

  let { instance, data }: Props = $props();

  console.log(instance);
  console.log(data);
</script>

<div class=" bg-slate-800">
  <h1>Hello from drawer example!</h1>
</div>
