<script lang="ts">
	import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';

	import { Spread } from '$lib/components/layout/spread';
	export let item: CivilizationAdvance;
	export let discountedCost: number;
</script>

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

	{#if discountedCost === item.cost}
		<span>{item.cost}</span>
	{:else}
		<span>
			<span class="text-red-500">{`${discountedCost} `}</span>
			<span>{`(${item.cost})`}</span>
		</span>
	{/if}
	<span class="text-green-500"> {item.discountGreen}</span>
	<span class="text-blue-500"> {item.discountBlue}</span>
	<span class="text-orange-500"> {item.discountOrange}</span>
	<span class="text-yellow-500"> {item.discountYellow}</span>
	<span class="text-red-500"> {item.discountRed}</span>
</Spread>
