<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	import * as Dialog from '$lib/components/ui/dialog';
	import type { Turn } from '@prisma/client';
	import { turnsStore } from '../../../routes/(protected)/turns-store';
	import ModeToggle from '../header/mode-toggle.svelte';
	import * as Avatar from '../ui/avatar';
	import { Button } from '../ui/button';
	import * as DropdownMenu from '../ui/dropdown-menu';

	export let name: string;

	$: isDialogOpen = false;
	$: isCreatingNew = false;

	async function createNew() {
		isCreatingNew = true;
		let turns: Turn[] = [];

		try {
			const response = await fetch('/api/game', {
				method: 'POST'
			});

			turns = await response.json();
		} catch (error) {
			console.log(error);
		}

		isCreatingNew = false;
		isDialogOpen = false;

		invalidateAll();
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center px-2">
		<!-- Add summary? -->
		<div class="flex flex-1 items-center gap-x-2 justify-end">
			<ModeToggle />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root class="h-8 w-8">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" align="end">
					<DropdownMenu.Label class="font-normal">
						<div class="flex flex-col space-y-1">
							<p class="text-sm font-medium leading-none">{name}</p>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item
							on:click={() => ($turnsStore.length > 0 ? (isDialogOpen = true) : createNew())}
							>Create new</DropdownMenu.Item
						>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item on:click={() => goto('/sign-out')}>Log out</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Create new game</Dialog.Title>
			<Dialog.Description
				>All previous game data will be deleted. Do you want to proceed?</Dialog.Description
			>
		</Dialog.Header>

		<Dialog.Footer class="justify-between">
			<Button variant="destructive" on:click={() => createNew()} disabled={isCreatingNew}
				>Create new</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
