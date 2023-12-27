<script lang="ts">
	import { ModalManager } from "@svelte.codes/modal-manager";
	import "./app.pcss";
	import Home from "./lib/components/home.svelte";

	const manager = new ModalManager();

	manager.open({
		id: "test",
		component: Home
	});
</script>

<div class="absolute top-0 left-0 right-0 bottom-0 bg-black p-20 text-gray-600">app.svelte here</div>
