<script lang="ts">
	import { Inline } from '$lib/components/layout/inline';
	import { Spread } from '$lib/components/layout/spread';
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Turn } from '@prisma/client';
	import { Check, Home, PersonStanding } from 'lucide-svelte';
	import { turnsStore } from '../turns-store';

	async function addTurn() {
		let turn: Turn;

		const response = await fetch('/api/turns', {
			method: 'POST',
			body: $turnsStore.length.toString()
		});

		turn = await response.json();

		turnsStore.set([...$turnsStore, turn]);
	}
</script>

<Accordion.Root class="w-full sm:max-w-[70%] py">
	{#each $turnsStore.sort((firstItem, secondItem) => firstItem.turnNumber - secondItem.turnNumber) as turn}
		<Accordion.Item value={turn.turnNumber.toString()}>
			<Accordion.Trigger class="hover:no-underline">
				<Spread class="px-2">
					<div>
						{turn.turnNumber}
					</div>
					<Inline gap="gap-x-0">
						<Home></Home>
						: {turn.cities}
					</Inline>
					<Inline gap="gap-x-0">
						<PersonStanding></PersonStanding>
						: {turn.people}
					</Inline>

					<div class="w-6">
						{#if turn.isTurnPlayed}
							<Check></Check>
						{/if}
					</div>
				</Spread>
			</Accordion.Trigger>
			<Accordion.Content>
				<p>People: {turn.people}</p>
				<p>Cities: {turn.cities}</p>
				<p>Ast advance: {turn.astAdvance}</p>
				<p>Cards bought: {turn.cardsBought.length}</p>
				<div class="flex justify-end">
					<a href={`/home/${turn.id}`}>
						<Button>Edit</Button>
					</a>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>

<div class="flex justify-center pt-4">
	{#if $turnsStore.length > 0}
		<Button on:click={addTurn}>Add turn</Button>
	{:else}
		<p>Select menu and create new</p>
	{/if}
</div>
