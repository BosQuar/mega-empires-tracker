<script lang="ts">
	import { CivilizationAdvances, type CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import {
		civilizationAdvancesVP1,
		civilizationAdvancesVP3,
		civilizationAdvancesVP6
	} from '$lib/civilizationAdvances/values';
	import { Inline } from '$lib/components/layout/inline';
	import { Spread } from '$lib/components/layout/spread';
	import { Stack } from '$lib/components/layout/stack';
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import { cardsBoughtStore } from '$lib/stores/cards-bought-store';
	import { extraBonusStore } from '$lib/stores/discount-store';
	import { turnAccumulatedStore, turnsStore } from '$lib/stores/turns-store';
	import type { Turn } from '@prisma/client';
	import { Check, CreditCard, Home, PersonStanding } from 'lucide-svelte';

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
		0
	);

	// Fix presistence!
	let showWrittenRecordsInputs = false;
	let showMonumentInputs = false;

	let monumentRed = '0';
	let monumentGreen = '0';
	let monumentBlue = '0';
	let monumentOrange = '0';
	let monumentYellow = '0';
	let writtenRecordRed = '0';
	let writtenRecordGreen = '0';
	let writtenRecordBlue = '0';
	let writtenRecordOrange = '0';
	let writtenRecordYellow = '0';

	function parseStringNumber(stringNumber: string) {
		return parseInt(stringNumber, 10) ? parseInt(stringNumber, 10) : 0;
	}

	$: monumentAndWrittenRecordBonus = {
		red: parseStringNumber(writtenRecordRed) + parseStringNumber(monumentRed),
		green: parseStringNumber(writtenRecordGreen) + parseStringNumber(monumentGreen),
		blue: parseStringNumber(writtenRecordBlue) + parseStringNumber(monumentBlue),
		orange: parseStringNumber(writtenRecordOrange) + parseStringNumber(monumentOrange),
		yellow: parseStringNumber(writtenRecordYellow) + parseStringNumber(monumentYellow)
	};

	$: console.log(monumentAndWrittenRecordBonus);
	$: extraBonusStore.set(monumentAndWrittenRecordBonus);

	turnAccumulatedStore.subscribe((accumulatedTurns) => (accumliatedData = accumulatedTurns));

	async function addTurn() {
		let turn: Turn;

		const response = await fetch('/api/turns', {
			method: 'POST',
			body: $turnsStore.length.toString()
		});

		turn = await response.json();

		turnsStore.set([...$turnsStore, turn]);
	}

	$: hasWrittenRecords = $cardsBoughtStore.find(
		(cardName) => cardName === CivilizationAdvances.Written_Record
	);
	$: hasMonument = $cardsBoughtStore.find((cardName) => cardName === CivilizationAdvances.Monument);
</script>

{#if hasWrittenRecords}
	<Spread class="py-2">
		<p>
			{CivilizationAdvances.Written_Record}
		</p>
		<Switch bind:checked={showWrittenRecordsInputs}></Switch>
	</Spread>

	{#if showWrittenRecordsInputs}
		<p class="text-sm text-muted-foreground">
			Acquire 10 additional points of credit tokens in any combination of colors (5 or 10)
		</p>
		<Spread>
			<Stack>
				<span class="text-green-500"> Green</span>
				<Input bind:value={writtenRecordGreen} />
			</Stack>
			<Stack>
				<span class="text-blue-500"> Blue</span>
				<Input bind:value={writtenRecordBlue} />
			</Stack>
			<Stack>
				<span class="text-orange-500"> Orange</span>
				<Input bind:value={writtenRecordOrange} />
			</Stack>
			<Stack>
				<span class="text-yellow-500"> Yellow</span>
				<Input bind:value={writtenRecordYellow} />
			</Stack>
			<Stack>
				<span class="text-red-500"> Red</span>
				<Input bind:value={writtenRecordRed} />
			</Stack>
		</Spread>
	{/if}
{/if}

{#if hasMonument}
	<Spread class="py-2">
		<p>
			{CivilizationAdvances.Monument}
		</p>
		<Switch bind:checked={showMonumentInputs}></Switch>
	</Spread>
	{#if showMonumentInputs}
		<p class="text-sm text-muted-foreground">
			Acquire 20 additional points of credit tokens in any combination of colors (5,10,15 or 20)
		</p>
		<Spread>
			<Stack>
				<span class="text-green-500"> Green</span>
				<Input bind:value={monumentGreen} />
			</Stack>
			<Stack>
				<span class="text-blue-500"> Blue</span>
				<Input bind:value={monumentBlue} />
			</Stack>
			<Stack>
				<span class="text-orange-500"> Orange</span>
				<Input bind:value={monumentOrange} />
			</Stack>
			<Stack>
				<span class="text-yellow-500"> Yellow</span>
				<Input bind:value={monumentYellow} />
			</Stack>
			<Stack>
				<span class="text-red-500"> Red</span>
				<Input bind:value={monumentRed} />
			</Stack>
		</Spread>
	{/if}
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
