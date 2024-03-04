<script lang="ts">
	import ModeToggle from '$lib/components/header/mode-toggle.svelte';
</script>

<div class="container relative h-full flex-col items-center justify-center grid px-2">
	<div class="container absolute top-0 gap-x-2 h-14 items-center flex justify-end">
		<ModeToggle></ModeToggle>
	</div>
	<slot />
</div>
<!-- TODO: Byt bild och ny text -->
