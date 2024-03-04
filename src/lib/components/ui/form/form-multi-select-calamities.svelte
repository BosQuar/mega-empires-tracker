<script lang="ts">
	import { getFormField } from 'formsnap';
	import { onMount } from 'svelte';
	import { MultiSelectCalamities } from '.';

	const { attrStore, value, ids } = getFormField();

	export let items: string[] = [];
	export let placeholder = 'Type to search...';
	export let setFormValueAsArray = false;

	let selectedItems: string[] = [];

	/* Basic HTML forms can only handle string values
	https://superforms.rocks/concepts/nested-data#arrays-with-primitive-values */
	function setInputValue(detail: string[]): void {
		value.set(setFormValueAsArray ? detail : detail.toString());
	}

	onMount(() => {
		selectedItems = ($value as string).split(',').filter((items) => items !== '');
	});
</script>

<input class="hidden" bind:value={$value} {...$$restProps} {...$attrStore} />

<MultiSelectCalamities
	id={$ids.input}
	{...$$restProps}
	{items}
	{selectedItems}
	{placeholder}
	on:selectedItems={(e) => setInputValue(e.detail)}
/>
