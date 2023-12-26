<script lang="ts">
	import { ModalInstance } from "@svelte.codes/modal-manager";

	export let instance: ModalInstance;
	console.log(instance);
</script>

<div class="bg-slate-300 p-10">
	<h1 class="text-3xl font-bold underline">this is inside a modal</h1>
	<button on:click={() => instance.manager.close(instance.config.name)}>close</button>
</div>
