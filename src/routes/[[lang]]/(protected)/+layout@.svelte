<script lang="ts">
	import SiteHeader from '$lib/components/header/site-header.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { turnsStore } from './turns-store.js';

	export let data;

	let { user } = data;

	$: turnsStore.set(data.turns);
</script>

<SiteHeader name={user.username}></SiteHeader>

<div class=" container mx-auto py-4 lg:py-10 max-w-screen-xl px-2">
	<slot />
</div>

<div class="absolute bottom-2 left-2">
	<Sheet.Root>
		<Sheet.Trigger>
			<Button>Stats</Button>
		</Sheet.Trigger>

		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
				<Sheet.Description>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</Sheet.Description>
			</Sheet.Header>
		</Sheet.Content>
	</Sheet.Root>
</div>
