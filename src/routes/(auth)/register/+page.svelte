<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';

	import { formSchema } from './schema';

	export let data;
	let { form } = data;
</script>

<div class="p-2 lg:p-8">
	<div class="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[400px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Register below to create a user</h1>
			<p class="text-sm text-muted-foreground font-normal">
				Already have a user? <a
					href="/sign-in"
					class="underline underline-offset-4 hover:text-primary"
				>
					Sign in here
				</a>
			</p>
		</div>
		<Form.Root method="POST" {form} schema={formSchema} let:config>
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
					<Form.Input type="password" autocomplete="new-password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="confirmPassword">
				<Form.Item>
					<Form.Label>Confirm password</Form.Label>
					<Form.Input type="password" autocomplete="new-password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Button type="submit" class="w-full mt-4">Create user</Button>
		</Form.Root>
	</div>
</div>
