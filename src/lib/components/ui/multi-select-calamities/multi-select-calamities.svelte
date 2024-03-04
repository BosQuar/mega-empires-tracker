<script lang="ts">
	import Inline from '$lib/components/layout/inline/inline.svelte';
	import { Stack } from '$lib/components/layout/stack';
	import { cn } from '$lib/utils';
	import { X } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Badge } from '../badge';
	import * as Command from '../command';

	export let placeholder = 'Type to search...';
	export let disabled = false;
	export let items: string[] = [];
	export let selectedItems: string[] = [];
	export let id = '';

	//TODO: Dive into error on removing initial values that are not in reference list getting into reference list

	const referenceItems = items;
	const isReferenceItem = (value: string) =>
		referenceItems.some((referenceItem) => referenceItem.toLowerCase() === value.toLowerCase());

	const dispatch = createEventDispatcher<Record<'selectedItems', string[]>>();

	let value = '';
	let showList = false;
	let isFocused = false;

	$: dispatch('selectedItems', selectedItems);
	$: items = items.filter(
		(item) =>
			isReferenceItem(item) &&
			!selectedItems.some((selectedItem) => selectedItem.toLowerCase() === item.toLowerCase())
	);
	$: value.length > 0 ? setShowList(true) : setShowList(false);

	function removeItem(value: string) {
		selectedItems = selectedItems.filter((item) => item.toLowerCase() !== value.toLowerCase());
		const newValues = isReferenceItem(value) ? [...items, value] : items;
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
					{#each items as item}
						<Command.Item onSelect={() => addItem(item)}>
							<span>{item}</span>
							<span>{item}</span>
						</Command.Item>
					{/each}
				</Command.List>
				<Command.Empty>No results found.</Command.Empty>
			{/if}
		</Command.Root>
	</div>
</Stack>
