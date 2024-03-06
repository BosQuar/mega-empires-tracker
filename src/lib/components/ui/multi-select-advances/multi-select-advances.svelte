<script lang="ts">
	import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import {
		civilizationAdvancesVP1,
		civilizationAdvancesVP3,
		civilizationAdvancesVP6
	} from '$lib/civilizationAdvances/values';
	import Inline from '$lib/components/layout/inline/inline.svelte';
	import { Stack } from '$lib/components/layout/stack';
	import { discountByTurnStore } from '$lib/stores/discount-store';
	import { turnsStore } from '$lib/stores/turns-store';
	import { cn } from '$lib/utils';
	import { X } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Badge } from '../badge';
	import * as Command from '../command';
	import ListItem from './list-item.svelte';

	export let placeholder = 'Type to search by name...';
	export let disabled = false;
	export let items: CivilizationAdvance[] = [];
	export let selectedItemsNames: string[] = [];
	export let id = '';
	export let turnNumber: number;

	const dispatchSelectedItemsNames =
		createEventDispatcher<Record<'selectedItemsNames', string[]>>();
	const dispatchCostAndDiscount =
		createEventDispatcher<Record<'costAndDiscount', { cost: number; discount: number }>>();
	let localItems: CivilizationAdvance[] = JSON.parse(JSON.stringify(items));

	const referenceItems = items;
	const isReferenceItem = (value: string) =>
		referenceItems.some(
			(referenceItem) => referenceItem.name.toLowerCase() === value.toLowerCase()
		);

	let value = '';
	let showList = false;
	let isFocused = false;

	$: dispatchSelectedItemsNames('selectedItemsNames', selectedItemsNames);
	$: items = items.filter(
		(item) =>
			isReferenceItem(item.name) &&
			!selectedItemsNames.some(
				(selectedItem) => selectedItem.toLowerCase() === item.name.toLowerCase()
			)
	);

	$: selectedItems = selectedItemsNames.map(
		(name) => localItems.filter((item) => item.name === name)[0]
	);

	$: {
		let cost = 0;
		let discount = 0;
		selectedItems.forEach((card) => {
			let discountedCost = getDiscountedCost(card, turnNumber);
			cost += discountedCost;
			discount += card.cost - discountedCost;
		});
		dispatchCostAndDiscount('costAndDiscount', { cost, discount });
	}
	$: value.length > 0 ? setShowList(true) : setShowList(false);

	function removeItem(value: string) {
		selectedItemsNames = selectedItemsNames.filter(
			(item) => item.toLowerCase() !== value.toLowerCase()
		);
		const newValues = isReferenceItem(value)
			? [...items, ...referenceItems.filter((item) => item.name === value)]
			: items;
		items = newValues.sort();
	}

	function addItem(item: CivilizationAdvance): void {
		selectedItemsNames = [...selectedItemsNames, item.name];
		setShowList(false);
		value = '';
	}

	function setShowList(show: boolean) {
		showList = show;
	}

	function setIsFocused(focused: boolean) {
		isFocused = focused;
	}

	function openListByKey(keyboardEvent: KeyboardEvent & { currentTarget: EventTarget & Window }) {
		if (keyboardEvent.key === 'ArrowDown' && isFocused) {
			setShowList(true);
		}
	}

	function clickOutside(element: Element) {
		function onClick(event: any) {
			if (!element.contains(event.target)) {
				setShowList(false);
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	function getDiscountedCost(card: CivilizationAdvance, turnNumber: number) {
		const hasDiscountedByAdvanceCard = $turnsStore
			.filter((turn) => turn.turnNumber < turnNumber)
			.map((turn) => turn.cardsBought)
			.flat(1)
			.find((cardName) => cardName === card.discountedByAdvance);

		const discount = $discountByTurnStore
			.filter((turn) => turn.turnNumber < turnNumber)
			.reduce(
				(accumulator, currentValue) => {
					return {
						red: accumulator.red + currentValue.discount.red,
						green: accumulator.green + currentValue.discount.green,
						blue: accumulator.blue + currentValue.discount.blue,
						orange: accumulator.orange + currentValue.discount.orange,
						yellow: accumulator.yellow + currentValue.discount.yellow
					};
				},
				{
					red: 0,
					green: 0,
					blue: 0,
					orange: 0,
					yellow: 0
				}
			);

		const discountedByAdvanceValue = hasDiscountedByAdvanceCard
			? card.discountedByAdvanceNumber
			: 0;

		const discountRed = card.color.red ? discount.red : 0;
		const discountGreen = card.color.green ? discount.green : 0;
		const discountBlue = card.color.blue ? discount.blue : 0;
		const discountOrange = card.color.orange ? discount.orange : 0;
		const discountYellow = card.color.yellow ? discount.yellow : 0;

		const discountInventory = Math.max(
			discountRed,
			discountGreen,
			discountBlue,
			discountOrange,
			discountYellow
		);

		return card.cost - discountedByAdvanceValue - discountInventory;
	}
</script>

<svelte:window on:keydown={(key) => openListByKey(key)} />
<Stack fullWidth>
	<Inline>
		{#each selectedItems.sort((a, b) => a.name.localeCompare(b.name)) as selectedItem}
			{@const discountedCost = getDiscountedCost(selectedItem, turnNumber)}
			<Badge>
				<span>
					{selectedItem.name}
				</span>
				<span class={discountedCost !== selectedItem.cost ? 'text-red-500' : ''}>
					({discountedCost})
				</span>

				<button
					type="button"
					class=" ml-1 cursor-pointer"
					on:click={() => (disabled ? null : removeItem(selectedItem.name))}
				>
					<X class="h-3 w-3 shrink-0 opacity-50" />
				</button>
			</Badge>
		{/each}
	</Inline>
	<div class="relative w-full" use:clickOutside>
		<Command.Root class="rounded-md border h-fit">
			<Command.Input {id} {disabled} bind:value class="hidden">
				<input
					{placeholder}
					{disabled}
					on:click={() => setShowList(true)}
					on:focusin={() => setIsFocused(true)}
					on:focusout={() => setIsFocused(false)}
					bind:value
					class={cn(
						'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
					)}
				/>
			</Command.Input>
			{#if value.length > 0 || showList}
				<Command.List
					class="rounded-md border bg-popover absolute right-0 left-0 top-11 overflow-auto z-10
					"
				>
					{@const cardsInventory = items.filter(
						(item) =>
							!$turnsStore
								.filter((turn) => turn.turnNumber < turnNumber)
								.map((turn) => turn.cardsBought)
								.flat(1)
								.includes(item.name)
					)}
					{@const vp1Cards = cardsInventory
						.filter((card) => civilizationAdvancesVP1.includes(card))
						.sort((a, b) => a.name.localeCompare(b.name))}
					{@const vp3Cards = cardsInventory
						.filter((card) => civilizationAdvancesVP3.includes(card))
						.sort((a, b) => a.name.localeCompare(b.name))}
					{@const vp6Cards = cardsInventory
						.filter((card) => civilizationAdvancesVP6.includes(card))
						.sort((a, b) => a.name.localeCompare(b.name))}

					{#if vp1Cards.length}
						<Command.Group heading="VP 1 (1-100 cost)">
							{#each vp1Cards as item}
								{@const discountedCost = getDiscountedCost(item, turnNumber)}

								<Command.Item onSelect={() => addItem(item)}>
									<ListItem {item} {discountedCost} />
								</Command.Item>
							{/each}
						</Command.Group>
					{/if}
					{#if vp3Cards.length}
						<Command.Group heading="VP 3 (100-200 cost)">
							{#each vp3Cards as item}
								{@const discountedCost = getDiscountedCost(item, turnNumber)}

								<Command.Item onSelect={() => addItem(item)}>
									<ListItem {item} {discountedCost} />
								</Command.Item>
							{/each}
						</Command.Group>
					{/if}
					{#if vp6Cards.length}
						<Command.Group heading="VP 6 (200< cost)">
							{#each vp6Cards as item}
								{@const discountedCost = getDiscountedCost(item, turnNumber)}

								<Command.Item onSelect={() => addItem(item)}>
									<ListItem {item} {discountedCost} />
								</Command.Item>
							{/each}
						</Command.Group>
					{/if}
				</Command.List>
				<Command.Empty>No results found.</Command.Empty>
			{/if}
		</Command.Root>
	</div>
</Stack>
