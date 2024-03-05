<script lang="ts">
	import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import { Inline } from '$lib/components/layout/inline';
	import { Spread } from '$lib/components/layout/spread';
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { turnAccumulatedStore, turnsStore } from '$lib/stores/turns-store';
	import type { Turn } from '@prisma/client';
	import { Check, CreditCard, Home, PersonStanding } from 'lucide-svelte';

	let accumulatedData: {
		cardsBought: CivilizationAdvance[];
		cardsCost: number;
		cardsDiscount: number;
		astAdvance: number;
		calamities: string[];
	} = {
		cardsBought: [],
		cardsCost: 0,
		cardsDiscount: 0,
		astAdvance: 0,
		calamities: []
	};

	turnAccumulatedStore.subscribe((accumulatedTurns) => (accumulatedData = accumulatedTurns));

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

<h1>Turns:</h1>

<Accordion.Root class="w-full sm:max-w-[70%] py">
	{#each $turnsStore.sort((firstItem, secondItem) => firstItem.turnNumber - secondItem.turnNumber) as turn}
		<Accordion.Item value={turn.turnNumber.toString()}>
			<Accordion.Trigger class="hover:no-underline">
				<Spread class="px-2">
					<div>
						{turn.turnNumber}
					</div>
					<Inline gap="gap-x-0">
						<Home />
						: {turn.cities}
					</Inline>
					<Inline gap="gap-x-0">
						<PersonStanding />
						: {turn.people}
					</Inline>
					<Inline gap="gap-x-0">
						<CreditCard />
						: {turn.cardsBought.length}
					</Inline>

					<div class="w-6">
						{#if turn.isDone}
							<Check />
						{/if}
					</div>
				</Spread>
			</Accordion.Trigger>
			<Accordion.Content>
				<p>Ast advance: {turn.astAdvance}</p>
				<p>Cards cost: {turn.cardsCost}</p>
				<p>Cards discount: {turn.cardsDiscount}</p>
				<p>Cards:</p>
				{#each turn.cardsBought as cardName}
					<li>
						{cardName}
					</li>
				{/each}

				<div class="flex justify-end">
					<a href={`/home/${turn.id}`}>
						<Button type="button">Edit</Button>
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

<div class="absolute bottom-2 left-2">
	<Sheet.Root>
		<Sheet.Trigger>
			<Button>Stats</Button>
		</Sheet.Trigger>

		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Stats</Sheet.Title>
				<Sheet.Description>Accumulated stats for all played turns.</Sheet.Description>
			</Sheet.Header>
			<p>Victory Points</p>
			sum different cards
			<p>Ast advance</p>
			{accumulatedData.astAdvance}
			<p>Cards cost</p>
			{accumulatedData.cardsCost}
			<p>Accumulated discount</p>
			{accumulatedData.cardsDiscount}
			<p>Cards</p>
			{#each accumulatedData.cardsBought as card}
				<li>{card.name}</li>
			{/each}
		</Sheet.Content>
	</Sheet.Root>
</div>
