<script lang="ts">
	import '$lib/styles/app.scss';
	import '$lib/styles/reset.scss';
	import '$lib/styles/tailwind.css';
	import 'leaflet/dist/leaflet.css';

	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<div class="app-wrapper">
	<slot />
</div>

<style>
	.app-wrapper {
		height: inherit;
		overflow: auto;
	}
</style>
