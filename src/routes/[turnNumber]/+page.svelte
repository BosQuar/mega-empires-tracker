<script lang="ts">
	import { CivilizationAdvances } from '$lib/civilizationAdvances/types.js';
	import { civilizationAdvances } from '$lib/civilizationAdvances/values.js';

	import { Spread } from '$lib/components/layout/spread/index.js';
	import { Stack } from '$lib/components/layout/stack/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { turnsStore } from '$lib/stores/turns-store.js';
	import { superForm } from 'sveltekit-superforms/client';
	import { formSchema } from './schema.js';

	export let data;

	let turn = $turnsStore.find((turn) => turn.turnNumber === data.turnNumber);

	if (turn === undefined) {
		throw new Error('Turn not found');
	}

	const { form, errors, message, constraints, enhance } = superForm(data.form, {
		SPA: true,
		validators: formSchema,
		onUpdate({ form }) {
			// Form validation
			if (form.valid) {
				// TODO: Do something with the validated form.data
				console.log('Form is valid', form.data);
			}
		}
	});

	form.set({
		people: turn.people.toString(),
		cities: turn.cities.toString(),
		astAdvance: turn.astAdvance.toString(),
		cardsDiscount: turn.cardsDiscount.toString(),
		cardsCost: turn.cardsCost.toString(),
		monumentRed: turn.monumentRed.toString(),
		monumentGreen: turn.monumentGreen.toString(),
		monumentBlue: turn.monumentBlue.toString(),
		monumentOrange: turn.monumentOrange.toString(),
		monumentYellow: turn.monumentYellow.toString(),
		writtenRecordRed: turn.writtenRecordRed.toString(),
		writtenRecordGreen: turn.writtenRecordGreen.toString(),
		writtenRecordBlue: turn.writtenRecordBlue.toString(),
		writtenRecordOrange: turn.writtenRecordOrange.toString(),
		writtenRecordYellow: turn.writtenRecordYellow.toString(),
		isDone: turn.isDone,
		civilizationAdvances: turn.cardsBought.toString()
	});

	/* 	form.data.astAdvance = turn.astAdvance.toString();
	form.data.people = turn.people.toString();
	form.data.cities = turn.cities.toString();
	form.data.cardsDiscount = turn.cardsDiscount.toString();
	form.data.cardsCost = turn.cardsCost.toString();
	form.data.monumentRed = turn.monumentRed.toString();
	form.data.monumentGreen = turn.monumentGreen.toString();
	form.data.monumentBlue = turn.monumentBlue.toString();
	form.data.monumentOrange = turn.monumentOrange.toString();
	form.data.monumentYellow = turn.monumentYellow.toString();
	form.data.writtenRecordRed = turn.writtenRecordRed.toString();
	form.data.writtenRecordGreen = turn.writtenRecordGreen.toString();
	form.data.writtenRecordBlue = turn.writtenRecordBlue.toString();
	form.data.writtenRecordOrange = turn.writtenRecordOrange.toString();
	form.data.writtenRecordYellow = turn.writtenRecordYellow.toString();
	form.data.isDone = turn.isDone;
	form.data.civilizationAdvances = turn.cardsBought.toString(); */

	let buyFor = 0;

	let selectedItemsNames: string[] = [];

	let cardsDiscount: number = turn.cardsDiscount;
	let cardsCost: number = turn.cardsCost;

	$: hasWrittenRecords = selectedItemsNames.find(
		(cardName) => cardName === CivilizationAdvances.Written_Record
	);
	$: hasWrittenRecords ? setFormValues() : '';
	$: hasMonument = selectedItemsNames.find(
		(cardName) => cardName === CivilizationAdvances.Monument
	);
	$: hasMonument ? setFormValues() : '';

	function setCostAndDiscount(cost: number, discount: number): void {
		cardsCost = cost;
		cardsDiscount = discount;
	}

	function setFormValues() {
		if (turn === undefined) {
			throw new Error('Turn not found');
		}

		/* form.data.monumentRed = turn.monumentRed.toString();
		form.data.monumentGreen = turn.monumentGreen.toString();
		form.data.monumentBlue = turn.monumentBlue.toString();
		form.data.monumentOrange = turn.monumentOrange.toString();
		form.data.monumentYellow = turn.monumentYellow.toString();
		form.data.writtenRecordRed = turn.writtenRecordRed.toString();
		form.data.writtenRecordGreen = turn.writtenRecordGreen.toString();
		form.data.writtenRecordBlue = turn.writtenRecordBlue.toString();
		form.data.writtenRecordOrange = turn.writtenRecordOrange.toString();
		form.data.writtenRecordYellow = turn.writtenRecordYellow.toString(); */
	}

	function saveChanges() {
		console.log();
	}
