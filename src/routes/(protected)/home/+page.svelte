<script lang="ts">
	import { type CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import {
		civilizationAdvancesVP1,
		civilizationAdvancesVP3,
		civilizationAdvancesVP6
	} from '$lib/civilizationAdvances/values';
	import { Inline } from '$lib/components/layout/inline';
	import { Spread } from '$lib/components/layout/spread';
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { cardsBoughtStore } from '$lib/stores/cards-bought-store';
	import { turnAccumulatedStore, turnsStore } from '$lib/stores/turns-store';
	import type { Turn } from '@prisma/client';
	import { Check, CreditCard, Home, PersonStanding } from 'lucide-svelte';

	let isAddningTurn = false;

	let accumliatedData: {
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

	$: victoryPointsTotal = accumliatedData.cardsBought.reduce(
		(acc, curr) => acc + curr.victoryPoints,
		0 + accumliatedData.astAdvance * 5
	);

	$: hasDuplicates = new Set($cardsBoughtStore).size !== $cardsBoughtStore.length;

	turnAccumulatedStore.subscribe((accumulatedTurns) => (accumliatedData = accumulatedTurns));

	async function addTurn() {
		let turn: Turn;
		isAddningTurn = true;

		const response = await fetch('/api/turns', {
			method: 'POST',
			body: $turnsStore.length.toString()
		});

		turn = await response.json();

		turnsStore.set([...$turnsStore, turn]);
		isAddningTurn = false;
	}
</script>

{#if hasDuplicates}
	<span class="text-red-500">
		You have bought the same card twice or more. Check bought cards in played turns and fix.</span
	>
{/if}

<h1>Turns:</h1>

<Accordion.Root class="w-flil sm:max-w-[70%] py">
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
		<Button disabled={isAddningTurn} on:click={addTurn}>Add turn</Button>
	{:else}
		<p>Select menu and create new</p>
	{/if}
</div>

<div class="absolute bottom-2 left-2">
	<Sheet.Root>
		<Sheet.Trigger>
			<Button>Stats</Button>
		</Sheet.Trigger>

		<Sheet.Content class="overflow-y-scroll">
			<Sheet.Header>
				<Sheet.Title>Stats</Sheet.Title>
				<Sheet.Description>Accumliated stats for all played turns.</Sheet.Description>
			</Sheet.Header>
			<p>Victory Points:</p>
			<li>
				{victoryPointsTotal}
			</li>
			<p>Ast advance:</p>
			<li>
				{accumliatedData.astAdvance}
			</li>
			<p>Cards cost:</p>
			<li>
				{accumliatedData.cardsCost}
				<span class="text-red-500">
					({accumliatedData.cardsCost - accumliatedData.cardsDiscount})</span
				>
			</li>
			<p>Total discount:</p>
			<li>
				{accumliatedData.cardsDiscount}
			</li>
			<p>Cards:</p>

			{@const vp1Cards = accumliatedData.cardsBought
				.filter((card) => civilizationAdvancesVP1.includes(card))
				.sort((a, b) => a.name.localeCompare(b.name))}
			{@const vp3Cards = accumliatedData.cardsBought
				.filter((card) => civilizationAdvancesVP3.includes(card))
				.sort((a, b) => a.name.localeCompare(b.name))}
			{@const vp6Cards = accumliatedData.cardsBought
				.filter((card) => civilizationAdvancesVP6.includes(card))
				.sort((a, b) => a.name.localeCompare(b.name))}
			{#if vp1Cards.length}
				<p>VP 1</p>
				{#each vp1Cards as card}
					<li>{card.name}</li>
				{/each}
			{/if}
			{#if vp3Cards.length}
				<p>VP 3</p>
				{#each vp3Cards as card}
					<li>{card.name}</li>
				{/each}
			{/if}
			{#if vp6Cards.length}
				<p>VP 6</p>
				{#each vp6Cards as card}
					<li>{card.name}</li>
				{/each}
			{/if}
		</Sheet.Content>
	</Sheet.Root>
</div>
