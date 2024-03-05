<script lang="ts">
	import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import Inline from '$lib/components/layout/inline/inline.svelte';
	import { Spread } from '$lib/components/layout/spread';
	import { Stack } from '$lib/components/layout/stack';
	import { cardsBoughtStore } from '$lib/stores/cards-bought-store';
	import { discountByTurnStore } from '$lib/stores/discount-store';
	import { cn } from '$lib/utils';
	import { X } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Badge } from '../badge';
	import * as Command from '../command';

	export let placeholder = 'Type to search...';
	export let disabled = false;
	export let items: CivilizationAdvance[] = [];
	export let selectedItems: string[] = [];
	export let id = '';
	export let turnNumber: number;

	//TODO: Dive into error on removing initial values that are not in reference list getting into reference list

	const referenceItems = items;
	const isReferenceItem = (value: string) =>
		referenceItems.some(
			(referenceItem) => referenceItem.name.toLowerCase() === value.toLowerCase()
		);

	const dispatch = createEventDispatcher<Record<'selectedItems', string[]>>();

	let value = '';
	let showList = false;
	let isFocused = false;

	$: dispatch('selectedItems', selectedItems);
	$: items = items.filter(
		(item) =>
			isReferenceItem(item.name) &&
			!selectedItems.some((selectedItem) => selectedItem.toLowerCase() === item.name.toLowerCase())
	);
	$: value.length > 0 ? setShowList(true) : setShowList(false);

	function removeItem(value: string) {
		selectedItems = selectedItems.filter((item) => item.toLowerCase() !== value.toLowerCase());
		const newValues = isReferenceItem(value)
			? [...items, ...referenceItems.filter((item) => item.name === value)]
			: items;
		items = newValues.sort();
	}

	function addItem(selected: string): void {
		selectedItems = [...selectedItems, selected];
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
		const hasDiscountedByAdvanceCard = $cardsBoughtStore.includes(
			card.discountedByAdvance ? card.discountedByAdvance : ''
		);

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
		{#each selectedItems as badge}
			<Badge>
				{badge}
				<button
					type="button"
					class=" ml-1 cursor-pointer"
					on:click={() => (disabled ? null : removeItem(badge))}
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
					{#each items
						.filter((item) => !$cardsBoughtStore.includes(item.name))
						.sort((a, b) => a.name.localeCompare(b.name)) as item}
						<Command.Item onSelect={() => addItem(item.name)}>
							<Spread>
								<span class="min-w-[100px]"
									><span>
										{#if item.color.green}
											<span class="text-green-500">G</span>
										{/if}
										{#if item.color.blue}
											<span class="text-blue-500">B</span>
										{/if}
										{#if item.color.orange}
											<span class="text-orange-500">O</span>
										{/if}
										{#if item.color.yellow}
											<span class="text-yellow-500">Y</span>
										{/if}
										{#if item.color.red}
											<span class="text-red-500">R</span>
										{/if}
									</span>{item.name}</span
								>

								{#if getDiscountedCost(item, turnNumber) === item.cost}
									<span>{item.cost}</span>
								{:else}
									<span>
										<span class="text-red-500">{`${getDiscountedCost(item, turnNumber)} `}</span>
										<span>{`(${item.cost})`}</span>
									</span>
								{/if}
								<span class="text-green-500"> {item.discountGreen}</span>
								<span class="text-blue-500"> {item.discountBlue}</span>
								<span class="text-orange-500"> {item.discountOrange}</span>
								<span class="text-yellow-500"> {item.discountYellow}</span>
								<span class="text-red-500"> {item.discountRed}</span>
							</Spread>
						</Command.Item>
					{/each}
				</Command.List>
				<Command.Empty>No results found.</Command.Empty>
			{/if}
		</Command.Root>
	</div>
</Stack>
