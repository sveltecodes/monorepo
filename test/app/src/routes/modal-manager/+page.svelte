<script lang="ts">
	import { ModalManager } from "@svelte.codes/modal-manager";
	import TestComponent from "../../lib/components/test-component.svelte";

	const manager = new ModalManager();

	manager.open({
		name: "test",
		component: TestComponent,
		classes: "bg-slate-300/50 p-10"
	});
</script>

Modal manager
