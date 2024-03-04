<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms/client';
	import { formSchema } from './schema';

	export let data;

	const { errors, form } = superForm(data.form, { id: 'sign-in' });
</script>

<div class="px-2 lg:p-8">
	<div class="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[400px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Sign in and buy fundamentalism</h1>
			<p class="text-sm text-muted-foreground font-normal">
				Don't have a user? <a
					href="/register"
					class="underline underline-offset-4 hover:text-primary"
				>
					Register here
				</a>
			</p>
		</div>
		<Form.Root method="POST" form={data.form} schema={formSchema} let:config>
			<Form.Field {config} name="username">
				<Form.Item>
					<Form.Label>Username</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="password">
				<Form.Item>
					<Form.Label>Password</Form.Label>
					<Form.Input type="password" autocomplete="on" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button class="w-full mt-4">Sign in</Form.Button>
		</Form.Root>

		<!-- TODO: Fix this color  -->
		{#if $errors._errors}
			<p class="text-destructive">
				{$errors._errors[0]}
			</p>
		{/if}
	</div>
</div>
