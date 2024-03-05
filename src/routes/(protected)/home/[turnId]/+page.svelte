<script lang="ts">
	import { civilizationAdvances } from '$lib/civilizationAdvances/values.js';

	import { Spread } from '$lib/components/layout/spread/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { formSchema } from './schema.js';

	export let data;
	let { form, turn } = data;
	let buyFor = 0;

	form.data.astAdvance = turn.astAdvance.toString();
	form.data.people = turn.people.toString();
	form.data.cities = turn.cities.toString();
	form.data.cardsDiscount = turn.cardsDiscount.toString();
	form.data.cardsCost = turn.cardsCost.toString();

	form.data.isDone = turn.isDone;
	form.data.civilizationAdvances = turn.cardsBought.toString();

	let cardsDiscount: number = turn.cardsDiscount;
	let cardsCost: number = turn.cardsCost;

	function setCostAndDiscount(cost: number, discount: number): void {
		cardsCost = cost;
		cardsDiscount = discount;
	}
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config class="max-w-[600px]">
	<Form.Field name="cardsCost" {config}>
		<Form.Input class="hidden" type="number" value={cardsCost} />
	</Form.Field>
	<Form.Field name="cardsDiscount" {config}>
		<Form.Input class="hidden" type="number" value={cardsDiscount} />
	</Form.Field>
	<Form.Field name="people" {config}>
		<Form.Label>People</Form.Label>
		<Form.Input type="number" min="0" max="55" />
		<Form.Validation />
	</Form.Field>
	<Form.Field name="cities" {config}>
		<Form.Label>Cities</Form.Label>
		<Form.Input type="number" min="0" max="9" />
		<Form.Validation />
	</Form.Field>
	<Form.Field name="astAdvance" {config}>
		<Form.Label>AST advance</Form.Label>
		<Form.Input type="number" min="-2" max="1" />
		<Form.Validation />
	</Form.Field>
	<Label for="buy-for">Buy for</Label>
	<Input id="buy-for" type="number" bind:value={buyFor} />
	<Form.Field name="civilizationAdvances" {config}>
		<Form.Item>
			<Form.Label
				>Civilization Advances cost: {`${cardsCost}`}
				{#if !buyFor}
					<span></span>
				{:else if buyFor < cardsCost}
					<span>(To much:{cardsCost - buyFor})</span>
				{:else if buyFor > cardsCost}
					<span>(Remaing:{buyFor - cardsCost})</span>
				{/if}
			</Form.Label>
			<Form.MultiSelectAdvances
				items={civilizationAdvances}
				turnNumber={data.turn.turnNumber}
				on:costAndDiscount={(e) => setCostAndDiscount(e.detail.cost, e.detail.discount)}
			/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field name="isDone" {config}>
		<Form.Label>Is turn played</Form.Label>
		<Form.Checkbox />
		<Form.Validation />
	</Form.Field>
	<Spread>
		<a href="/home">
			<Button>Back</Button>
		</a>
		<Form.Button class="my-4" type="submit">Save</Form.Button>
	</Spread>
</Form.Root>
