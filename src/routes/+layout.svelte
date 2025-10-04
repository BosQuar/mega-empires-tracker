<script lang="ts">
	import SiteHeader from '$lib/components/header/site-header.svelte';
	import { turnsStore, type Turn } from '$lib/stores/turns-store';
	import '$lib/styles/app.scss';
	import '$lib/styles/reset.scss';
	import '$lib/styles/tailwind.css';

	import { ModeWatcher } from 'mode-watcher';

	let turns: Turn[] = [];

	const storage = localStorage.getItem('empires_turns');

	if (storage && Array.isArray(JSON.parse(storage))) {
		turns = JSON.parse(storage) as Turn[];
	}

	$: turnsStore.set(turns);
</script>

<ModeWatcher />
<SiteHeader />

<div class="app-wrapper">
	<div class=" container mx-auto py-4 lg:py-10 max-w-screen-xl px-2">
		<slot />
	</div>
</div>

<style>
	.app-wrapper {
		height: inherit;
		overflow: auto;
	}
</style>
