// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
declare namespace svelteHTML {
	// enhance elements
	interface IntrinsicElements {
		"my-custom-element": { someattribute: string; "on:event": (e: CustomEvent<string>) => void };
	}
	// enhance attributes
	interface HTMLAttributes<T> {
		// If you want to use on:beforeinstallprompt
		"on:externalClickEvent"?: (event: PointerEvent) => void;
		// If you want to use myCustomAttribute={..} (note: all lowercase)
		// mycustomattribute?: any; // You can replace any with something more specific if you like
	}
}
export {};
