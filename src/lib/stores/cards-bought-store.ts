import { derived } from 'svelte/store';
import { turnsStore } from './turns-store';

export const cardsBoughtStore = derived(turnsStore, (turns) =>
	turns.map((turn) => turn.cardsBought).flat(1)
);
