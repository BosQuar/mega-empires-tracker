<script lang="ts">
	import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
	import { getFormField } from 'formsnap';
	import { createEventDispatcher, onMount } from 'svelte';
	import { MultiSelectAdvances } from '../multi-select-advances';

	const { attrStore, value, ids } = getFormField();

	export let items: CivilizationAdvance[] = [];
	export let placeholder = 'Type to search by name...';
	export let setFormValueAsArray = false;
	export let turnNumber: number;

	const dispatchSelectedItemsNames =
		createEventDispatcher<Record<'selectedItemsNames', string[]>>();

	let selectedItemsNames: string[] = [];

	/* Basic HTML forms can only handle string values
	https://superforms.rocks/concepts/nested-data#arrays-with-primitive-values */
	function setInputValue(detail: string[]): void {
		value.set(setFormValueAsArray ? detail : detail.toString());
		dispatchSelectedItemsNames('selectedItemsNames', detail);
	}

	onMount(() => {
		selectedItemsNames = ($value as string).split(',').filter((items) => items !== '');
	});
</script>

<input class="hidden" bind:value={$value} {...$$restProps} {...$attrStore} />

<MultiSelectAdvances
	id={$ids.input}
	{...$$restProps}
	{items}
	{selectedItemsNames}
	{placeholder}
	{turnNumber}
	on:selectedItemsNames={(e) => setInputValue(e.detail)}
	on:costAndDiscount
/>