</script>

<Form.Root
	form={data.form}
	schema={formSchema}
	let:config
	class="max-w-[600px]"
	on:submit={() => saveChanges()}
>
	<Form.Field name="cardsCost" {config}>
		<Form.Input class="hidden" type="number" value={cardsCost} />
	</Form.Field>
	<Form.Field name="cardsDiscount" {config}>
		<Form.Input class="hidden" type="number" value={cardsDiscount} />
	</Form.Field>
	<Form.Field name="people" {config}>
		<Form.Label>People</Form.Label>
		<Form.Input type="number" min="0" max="55" bind:value={$form.people} />
		<Form.Validation />
	</Form.Field>
	<Form.Field name="cities" {config}>
		<Form.Label>Cities</Form.Label>
		<Form.Input type="number" min="0" max="9" bind:value={$form.cities} />
		<Form.Validation />
	</Form.Field>
	<Form.Field name="astAdvance" {config}>
		<Form.Label>AST advance</Form.Label>
		<Form.Input type="number" min="-2" max="1" />
		<Form.Validation />
	</Form.Field>
	{#if hasWrittenRecords}
		<Spread class="py-2">
			<p>
				{CivilizationAdvances.Written_Record}
			</p>
		</Spread>

		<p class="text-sm text-muted-foreground">
			Acquire 10 additional points of credit tokens in any combination of colors (5 or 10)
		</p>
		<Spread>
			<Stack>
				<span class="text-green-500"> Green</span>
				<Form.Field name="writtenRecordGreen" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-blue-500"> Blue</span>
				<Form.Field name="writtenRecordBlue" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-orange-500"> Orange</span>
				<Form.Field name="writtenRecordOrange" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-yellow-500"> Yellow</span>
				<Form.Field name="writtenRecordYellow" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-red-500"> Red</span>
				<Form.Field name="writtenRecordRed" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
		</Spread>
	{/if}

	{#if hasMonument}
		<Spread class="py-2">
			<p>
				{CivilizationAdvances.Monument}
			</p>
		</Spread>
		<p class="text-sm text-muted-foreground">
			Acquire 20 additional points of credit tokens in any combination of colors (5,10,15 or 20)
		</p>
		<Spread>
			<Stack>
				<span class="text-green-500"> Green</span>
				<Form.Field name="monumentGreen" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-blue-500"> Blue</span>
				<Form.Field name="monumentBlue" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-orange-500"> Orange</span>
				<Form.Field name="monumentOrange" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-yellow-500"> Yellow</span>
				<Form.Field name="monumentYellow" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
			<Stack>
				<span class="text-red-500"> Red</span>
				<Form.Field name="monumentRed" {config}>
					<Form.Input type="number" />
				</Form.Field>
			</Stack>
		</Spread>
	{/if}

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
				turnNumber={data.turnNumber}
				on:costAndDiscount={(e) => setCostAndDiscount(e.detail.cost, e.detail.discount)}
				on:selectedItemsNames={(e) => (selectedItemsNames = e.detail)}
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
		<a href="/">
			<Button>Back</Button>
		</a>
		<Form.Button class="my-4" type="submit">Save</Form.Button>
	</Spread>
</Form.Root>
