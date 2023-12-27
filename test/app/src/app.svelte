<script lang="ts">
	import { ModalManager } from "@svelte.codes/modal-manager";
	import "./app.pcss";
	import Home from "./lib/components/home.svelte";
	import ModalsManager from "./lib/components/modals-manager.svelte";

	const manager = new ModalManager();

	manager.open({
		name: "test",
		component: Home
	});
</script>

<ModalsManager />
