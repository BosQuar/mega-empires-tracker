<script lang="ts">
	import { Spread } from '$lib/components/layout/spread/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { formSchema } from './schema.js';

	export let data;
	let { form, turn } = data;

	form.data.astAdvance = turn.astAdvance.toString();
	form.data.people = turn.people.toString();
	form.data.cities = turn.cities.toString();
	form.data.isTurnPlayed = turn.isTurnPlayed;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config class="max-w-[600px]">
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
	<Form.Field name="isTurnPlayed" {config}>
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