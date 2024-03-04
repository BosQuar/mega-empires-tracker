<script lang="ts">
	import SiteHeader from '$lib/components/header/site-header.svelte';

	import { turnsStore } from '../../lib/stores/turns-store.js';

	export let data;

	let { user } = data;

	$: turnsStore.set(data.turns);
</script>

<SiteHeader name={user.username}></SiteHeader>

<div class=" container mx-auto py-4 lg:py-10 max-w-screen-xl px-2">
	<slot />
</div>
