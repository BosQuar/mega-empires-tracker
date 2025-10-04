<script lang="ts">
	import { goto } from '$app/navigation';

	import * as Dialog from '$lib/components/ui/dialog';
	import { discountTotalStore } from '$lib/stores/discount-store';
	import { turnsStore } from '../../stores/turns-store';
	import ModeToggle from '../header/mode-toggle.svelte';
	import { Spread } from '../layout/spread';
	import * as Avatar from '../ui/avatar';
	import { Button } from '../ui/button';
	import * as DropdownMenu from '../ui/dropdown-menu';

	$: isDialogOpen = false;

	async function createNewGame() {
		const turns = [
			{
				turnNumber: 1,
				cardsBought: [],
				cardsCost: 0,
				cardsDiscount: 0,
				cities: 0,
				people: 2,
				astAdvance: 1,
				isDone: true,
				calamities: [],
				monumentRed: 0,
				monumentGreen: 0,
				monumentBlue: 0,
				monumentOrange: 0,
				monumentYellow: 0,
				writtenRecordRed: 0,
				writtenRecordGreen: 0,
				writtenRecordBlue: 0,
				writtenRecordOrange: 0,
				writtenRecordYellow: 0
			},
			{
				turnNumber: 2,
				cardsBought: [],
				cardsCost: 0,
				cardsDiscount: 0,
				cities: 0,
				people: 4,
				astAdvance: 1,
				isDone: true,
				calamities: [],
				monumentRed: 0,
				monumentGreen: 0,
				monumentBlue: 0,
				monumentOrange: 0,
				monumentYellow: 0,
				writtenRecordRed: 0,
				writtenRecordGreen: 0,
				writtenRecordBlue: 0,
				writtenRecordOrange: 0,
				writtenRecordYellow: 0
			},
			{
				turnNumber: 3,
				cardsBought: [],
				cardsCost: 0,
				cardsDiscount: 0,
				cities: 0,
				people: 8,
				astAdvance: 1,
				isDone: true,
				calamities: [],
				monumentRed: 0,
				monumentGreen: 0,
				monumentBlue: 0,
				monumentOrange: 0,
				monumentYellow: 0,
				writtenRecordRed: 0,
				writtenRecordGreen: 0,
				writtenRecordBlue: 0,
				writtenRecordOrange: 0,
				writtenRecordYellow: 0
			}
		];

		localStorage.setItem('empires_turns', JSON.stringify(turns));

		turnsStore.set(turns);
		isDialogOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center px-2">
		<Spread class="text-sm pr-2">
			<span class="text-green-500">G: {$discountTotalStore.green ?? 0}</span>
			<span class="text-blue-500">B: {$discountTotalStore.blue ?? 0}</span>
			<span class="text-orange-500">O: {$discountTotalStore.orange ?? 0}</span>
			<span class="text-yellow-500">Y: {$discountTotalStore.yellow ?? 0}</span>
			<span class="text-red-500">R: {$discountTotalStore.red ?? 0}</span>
		</Spread>
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
							<p class="text-sm font-medium leading-none">Wazzup Caesar!</p>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item
							on:click={() => ($turnsStore.length > 0 ? (isDialogOpen = true) : createNewGame())}
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
			<Button variant="destructive" on:click={() => createNewGame()}>Create new</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
