<script lang="ts">
	import { ModalInstance } from "@svelte.codes/modal-manager";

	interface Props {
		instance: ModalInstance<any>;
	}

	let { instance }: Props = $props();
</script>

<div class="bg-slate-300 p-10">
	<h1 class="text-3xl font-bold underline">this is inside a modal</h1>
	<button onclick={() => instance.manager.close(instance.config.id)}>close</button>
</div>
