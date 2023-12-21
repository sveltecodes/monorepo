<script lang="ts">
	import { ModalManager, modalManager } from "@svelte.codes/modal-manager";
	import TestComponent from "./test-component/test-component.svelte";
	// import Counter from "../../../../packages/modal-manager/src/lib/Counter.svelte";
	// console.log(ModalManager);
	// modalManager.open();
	// const asdf: ModalManager = new ModalManager();
	modalManager.open({
		id: "test",
		component: TestComponent
	});
</script>

